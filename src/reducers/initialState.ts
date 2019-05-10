import gameData from '../info/data';
import { stage, appPage } from '../info/data.interfaces';

export class chapters {
  levelId: number;
  levelName: string;
  levelPic: string;

  constructor(levelId: number, levelName: string, levelPic: string) {
    this.levelId = levelId;
    this.levelName = levelName;
    this.levelPic = levelPic;
  }
}

export interface IState {
  score: number,
  backgroundPic: string,

  music: string,
  // audio?: HTMLAudioElement,

  headerTitle: string,
  currentLevelId: number,// number
  currentStage?: stage,// number

  // gameData: any,
  achievment: any,
  saveChoise: any[],
  // thisLevelChoises:any[]

  pageName: string,
  pageSetting: appPage,

  isPaused: boolean,

  chaptersInfo: chapters[],
}

// initialState
const init: IState = {

  score: 0,
  backgroundPic: gameData.startPage.backgroundPic,// ''

  music: gameData.startPage.music,//'',
  // restartMusic:true,
  // audio: undefined, // use component instead of that

  headerTitle:"",
  currentLevelId: 0,
  currentStage: undefined,

  // gameData: gameData, // can delete and import and use only on reducer
  achievment: {},
  saveChoise: [],

  pageName: "startPage",
  pageSetting: gameData.startPage,
  isPaused: false,
  // muteMusic: false,

  chaptersInfo: gameData.levels.map(level => new chapters(level.levelId, level.levelName, level.levelPic))
}

export default init;


