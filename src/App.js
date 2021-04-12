import React from 'react';
import './style.css';
import './bootstrap.css';
import {Route, Switch} from 'react-router-dom';
import Heading from './Heading.js';
import Home from './Home.js';
import About from './About.js';
import Contact from './Contact.js';

function App(){
    return(
        <>
       <Heading/>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/contact' component={Contact} />
                <Route exact component={Home} />

            </Switch>
        
        </>
    );

}

export default App;