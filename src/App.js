import React, { Component } from 'react';
import './App.css';
//import './bootstrap.min.css'

import StartPage from './components/startPage';
import ChapterPage from './components/chapterPage';
import GamePage from './components/gamePage';

import AboutPage from './components/aboutPage';
import SourcePage from './components/sourcePage';

import { connect } from 'react-redux';

class App extends Component {
  state = {};

  render() {
    return (
      <div className="App">
        {this.pageTag()}
        <audio src={process.env.PUBLIC_URL+'/audio/'+this.props.music} preload="auto" controls="none" autoPlay></audio>
      </div>
    );
  }

  pageTag = () => {
    //console.log('main state',this.state,'store state',this.props.state)
    //switch (this.props.state.page) {
    //console.log(this.props.page);
    
    
    // if(this.props.restartMusic){
    //   //let audioTag = document.getElementsByTagName("audio")[0].play();
    //   //audioTag.src = process.env.PUBLIC_URL+'/audio/' + this.props.music;
    //   //audioTag.setAttribute('preload', 'auto');
    //   //audioTag.setAttribute('controls', 'none');
    //   //audioTag.setAttribute('loop', 'true');
    //   audioTag.volume = 0.5;
    //   audioTag.play()
    // }

    switch (this.props.page) {
      case "startPage":
        return <StartPage />;

      case "chapterPage":
        return <ChapterPage />;

      case "gamePage":
        return <GamePage />;

      case "sourcePage":
        return <SourcePage />;
      case "aboutPage":
        return <AboutPage />;

      default:
        break;
    }
  }
}

const mapStateToProps = state => ({ 
  page: state.state.page,
  music: state.state.music,
  restartMusic: state.state.restartMusic,
 });

export default connect(mapStateToProps)(App);
