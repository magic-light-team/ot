import {
  CHANGE_PAGE,
  CHANGE_STAGE,
  PAUSE_GAME,
  RESUME_PAGE
} from '../actions/types';
import gameData from './data';

const initialState = {
  // items: [],
  // item:{},
  score: 0,
  backgroundPic: '',
  music: '',

  currentLevel: {},
  currentStage: {},

  gameData: gameData,
  achievment: {},
  saveChoise: {},

  page: "start-page",
  isPaused: false,
}

export default function MainReducer(state = initialState, action) {
  switch (action.type) {

    case CHANGE_PAGE:
      console.log('change page reducer');//, action.payload);

      if (!action.payload.levelId) {
        return {
          ...state,
          page: action.payload.newPage,
          saveChoise:{...state.saveChoise,choise:{action:CHANGE_PAGE,page: action.payload.newPage}},
          //items: action.payload
        }
      }

      let thisLevel = gameData.levels.find(level => level.levelId === action.payload.levelId);
      return {
        ...state,
        page: action.payload.newPage,
        currentLevel: thisLevel,
        backgroundPic: thisLevel.levelPic,
        currentStage: thisLevel.stages.find(stage => stage.stageId === 1),
        saveChoise:{...state.saveChoise,choise:{action:CHANGE_PAGE, page: action.payload.newPage,levelId:action.payload.levelId}},
      }

    case CHANGE_STAGE:
       console.log('change stage reducer');

      let stageId = action.payload.stageId;
      if (!stageId) {
        stageId = state.currentStage.stageId + 1;
      }

      let score = state.score;
      if (action.payload.score) {
        score += action.payload.score;
      }

      let currentStage = state.currentLevel.stages.find(stage => stage.stageId === stageId);
      if (!currentStage) {
        return {
          ...state,
          page: 'chapter-page', // or end stage score page
          saveChoise:{...state.saveChoise,choise:{action:CHANGE_STAGE,stage:'cannot find stage. maybe end of stage'}},
        }
      }

      return {
        ...state,
        currentStage,
        score,
        saveChoise:{...state.saveChoise,choise:{action:CHANGE_STAGE,stageId:stageId}},
      }

    case PAUSE_GAME:
      console.log('pause game reducer');
      return {
        ...state,
        isPaused: true,
        //items: action.payload
      }

    case RESUME_PAGE:
      console.log('resume game reducer');
      return {
        ...state,
        isPaused: false,
        //items: action.payload
      }

    default:
      return state;
  }
}
