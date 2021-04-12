import React from 'react';
import './style.css';
import Bounce from 'react-reveal/Bounce';


function Contact(){
    return(
        <>
        <Bounce left>
         <h2 style={{display:'flex', flexDirection:'column', position:'absolute', top:'35%', left:"10%", transform:'translate(-50%,-50%)', color:'#fff', fontWeight:'bold'}}>CONTACT US</h2>

        <address style={{display:'flex',borderTop:'1px solid #ddd' ,borderBottom:' 1px solid #ddd',padding:"15px", flexDirection:'column', position:'absolute', top:'60%', left:"10%", transform:'translate(-50%,-50%)', color:'#fff', fontStyle:"italic"}}>
            101, Paradise Banglow
            Lotus City, Gwalior
            474001 M.P.
            +91-2525254979
        </address>
        </Bounce>
</>     
    );
}

export default Contact;