import React, { useEffect } from "react";
import { useSelector , useDispatch } from 'react-redux';
import { getUser, setLoginUser, setLogoutUser } from  '../../app/slices/userSlice'
import Button from '../UI/Button/Button';



const Header = () =>  { 
    const usuario = useSelector ((state) =>  state.user)     
    const usuarioid = useSelector ((state) =>  state.user.id)  
    const dispatch = useDispatch()

    
    useEffect(() => {

    }, [usuario]);

    console.log("El usuario actual EN HEADER es:")
    console.log(usuario.user)

    const nombreUser = () => { 
  
       // console.log(props)
        if (usuarioid != null ) {
           
            // const { id } = props.getUsuario
            const id = usuario.id
           return (
               <div>
                   Bienvenido, {id} 
                   <br />
                   <Button
                cta='Deslogearse'
                classColor={'btn-primary'}
                onHandleClick={() => dispatch(setLogoutUser) }
              />
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
        {/* {   nombreUser()  }     */}
        {/* { mostrarLogout()}      */}
    </div>


 );

}

export default Header;
