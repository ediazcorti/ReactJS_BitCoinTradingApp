import { useEffect, useRef, useState } from 'react'
import { registro } from '../../../Services/ServiceAsync'
import Button from '../../../components/UI/Button/Button'



const RegistroForm = ({ onRegistroUser, ObtenerDepartamentos }) => {
  const inputUserName = useRef()
  const inputPassword = useRef()
  const inputidCiudad = useRef()
  const inputidDepartamento = useRef()

  // 1. UseState de Dptos
  const [departamentos, setDepartamentos] = useState(["Vacio", "Vacio"]);
  // 2. Funcion para Setear los Dptos
  const listarDptos = (a) =>  {
    setDepartamentos(a)
    console.log(a)
   }
   //3. Llamar una funcion nueva, que haga FuncionFetch y después haga listarDptos(response) - > actualiza lista dptos
    const LlenarSelectDptos = () => { 
      var dptos = []
      
      const response = ObtenerDepartamentos("8d9b74c168daf7f33965cf02603d94ea").then(value => value.departamentos)
      
      // dptos.splice(0, dptos.length, ...value.departamentos);
      // value.departamentos.splice(0, value.departamentos.length, ...dptos
      //         .then((result) => console.log(result))   
      // var resultado = JSON.parse(response)
       // console.log(dptos)        
      // console.log(response)
         
      var dptos = []
      dptos = response.departamentos

     
      console.log(dptos)
      listarDptos(dptos)
    }

    useEffect(() => {
      LlenarSelectDptos()
    }, []);

   //4. Despues a eso es a lo que va a llamar el MAP
   
   // 

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
{/* 
           <select
            id="comboDepartamento"
            name="departmentId"
            className="form-control"
          >
            {departamentos.map((dpto) => {
              return (
                <option value="Hola"   >
                  "Hola"
                </option>
              );
            })}
          </select>  */}



        {/* <input className='form-control' type='select' ref={inputidDepartamento}/> */}
        
        <br />
        <br />
        <label>Ciudad</label>
        <br />
        <input className='form-control' type='select' ref={inputidCiudad} />
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
