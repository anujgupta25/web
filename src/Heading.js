import React from 'react';
import './style.css';
import {NavLink} from 'react-router-dom';
import './bootstrap.css';

function Heading(){
    return(
<div className='main'>
<nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
<div className="container">
<div className='brand'>AG Vlogs</div>
<ul>
    <li>
    <NavLink exact activeClassName='active_class' to='/'> Home </NavLink>
    </li>

    <li>
    <NavLink exact activeClassName='active_class' to='/about'> About </NavLink>
    </li>

    <li>
    <NavLink exact activeClassName='active_class' to='/contact'> Contact Us </NavLink>
    </li>
    
</ul>

 
 

</div>
</nav>
<div className='center'>
</div>
 </div>
   );
}

export default Heading;