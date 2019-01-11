import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Wrap from '../../hoc/Wrap/Wrap';
import './playlist.css';


const playlist = (props) => {
    return(
            <div className="PlaylistCard">
               {props.song.map(song => (
                   <div className="alert alert-dark" role="alert" key={song.key}>
                     {song.name}
                   </div>
               ))}                
                
                {console.log(props.song)}
            </div>
    );
};

export default playlist;