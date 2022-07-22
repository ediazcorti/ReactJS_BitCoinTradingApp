import React from 'react';
import LoginForm from './LoginForm';



const BASE_URL = "https://crypto.develotion.com/"








const Login = (props, {getUsuario}) => {




    const logearse = (object) => {
        // ACA HACER UNA FUNCION QUE TERMINE RETORNANDO UN OBJETO USUARIO; MIENTRAS ESTARÁ HARDCODE
        const usuario = {
            apiKey: object.apiKey,
            id: object.id
        }
        props.loginFunction(usuario)
        
        // Cambiar a Ruta HOME:

    }


    return (
        <div>

            <h1>Hola soy pagina login</h1>

            <LoginForm  retornarLogin={logearse} login={login} getUsuario={getUsuario} />

            {/* <input type="button" value="Cargar Nombre Usuario" onClick={() => {
                logearse()
            }} /> */}

            {/* BOTON VIEJO DE LOGIN CON PRECARGA DE CRYPTO CRYPTO */}
            {/* <input type="button" value="Logearse" onClick={() => {
                login('crypto', 'crypto')
            }} /> */}



        </div>
    )
}

const login = async (user, pass) => {
    try {
        const response = await fetch(`${BASE_URL}/login.php`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                usuario: user,
                password: pass,
            }),
        });


        if (response.status == 200) {

            console.log("Logeo Exitoso en API")
            let resultado = response.json();
            console.log(resultado);
            return resultado;
            // return {
            //     apiKey: resultado.apiKey,
            //     id: resultado.id
            // }

            //  return response.json() //.then((response) => console.log(response))


        }

        else {
            return Promise.reject("Ha ocurrido un error" + response.status)
        }
        // .then((response) => response.json())
        //          .then((result) => console.log(getCoins(result.apiKey)))

    }
    catch (error) {
        console.log(error);
    }

};


const getCoins = (apiKey) => {
    return fetch(`${BASE_URL}/monedas.php`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            apiKey: apiKey,
        },
    })


}

// function logearse  (user, pass)  {
//     // Devuelvo la promesa del fetch
//     return fetch(`${BASE_URL}/login.php`, {
//         method: 'POST',
//         headers: {
//             'Content-type': 'application/json',
//         },
//         body: JSON.stringify({
//             usuario: user,
//             password: pass,
//         }),
//     });
// };

// function logearUser(user, password) {
//     logearse(user, password)
//         .then((response) => response.json())
//         .then((result) => console.log(result))
//         .catch((e) => {
//             console.log('Ha ocurrido un error', e);
//         });
// }


// login ('crypto', 'crypto')



// function Logeo(user, password) { 


// }


export default Login