import React from 'react'


const nombreUser = (props) => { 
    if (props.Nombre != undefined) {
       return (
           <div>
               Bienvenido, {props.Nombre} 
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
