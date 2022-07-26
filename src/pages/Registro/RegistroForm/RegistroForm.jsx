import { useEffect, useRef, useState } from 'react'
import { registro } from '../../../Services/ServiceAsync'
import Button from '../../../components/UI/Button/Button'



const RegistroForm = ({ onRegistroUser, ObtenerDepartamentos, ObtenerCiudades, ObtenerCiudadesPorDepartamento }) => {
  const inputUserName = useRef()
  const inputPassword = useRef()
  const inputidCiudad = useRef()
  const inputidDepartamento = useRef()  
    let selectValue = useRef()
  
  const [value, setValue] = useState();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  
 
  // let combodepartamento = document.getElementById("comboDepartamento").value

  // 1. UseState de Dptos
  const [departamentos, setDepartamentos] = useState([]);
  // 2. Funcion para Setear los Dptos
  const listarDptos = (a) =>  {
    setDepartamentos(a)
    console.log(a)
   }
   //3. Llamar una funcion nueva, que haga FuncionFetch y después haga listarDptos(response) - > actualiza lista dptos
    const LlenarSelectDptos = () => {          
      const response = ObtenerDepartamentos("8d9b74c168daf7f33965cf02603d94ea").then(value1 => listarDptos(value1.departamentos))
      console.log(departamentos)      
    }

    useEffect(() => {
      LlenarSelectDptos()
    }, [value]);

   // 1. UseState de Ciudades + Funcion Setter
   const [ciudades, setCiudades] = useState([]);
   // 2. Funcion para Setear los Dptos
   const listarCiudades = (a) =>  {
     setCiudades(a)
     console.log(a)
    }


   // 2. Funcion nueva que llame Al Fetch y despues haga listarCiudades(response) -> actalizar lista ciudades
   const LlenarCiudades0 = () => {          
    const response = ObtenerCiudades("8945f0588511e363683eeb33329545af").then(value1 => listarCiudades(value1.ciudades))
    console.log(ciudades)      
  }
  //3. Llamar una funcion nueva, que haga FuncionFetch y después haga listarDptos(response) - > actualiza lista dptos
  const LlenarCiudades2 = (value) => {          
    const response = ObtenerCiudadesPorDepartamento("8945f0588511e363683eeb33329545af", value).then(value1 => listarCiudades(value1.ciudades))
    console.log(departamentos)      
  }



   //
   
   //3. UseEffect para Llamar a llenar ciudades
   useEffect(() => {
    LlenarCiudades0(value)
    console.log("Se cambió el dpto")
  }, [value]);

  //funcion que toma los datos del form
  const onHandleRegistro = async e => {
    e.preventDefault()
    //TOMO LOS  DATOS DE LOS IMPUT
    const userName = inputUserName.current.value
    const password = inputPassword.current.value
    // Acá tiene que agarrar la current value del select de DPTO
    const idDepartamento = inputidDepartamento.current.value
     // Acá tiene que agarrar la current value del select de CIUDAD
    const idCiudad = inputidCiudad.current.value

    if (userName !== '' && password !== '' && idDepartamento !== '' && idCiudad !== '') {
      //si el usuario y el password estan completos
      try {
        const { apiKey, id } = await registro(userName, password,idDepartamento,idCiudad)
        //tomo el apiKey y el id y se los paso a la funcion login del serivices.js
        const user = { apiKey: apiKey, id: id,idDepartamento:idDepartamento,idCiudad:idCiudad }
        console.log(user);
        //creo el objeto user
        onRegistroUser(user)
      } catch (error) {
        alert('Ha ocurrido un error', error)
      }
    } else {
      alert('Por favor complete los campos')
    }
  }
  return ( 
    <>
      <form>
        <label>Username</label>
        <br />
        <input className='form-control' type='text' ref={inputUserName} />
        <br />
        <label>Password</label>
        <br />
        <input className='form-control' type='password' ref={inputPassword} />
        <br />
        <br />
        <label>Departamento</label>
        <br />
        {/* <select className="form-control" name="selectDpto" id="selectDpto" ref={inputidDepartamento}>


        </select> */}
{ 
           <select
            id="comboDepartamento"
            name="departmentId"
            className="form-control"
            ref= {selectValue}
             onChange={handleChange}
          >
            {departamentos.map((dpto) => {
              return (
                <option key={dpto.id} value={dpto.id}   >
                  {dpto.nombre}
                </option>
              );
            })} 
          </select>  }



        {/* <input className='form-control' type='select' ref={inputidDepartamento}/> */}
        
        <br />
        <br />
        <label>Ciudad</label>
        <br />
        {  <select
            id="comboCiudad"
            name="ciudadId"
            className="form-control"
          >
            {ciudades.map((ciudad) => {
              return (
                <option key={ciudad.id} value={ciudad.id}   >
                  {ciudad.nombre}
                </option>
              );
            })} 
          </select>   }

        {/* <input className='form-control' type='select' ref={inputidCiudad} /> */}
        <br />
        <br />
        <Button
          // cta='Registro'
          classColor={'btn-primary'}
          onHandleClick={onHandleRegistro}
        />
      </form>
    </>
  )
}

export default RegistroForm
