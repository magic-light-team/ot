import React, { Component } from 'react';
import './App.css';

//import { levels } from './component/levels';
import StartPage from './components/startPage';

const initGame = {
  score: 0,
  stage: '',
  currentLevel: 0,
  currentStage: 1,

  //levels: levels,
  page: "start-page",
  isPaused: false
};

class App extends Component {

  state = { ...initGame};

  render() {
    return (
      <div className="App">
        { this.pageTag() }
      </div>
    );
  }

  pageTag = () => {
    switch (this.state.page) {
      case "start-page":
        return <StartPage />
    
      default:
        break;
    }
  }
}

export default App;
