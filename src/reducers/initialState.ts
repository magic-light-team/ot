import gameData from '../info/data';
import { level, stage } from '../info/interfaces';

// initialState
const init: InitialState = {

  score: 0,
  backgroundPic: '',

  music: '',// gameData.startPage.music,//'',
  // restartMusic:true,
  audio: undefined, // use component instead of that

  currentLevel: undefined,
  currentStage: undefined,

  gameData: gameData, // can delete and import and use only on reducer
  achievment: {},
  saveChoise: [],

  page: "startPage",
  isPaused: false,
  // muteMusic: false,

}

export default init;

interface InitialState {
  score: number,
  backgroundPic: string,

  music: string,
  audio?: HTMLAudioElement,

  currentLevel?: level,
  currentStage?: stage,

  gameData: any,
  achievment: any,
  saveChoise: any,

  page: string,
  isPaused: boolean,
}