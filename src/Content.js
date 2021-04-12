import React from 'react';
import './style.css';
import Fade from 'react-reveal/Fade';

function Content(){
    return(
<>
<Fade top>
<div className='content d-flex justify-content-center' style={{flexDirection:'column'}}>
<h1 className='heading'>Welcome to Website.</h1>
<span>We Believe in taking Challenges. Lorem lipsum orto sure  lipsum orto surem Lorem lipsum orto surem</span>
<button style={{marginLeft:'220px'}} className='mt-5 '>Get Quote</button>
</div>
</Fade>
</>
    );
}

export default Content;