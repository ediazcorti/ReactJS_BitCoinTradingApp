import React from 'react'






const Header = (props) =>  { 

    const nombreUser = (props) => { 
       // console.log(props)
        if (props.getUsuario != null ) {
            const { id } = props.getUsuario
    
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


return (

    <div>
        <h2>Header 1</h2> 
        {   nombreUser(props)  }        
    </div>


 );

}

export default Header;
