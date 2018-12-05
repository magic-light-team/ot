import React, { Component } from 'react';
import './App.css';
//import './bootstrap.min.css'

//import { levels } from './component/levels';
import StartPage from './components/startPage';
import ChapterPage from './components/chapterPage';
import GamePage from './components/gamePage';

import { levels } from './components/levels'

const initGame = {
  score: 0,
  backgroundPic:'', //because it may change in level
  
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
      <div className="App">
        {this.pageTag()}
      </div>
    );
  }

  pageTag = () => {
    switch (this.state.page) {

      case "start-page":
        return <StartPage 
          changePage={this.changePage} />;

      case "chapter-page":
        return <ChapterPage 
          chapters={this.state.levels} 
          changePage={this.changePage} />;

      case "game-page":
        return <GamePage 
          level={this.state.currentLevel} 
          backgroundPic={this.state.backgroundPic}
          score={this.state.score} 
          stage={this.state.currentStage} 
          changeStage={this.changeStage} />;

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
      currentState.backgroundPic = currentState.currentLevel.levelPic;
      currentState.currentStage = currentState.currentLevel.stages.find(stage => stage.stageId === 1);
    }
    this.setState(currentState);
  }

  changeStage = (stageId, score) => {
    const currentState = { ...this.state };

    if(!stageId)
    {
      stageId = currentState.currentStage.stageId +1;
    }

    currentState.currentStage = currentState.currentLevel.stages.find(stage => stage.stageId === stageId);

    if(score)
    {
      currentState.score += score;
    }

    if(currentState.currentStage){
      this.setState(currentState);
    }else{
      console.log('can not find stage');
    }
  }
}

export default App;
