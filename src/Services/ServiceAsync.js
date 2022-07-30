//URL BASE
const BASE_URL = 'https://crypto.develotion.com';

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

        // si esta todo okey

        if (response.status === 200) {
            return response.json();
        } else {
            return Promise.reject('Ha ocurrido un error', response.status);
        }



    } catch (error) {
        // si rejecta
        console.log(error);
    }
};



//REGISTRO

const registro = async (user, pass,idDepartamento,idCiudad) => {



    try {

        const response = await fetch(`${BASE_URL}/usuarios.php`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                usuario: user,
                password: pass,
                idDepartamento: idDepartamento,
                idCiudad: idCiudad,
            }),
        });

        // si esta todo okey

        if (response.status === 200) {
            return response.json();
        } else {
            return Promise.reject('Ha ocurrido un error', response.status);
        }



    } catch (error) {
        // si rejecta
        console.log(error);
    }
};
//TRAER MONEDAS

const getCoins = (apiKey) => {

    try {
        const fetchPromise = fetch(`${BASE_URL}/monedas.php`, {
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

//OBTENER DEPARTAMENTOS

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

//OBTENER CIUDADES

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
                
            },
        });
        return fetchPromise.then((response) => {
            if (response.status === 200) {
                console.log(response.json());
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


//OBTENER TRANSACCIONES

const ObtenerTransacciones = (apiKey,idUsuario) => {

    try {
        const fetchPromise = fetch(`${BASE_URL}/transacciones.php?idUsuario=${idUsuario}`, {
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


// calcular monto total invertido

// const MontoTotalTransacciones = (unaListaTransacciones) => {
//     //separo las compras de las ventas
//     const Compras = unaListaTransacciones.filter(transaccion => transaccion.tipo_operacion == 0);
//     const Ventas = unaListaTransacciones.filter(transaccion => transaccion.tipo_operacion != 0);
//     let MontoTotalCompras=0;
//     let MontoTotalVentas=0;
//     let MontoTotalInvertido=0;

//     // calcular compras en pesos
//     //busco la moneda
//     Compras.forEach(compra => {

//         ListaMonedas.forEach(moneda => {

//             if (compra.moneda == moneda.id) {

//                let MontoDeCompras = (compra.cantidad * compra.valor_actual) * moneda.cotizacion;
//                MontoTotalCompras += MontoDeCompras;

//             }
// //ya tnego la cotizacion
//            return MontoTotalCompras;
//         })
       
    
//     });

//     //VENTAS
//     Ventas.forEach(venta => {

//         ListaMonedas.forEach(moneda => {

//             if (venta.moneda == moneda.id) {

//                let MontoDeVentas = (venta.cantidad * venta.valor_actual) * moneda.cotizacion;
//                MontoTotalVentas += MontoDeVentas;

//             }
// //ya tnego la cotizacion
//            return MontoTotalVentas;
//         })
       
    
//     });

// console.log(MontoTotalCompras)
// console.log(MontoTotalVentas)

// MontoTotalInvertido = MontoTotalCompras-MontoTotalVentas;

// return MontoTotalInvertido;
// }





export {login,registro,
    getCoins,
    ObtenerCiudades,
    ObtenerDepartamentos,
    ObtenerCiudadesPorDepartamento,
    ObtenerTransacciones,
    // MontoTotalTransacciones
};


(async () => {
    //const { apiKey } = await login("crypto", "crypto");
   // console.log(apiKey)
   // const { monedas } = await getCoins(apiKey);
   // console.log(monedas);
   // const { departamentos } = await ObtenerDepartamentos(apiKey);
   // console.log(departamentos);
   // const { ciudades } = await ObtenerCiudades(apiKey);
   // console.log(ciudades);
   //const { ciudad } = await ObtenerCiudadesPorDepartamento("8945f0588511e363683eeb33329545af", 3207);
    //console.log(ciudad);
   // const { transacciones } = await ObtenerTransacciones(apiKey);
   // console.log(transacciones);



})();

