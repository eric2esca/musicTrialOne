import React from 'react';
import './Button.css';

const Buttons = (props) => {
    return(
        <button 
            onClick={() => window.location = 'http://localhost:5555/login'}>
            Sign in with Spotify
        </button>   
    );
};

export default Buttons;