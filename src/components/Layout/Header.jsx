import React from 'react'
import { useSelector , useDispatch } from 'react-redux';
import { getUser, setLoginUser, setLogoutUser } from  '../../app/slices/userSlice'




const Header = () =>  { 
    const usuario = useSelector ((state) =>  state.user)     
    const dispatch = useDispatch()
   

    console.log("El usuario actual es:")
    console.log(usuario.user)

    const nombreUser = () => { 
  
       // console.log(props)
        if (usuario.apiKey != '' ) {
           
            // const { id } = props.getUsuario
            const id = usuario.id
           return (
               <div>
                   Bienvenido, {id} 
               </div>
           )
        }
        else { 
            return false
          // console.log("Usuario No Loggeado")
        }
       }

    const mostrarLogout = () =>  { 

        if (nombreUser(usuario)) 
            { 
               return ( <button onClick={() => dispatch(setLogoutUser)  }>Desloguearse</button>)
            }
    }
    

return (

    <div>
        <h2>Header 1</h2> 
        {   nombreUser()  }    
        { mostrarLogout()}     
    </div>


 );

}

export default Header;
