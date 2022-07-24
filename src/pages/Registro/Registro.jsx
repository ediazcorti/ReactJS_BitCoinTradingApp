import './Registro.css'
import RegistroForm from './RegistroForm/RegistroForm'



const Registro = ({ onRegistroUser }) => {

  const BASE_URL = 'https://crypto.develotion.com';

  const ObtenerDepartamentos = (apiKey) => {

    try {
        const fetchPromise = fetch(`${BASE_URL}/departamentos.php`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                apiKey: apiKey,

            },
        });
        return fetchPromise.then((response) => {
            if (response.status === 200) {     
              let resultado = response.json()         
              return resultado;
            } else {
                return Promise.reject('Ha ocurrido un error', response.status);
            }

        });

    } catch (error) {
        // si rejecta
        console.log(error);
    }
};






  return (
    //invoco al loginForm
    <>
    
      <section className='d-flex flex-md justify-content-center login'>
        <div className='card'>
          <h3>Registro screen</h3>
          <section className='card-body'>
            <RegistroForm onRegistroUser={onRegistroUser} ObtenerDepartamentos={ObtenerDepartamentos} />
          </section>
        </div>
      </section>
    </>
  )
}

export default Registro