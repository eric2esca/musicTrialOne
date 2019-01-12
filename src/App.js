import React, { Component } from 'react';
import './App.css';
import Wrap from './hoc/Wrap/Wrap';
import Filter from './components/Filter/filter';
import Playlist from './components/Playlist/playlist';
import Buttons from './components/Button/Button';
import queryString from 'query-string';

// let fakeServerData = {
//   user: {
//     name: 'Eric Escamilla',
//     playlistName: 'HouseTunes',
//     songs: [{name: 'Lose Yourself', key: 1},{name: 'Song2', key: 2},{name: 'song3', key: 3}]
//   }
// }

class App extends Component {
  state = {
    serverData: {},
    filterString: ''
  }

  componentDidMount() {
    let parsed = queryString.parse(window.location.search);
    let accessToken = parsed.access_token;

    fetch('https://api.spotify.com/v1/me', { 
      headers: {'Authorization': 'Bearer' + accessToken}
    }).then((res) => res.json())
      .then(data => console.log(data))
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
      </div> : <Buttons/>
    );
  }
}

export default App;
