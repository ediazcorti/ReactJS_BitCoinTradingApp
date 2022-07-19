import React from "react";
import {BrowserRouter as Router, Switch , Route, Link} from 'react-router-dom';
import Login from '../pages/Login';

function Routes () { 
return (
{
    // VERSION DOCUMENTACION
    /* <Router>
<Link to ="/" component= {Login}> Login </Link>
<Switch>

<Route path="/Logear"></Route>


</Switch>
</Router> */


 // VERSION YOUTUBE 
// <BrowserRouter>
// <Routes>

// <Route path="/" component={Login}/> 

// </Routes>

// </BrowserRouter>


}
);

}

// function Login () { 
//     return <h2> Login</h2>
// }

export default Routes;