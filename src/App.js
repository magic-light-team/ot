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
<<<<<<< HEAD
    console.log('main state',this.state,'store state',this.props.state)
    //switch (this.state.page) {
    switch (this.props.state.page) {
=======

    switch (this.props.page) {
>>>>>>> ec9644ac4021ec9b2db2d6473e047bc50e587bb1

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
