import React, { Component } from 'react';
import './App.css';
//import './bootstrap.min.css'

import StartPage from './components/startPage';
import ChapterPage from './components/chapterPage';
import GamePage from './components/gamePage';

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

    switch (this.state.page) {
      case "start-page":
        return <StartPage />;

      case "chapter-page":
        return <ChapterPage />;

      case "game-page":
        return <GamePage />;

      case "credits-page":
        return <StartPage />;
      case "about-page":
        return <StartPage />;

      default:
        break;
    }
  }
}

const mapStateToProps = state => ({ page: state.state.page });

export default connect(mapStateToProps)(App);
