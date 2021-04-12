import React from 'react';
import './style.css';
import LightSpeed from 'react-reveal/LightSpeed';



function About(){
    return(
        <LightSpeed right>
        <h2 style={{display:'flex', flexDirection:'column', position:'absolute', top:'20%',left:'10%', transform:'translate(-50%,-50%)', color:'#fff', fontWeight:'bold'}}>ABOUT US</h2>
        <p style={{position:'absolute', textAlign:'justify', width:"650px", color:'white',top:"50%",fontStyle:'italic', fontSize:'16px', left:'10%',transform:'translate(-50%,-50%)'}}> Lorem Lipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
        </LightSpeed>
   );
}

export default About;