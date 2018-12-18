import React, { Component } from 'react';
import './App.css';
//import './bootstrap.min.css'

import StartPage from './components/startPage';
import ChapterPage from './components/chapterPage';
import GamePage from './components/gamePage';

import gameData from './components/data'

const initGame = {
  score: 0,
  backgroundPic: '', //because it may change in level

  currentLevel: {},
  currentStage: {},

  gameData,
  page: "start-page",
  isPaused: false,
};

class App extends Component {

  state = { ...initGame };

  render() {
    return (
      <div className="App">
        {this.pageTag()}
      </div>
    );
  }

  pageTag = () => {
    switch (this.state.page) {

      case "start-page":
        return <StartPage
          startPageSetting={this.state.gameData.startPage}
          changePage={this.changePage} />;

      case "chapter-page":
        return <ChapterPage
          chapters={this.state.gameData.levels}
          chapterSetting={this.state.gameData.chapterPage}
          changePage={this.changePage} />;

      case "game-page":
        return <GamePage
          // Properties
          level={this.state.currentLevel}
          backgroundPic={this.state.backgroundPic}
          score={this.state.score}
          stage={this.state.currentStage}
          isPaused={this.state.isPaused}
          // Methods
          pauseGame={this.pauseGame}
          changePage={this.changePage}
          changeStage={this.changeStage} />;

      case "credits-page":
        return <StartPage />;
      case "about-page":
        return <StartPage />;

      default:
        break;
    }
  }

  changePage = (event,newPage, levelId) => {
    event.stopPropagation();
    console.log(event,newPage,levelId)
    const currentState = { ...this.state };
    currentState.page = newPage;
    if (levelId) {
      currentState.currentLevel = currentState.gameData.levels.find(level => level.levelId === levelId);
      currentState.backgroundPic = currentState.currentLevel.levelPic;
      currentState.currentStage = currentState.currentLevel.stages.find(stage => stage.stageId === 1);
    }
    this.setState(currentState);
  }

  changeStage = (stageId, score) => {
    const currentState = { ...this.state };

    if (!stageId) {
      stageId = currentState.currentStage.stageId + 1;
    }

    currentState.currentStage = currentState.currentLevel.stages.find(stage => stage.stageId === stageId);

    if (score) {
      currentState.score += score;
    }

    if (currentState.currentStage) {
      this.setState(currentState);
    } else {
      console.log('can not find stage');
    }
  }

  pauseGame = (event,show = true) => {
    event.stopPropagation();
    const currentState = { ...this.state };
    currentState.isPaused = show;
    this.setState(currentState);
  }
}

export default App;
