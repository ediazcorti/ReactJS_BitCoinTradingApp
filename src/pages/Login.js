import React from 'react';




const BASE_URL = "https://crypto.develotion.com/"






const LoginPage = () => {
    return (
        <div>
            <h1>Hola soy pagina login</h1>

 
            <input type="button" value="Logearse" onClick= { () => { 
                login('crypto', 'crypto')
            }}  />  



        </div>
    )
}

const login = async (user, pass) => { 
    try { 
const response = await fetch (`${BASE_URL}/login.php`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                usuario: user,
                password: pass,
            }),
        });
        console.log(response)
        // .then((response) => response.json())
        //          .then((result) => console.log(getCoins(result.apiKey)))

    }
    catch(error) { 
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


export default LoginPage