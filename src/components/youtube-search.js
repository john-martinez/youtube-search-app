import React, { Component } from 'react';
import '../YoutubeSearchApp.css';
import SearchBar from './search-bar.js'

const API_KEY = `AIzaSyDGZR49dQUWFBWNuSoNipYDZelDSblIYh4`;


class YoutubeSearchApp extends Component {
  render() {
    return (
      <div>
          <SearchBar/>
      </div>
    );
  }
}

export default YoutubeSearchApp;
