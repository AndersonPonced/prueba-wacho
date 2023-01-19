import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


import {Registrarse} from '../pages/Registrarse'
import {Cuerpo} from './Cuerpo'
import {useHistory} from 'react-router-dom'



export const Navbar = () => {


const history = useHistory();
const handleClick = () => history.push("/Registrarse")


  return (
    <div>
      <button onClick={handleClick} >lolo</button>
    <Router>    
    <div className='Navbar'>
  
 <div className='band'>

  
 <Link to="/" className='wallet' >WalletFresh</Link>

 </div>
 
    <div className='nav'>
 <div>
<p className='num1'>Mercado</p>
<p className='num2'>NFT</p>

<input className='nave'/> 
<button className='boton'>Buscar</button>



<p className='num3'>Iniciar Sesión</p>

 <Link to="Registrarse" className='num4' >hola</Link>

 </div>

<Switch>

<Route path="/Registrarse" element={Registrarse}/>

<Route path="/" >

<Cuerpo/>


</Route>
</Switch>


     

   </div>
   
  


  
    </div>
    </Router>
    </div>
  )
}

export default Navbar
