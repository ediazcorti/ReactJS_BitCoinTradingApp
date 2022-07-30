import { useEffect, useRef, useState } from 'react'
import { registro, ObtenerCiudades } from '../../../Services/ServiceAsync'
import Button from '../../../components/UI/Button/Button'



const RegistroForm = ({ onRegistroUser, ObtenerDepartamentos, ObtenerCiudad }) => {
  const inputUserName = useRef()
  const inputPassword = useRef()
  const inputidCiudad = useRef()
  const inputidDepartamento = useRef()
  const selectValue = useRef()

  const [seleccionado, setSeleccionado] = useState([])

  // 1. UseState de Dptos
  const [departamentos, setDepartamentos] = useState([]);
  const [cSele, setCSele] = useState("None")
  const [allC, setAllC] = useState([])
  const [allC2, setAllC2] = useState([])
  let eValue = 0
  let eValue2 = 0

const getValue = (e) => {
  eValue = e.target.value
  setCSele(eValue)
}

const getValue2 = (e) => {
  eValue2 = e.target.value
  setAllC2(eValue2)
}

  // 2. Funcion para Setear los Dptos

  const listarDptos = (a) =>  {
    setDepartamentos(a)
    console.log(a)
   }
   //3. Llamar una funcion nueva, que haga FuncionFetch y después haga listarDptos(response) - > actualiza lista dptos
    const LlenarSelectDptos = () => {          
      const response = ObtenerDepartamentos("8d9b74c168daf7f33965cf02603d94ea").then(value => listarDptos(value.departamentos))
   
    }

    useEffect(() => {
      LlenarSelectDptos();
      
    }, []);

   // 1. UseState de Ciudades + Funcion Setter
   const [ciudades, setCiudades] = useState([]);
   // 2. Funcion para Setear los Dptos
   const listarCiudades = (a) =>  {

    setCiudades(a)

    }


   // 2. Funcion nueva que llame Al Fetch y despues haga listarCiudades(response) -> actalizar lista ciudades
   const LlenarCiudades = () => {          
    const response = ObtenerCiudades("8d9b74c168daf7f33965cf02603d94ea").then(value => listarCiudades(value.ciudades))
    
  }
   //
   
   //3. UseEffect para Llamar a llenar ciudades
   useEffect(() => {
    LlenarCiudades()
    const ciu = ciudades.filter(ciudad => ciudad.id_departamento == cSele)
    setAllC(ciu)
    console.log(allC)
  }, [cSele]);

  //funcion que toma los datos del form
  const onHandleRegistro = async e => {
    e.preventDefault()
    //TOMO LOS  DATOS DE LOS IMPUT
    const userName = inputUserName.current.value
    const password = inputPassword.current.value
    const idDepartamento = cSele
    const idCiudad = allC2

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
    <div>
      <form>
        {/* <label>Username</label>
        <br /> */}
        <h1>{cSele}</h1>
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
            onChange={getValue}
          >
            <option value="">Seleccionar Departamento</option>
            {departamentos.map((dpto) => {
              return (
                <option key={dpto.id} value={dpto.id} iso2={dpto.iso2}>
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
             onChange={getValue2}
          >
            <option value="">Seleccionar Ciudad</option>
            {allC.map((ciudad) => {
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
    </div>
  )
}

export default RegistroForm
