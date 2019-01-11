import React, { Component } from 'react';
import './App.css';
import Wrap from './hoc/Wrap/Wrap';
import Filter from './components/Filter/filter';
import Playlist from './components/Playlist/playlist';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Wrap>
          <h1>Eric's Playlist</h1>
          <Filter />
          <Playlist/>
        </Wrap>
      </div>
    );
  }
}

export default App;
