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
      </div>
    );
  }

  pageTag = () => {
    //console.log('main state',this.state,'store state',this.props.state)
    //switch (this.props.state.page) {
    //console.log(this.props.page);
    
    switch (this.props.page) {
      case "start-page":
        return <StartPage />;

      case "chapter-page":
        return <ChapterPage />;

      case "game-page":
        return <GamePage />;

      case "source-page":
        return <SourcePage />;
      case "about-page":
        return <AboutPage />;

      default:
        break;
    }
  }
}

const mapStateToProps = state => ({ page: state.state.page });

export default connect(mapStateToProps)(App);
