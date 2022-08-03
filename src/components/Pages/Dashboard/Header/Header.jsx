import React from 'react'
import { useSelector , useDispatch } from 'react-redux';
import { setLogoutUser } from  '../../../../app/slices/userSlice'
import Button from '../../../UI/Button/Button';



const Header = () =>  { 
    const usuario = useSelector((state) => state.user)
    const dispatch = useDispatch()
   

    console.log("El usuario actual es:")
    console.log(usuario.user)

    const nombreUser = () => { 
  
       // console.log(props)
        if (usuario.user.apiKey != '' ) {
           
            // const { id } = props.getUsuario
            const id = usuario.id
           return (
               <div>
                   Bienvenido, {id} 
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

        if (usuario.apiKey != '' ) 
            { 
               return ( <Button
                cta='Deslogearse'
                classColor={'btn-primary'}
                onHandleClick={() => dispatch(setLogoutUser) }
              />)
            }
            else { 
                return (<h1>No cumplió condicion de mostrarlogout</h1>)
            }
    }
    

return (

    <div>
        <h2>Header 1</h2> 



        {   nombreUser()}    
        { mostrarLogout()}    
     
    </div>


 );

}

export default Header;
