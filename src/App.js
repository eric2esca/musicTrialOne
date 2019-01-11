import React, { Component } from 'react';
import './App.css';
import Wrap from './hoc/Wrap/Wrap';
import Filter from './components/Filter/filter';
import Playlist from './components/Playlist/playlist';

let fakeServerData = {
  user: {
    name: 'Eric Escamilla',
    playlistName: 'HouseTunes',
    songs: [{name: 'Lose Yourself', key: 1},{name: 'Song2', key: 2},{name: 'song3', key: 3}]
  }
}

class App extends Component {
  state = {
    serverData: {}
  }

  componentDidMount() {
    this.setState({serverData: fakeServerData});
  }

  render() {
    let user = this.state.serverData.user;

    return (
      user ?
      <div className="App">
        <Wrap>
          <h1>{user && user.name}'s Playlist</h1>
          <Filter />
          <Playlist song={user && user.songs}/>
        </Wrap>
      </div> : 'loading'
    );
  }
}

export default App;
