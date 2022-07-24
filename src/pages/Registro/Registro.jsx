import './Registro.css'
import RegistroForm from './RegistroForm'

const CreateRegistro = ({ onRegistroUser }) => {
  return (
    //invoco al loginForm
    <>
    
      <section className='d-flex flex-md justify-content-center login'>
        <div className='card'>
          <h3>Registro screen</h3>
          <section className='card-body'>
            <RegistroForm onLoginUser={onRegistroUser} />
          </section>
        </div>
      </section>
    </>
  )
}

export default CreateRegistro