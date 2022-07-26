import './Registro.css'
import RegistroForm from './RegistroForm/RegistroForm'



const Registro = ({ onRegistroUser }) => {

  const BASE_URL = 'https://crypto.develotion.com';

  const ObtenerDepartamentos = () => {

    try {
        const fetchPromise = fetch(`${BASE_URL}/departamentos.php`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                

            },
        });
        return fetchPromise.then((response) => {
            if (response.status === 200) {     
            
              let resultado = response.json()         
               return resultado;
            } else {
                return Promise.reject('Ha ocurrido un error en pantalla Registro', response.status);
            }

        });

    } catch (error) {
        // si rejecta
        console.log(error);
    }
};



const ObtenerCiudades = (apiKey) => {

  try {
      const fetchPromise = fetch(`${BASE_URL}/ciudades.php`, {
          method: 'GET',
          headers: {
              'Content-type': 'application/json',
              apiKey: apiKey,

          },
      });
      return fetchPromise.then((response) => {
          if (response.status === 200) {                
              return response.json();
          } else {
              return Promise.reject('Ha ocurrido un error', response.status);
          }

      });

  } catch (error) {
      // si rejecta
      console.log(error);
  }
};



//OBTENER CIUDADES POR DEARTAMENTO

const ObtenerCiudadesPorDepartamento = (apiKey, idDepartamento) => {

  try {
      const fetchPromise = fetch(`${BASE_URL}/ciudades.php?idDepartamento=${idDepartamento}`, {
          method: 'GET',
          headers: {
              'Content-type': 'application/json',
              apiKey: apiKey,
              //idDepartamento : idDepartamento
          },
      });
      return fetchPromise.then((response) => {
          if (response.status === 200) {
              
              response.json();
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
            <RegistroForm  ObtenerDepartamentos={ObtenerDepartamentos} ObtenerCiudades={ObtenerCiudades} ObtenerCiudadesPorDepartamento={ObtenerCiudadesPorDepartamento}/>
          </section>
        </div>
      </section>
    </>
  )
}

export default Registro