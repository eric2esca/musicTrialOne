import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Wrap from '../../hoc/Wrap/Wrap';
import './playlist.css';


const playlist = (props) => {
    return(
            <div className="PlaylistCard">
                <img />
                <div className="alert alert-dark" role="alert">
                    Song Name
                </div>
            </div>
    );
};

export default playlist;