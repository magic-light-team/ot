import initialState from './initialState';

import {
  ActionTypes
} from '../actions/actionTypes';
import gameData from '../info/data';
import { appPage } from '../info/data.interfaces';


export default function MainReducer(state = initialState, action: { type: any; payload: any }) {

  switch (action.type) {

    case ActionTypes.CHANGE_PAGE:
      // console.log('change page reducer');//, action.payload);

      if (!action.payload.levelId) {

        let newPage = action.payload.newPage;
        let pageSetting = (gameData as any)[newPage] as appPage;
        let pageTitle = pageSetting.pageTitle;

        return {
          ...state,

          backgroundPic: pageSetting.backgroundPic,
          music: pageSetting.music,
          
          headerTitle: pageTitle,
          // currentLevelId:
          //currentStage

          saveChoise: [...state.saveChoise, {
            action: ActionTypes.CHANGE_PAGE,
            page: newPage
          }],

          pageName: newPage,
          pageSetting,

          isPaused: false,
          //chaptersInfo:
        }
      }

      let thisLevel = gameData.levels.find(level => level.levelId === action.payload.levelId) || gameData.levels[0];
      let music = thisLevel.backgroundMusic;

      return {
        ...state,

        backgroundPic: thisLevel.levelPic,
        music,
        
        headerTitle: thisLevel.levelName,
        currentLevelId: thisLevel.levelId,
        currentStage: thisLevel.stages.find(stage => stage.stageId === 1),

        saveChoise: [...state.saveChoise, {
          action: ActionTypes.CHANGE_PAGE,
          page: action.payload.newPage,
          levelId: action.payload.levelId
        }],

        pageName: action.payload.newPage,
        // pageSetting,

        isPaused: false,
        //chaptersInfo:
      }

    case ActionTypes.CHANGE_STAGE:
      //console.log('change stage reducer');

      let stageId = action.payload.stageId;
      if (!stageId) {
        stageId = (state.currentStage ? state.currentStage.stageId : 0 )+ 1;
      }

      let score = state.score;
      if (action.payload.score) {
        score += action.payload.score;
      }

      //let currentStage = state.currentLevel? state.currentLevel.stages.find(stage => stage.stageId === stageId):null;
      //let currentStage = state.currentLevelId? state.currentLevel.stages.find(stage => stage.stageId === stageId):null;
      let currentlevel = gameData.levels.find(level => level.levelId === state.currentLevelId);
      let currentStage = currentlevel && currentlevel.stages.find(stage => stage.stageId === stageId);

      if (!currentStage) {
        console.log('can not find stage'); // TODO: Score Page
        return {
          ...state,

          pageName: 'chapterPage', // or end stage score page
          saveChoise: [...state.saveChoise, {
            action: ActionTypes.CHANGE_STAGE,
            stage: 'cannot find stage. maybe end of stage'
          }],
        }
      }

      let backgroundPic = state.backgroundPic;
      if (action.payload.backgroundPic && action.payload.backgroundPic !== '') {
        backgroundPic = action.payload.backgroundPic;
      }

      if (currentStage.optionsSection && currentStage.backgroundPic && currentStage.backgroundPic !== '') {
        console.log("change");
        backgroundPic = currentStage.backgroundPic;
      }

      return {
        ...state,
        currentStage,
        score,
        backgroundPic,
        saveChoise: [...state.saveChoise, {
          action: ActionTypes.CHANGE_STAGE,
          stageId: stageId
        }],
      }

    case ActionTypes.PAUSE_GAME:
      console.log('pause game reducer');
      return {
        ...state,
        isPaused: true,
        //items: action.payload
      }

    case ActionTypes.RESUME_PAGE:
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
