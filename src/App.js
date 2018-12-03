import React, { Component } from 'react';
import './App.css';
import './bootstrap.min.css'

//import { levels } from './component/levels';
import StartPage from './components/startPage';
import ChapterPage from './components/chapterPage';
import GamePage from './components/gamePage';

import { levels } from './components/levels'

const initGame = {
  score: 0,
  stage: '',
  //currentLevel: 0,
  //currentStageId: 1,
  currentLevel: {},
  currentStage: {},

  levels: levels,
  page: "start-page",
  isPaused: false,

};

class App extends Component {

  state = { ...initGame };

  render() {
    return (
      <div className="App col-xl-4 col-sm-8 col-xs-12 m-auto">
        {this.pageTag()}
      </div>
    );
  }

  pageTag = () => {
    switch (this.state.page) {
      case "start-page":
        return <StartPage changePage={this.changePage} />;
      case "chapter-page":
        return <ChapterPage chapters={this.state.levels} changePage={this.changePage} />;

      case "game-page":
        return <GamePage stage={this.state.currentStage} changePage={this.changePage} />;

      case "source-page":
        return <StartPage />;
      case "about-page":
        return <StartPage />;

      default:
        break;
    }
  }

  changePage = (newPage, levelId) => {
    const currentState = { ...this.state };
    currentState.page = newPage;
    if (levelId) {
      currentState.currentLevel = levels.find(level => level.levelId === levelId);
      currentState.currentStage = currentState.currentLevel.stages.find(stage => stage.stageId === 1);
    }
    this.setState(currentState);
  }

  changeStage(stageId) {
    const currentState = { ...this.state };
    currentState.currentStage = currentState.currentLevel.stages.find(stage => stage.stageId === stageId);
    if(currentState.currentStage){
      this.setState(currentState);
    }else{
      // can not find stage => result page
    }
  }
}

export default App;
