import { useRef } from 'react'
import { registro } from '../../../../Services/ServiceAsync'
import Button from '../../../UI/Button/Button'

const RegistroForm = ({ onLoginUser }) => {
  const inputUserName = useRef()
  const inputPassword = useRef()

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
        <input className='form-control' type='text' ref={inputidDepartamento} />
        <br />
        <br />
        <label>Ciudad</label>
        <br />
        <input className='form-control' type='text' ref={inputidCiudad} />
        <br />
        <br />
        <Button
          cta='Registro'
          classColor={'btn-primary'}
          onHandleClick={onHandleRegistro}
        />
      </form>
    </>
  )
}

export default RegistroForm
