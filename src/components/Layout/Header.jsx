import React from 'react'


const nombreUser = (props) => { 
    props.getUser()
    if (props != null ) {
       return (
           <div>
               Bienvenido, {props.nombre} 
           </div>
       )
    }
    else { 
       console.log("Usuario No Loggeado")
    }
   }



const Header = (props) =>  { 
return (

    <div>
        <h2>Header 1</h2> 
        {   nombreUser(props)  }        
    </div>


 );

}

export default Header;
