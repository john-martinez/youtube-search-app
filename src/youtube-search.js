import React, { Component } from 'react';
import './youtube-search.css';
import VideoList from './components/video-list'
import SearchBar from './components/search-bar.js'
import YTSearch from 'youtube-api-search'
import VideoDetail from './components/video-detail'

const API_KEY = `AIzaSyDGZR49dQUWFBWNuSoNipYDZelDSblIYh4`;



class YoutubeSearchApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      videos: [], 
      selectedVideo: null,
      term: "hotdog"
    };
    
    this.videoSearch(this.state.term);
  } 
  
   videoSearch(term){
         YTSearch({key: API_KEY, term: term}, videos=>{
         this.setState({
         videos: videos,
         selectedVideo: videos[0]
        })
      })
     }
 
  
  render() {
    return (
      <div className="container">
          <SearchBar videoSearch={term=>this.videoSearch(term)} />
          <div className="mid-container">
            <VideoDetail video={this.state.selectedVideo} />
                
            <VideoList 
              onClickVideo={ video=> this.setState({selectedVideo: video}) } 
              videos={this.state.videos} />
          </div>
      </div>
    );
  }
}

//comment

export default YoutubeSearchApp;
