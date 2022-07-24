import { useEffect, useRef, useState } from 'react'
import { registro, ObtenerCiudades } from '../../../Services/ServiceAsync'
import Button from '../../../components/UI/Button/Button'



const RegistroForm = ({ onRegistroUser, ObtenerDepartamentos, ObtenerCiudad }) => {
  const inputUserName = useRef()
  const inputPassword = useRef()
  const inputidCiudad = useRef()
  const inputidDepartamento = useRef()
  
  const selectValue = useRef()
  const selectElegido = selectValue.current.value

  // 1. UseState de Dptos
  const [departamentos, setDepartamentos] = useState([]);
  // 2. Funcion para Setear los Dptos
  const listarDptos = (a) =>  {
    setDepartamentos(a)
    console.log(a)
   }
   //3. Llamar una funcion nueva, que haga FuncionFetch y después haga listarDptos(response) - > actualiza lista dptos
    const LlenarSelectDptos = () => {          
      const response = ObtenerDepartamentos("8d9b74c168daf7f33965cf02603d94ea").then(value => listarDptos(value.departamentos))
      console.log(departamentos)      
    }

    useEffect(() => {
      LlenarSelectDptos()
    }, []);

   // 1. UseState de Ciudades + Funcion Setter
   const [ciudades, setCiudades] = useState([]);
   // 2. Funcion para Setear los Dptos
   const listarCiudades = (a) =>  {
     setCiudades(a)
     console.log(a)
    }


   // 2. Funcion nueva que llame Al Fetch y despues haga listarCiudades(response) -> actalizar lista ciudades
   const LlenarCiudades = () => {          
    const response = ObtenerCiudades("8d9b74c168daf7f33965cf02603d94ea").then(value => listarCiudades(value.ciudades))
    console.log(ciudades)      
  }
   //
   
   //3. UseEffect para Llamar a llenar ciudades
   useEffect(() => {
    LlenarCiudades()
    console.log("Se cambió el dpto")
  }, [selectElegido.current.value]);

  //funcion que toma los datos del form
  const onHandleRegistro = async e => {
    e.preventDefault()
    //TOMO LOS  DATOS DE LOS IMPUT
    const userName = inputUserName.current.value
    const password = inputPassword.current.value
    const idDepartamento = inputidDepartamento.current.value
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
        <select
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
          </select>  

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
