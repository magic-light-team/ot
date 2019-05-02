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
        let pageSetting = (gameData as any)[newPage] as appPage ;
        //console.log('new page --- ',newPage ,gameData[newPage] , gameData[newPage].music)
        // if(gameData[newPage] && gameData[newPage].music){

        //   let newMusic = process.env.PUBLIC_URL+'/audio/'+gameData[newPage].music;
        //   if(newMusic !== state.music){

        //     let audio = state.audio;
        //     if(audio === null) {
        //       // console.log('new audio');
        //       audio = new Audio(newMusic);
        //       audio.play();
        //     }else{
        //       audio.pause();
        //       audio.src = newMusic;
        //       console.log('have audio',audio,audio.src);
        //       // audio.play();
        //     }
        //   }
        // }

        return {
          ...state,
          pageName: newPage,
          pageSetting,
          // restartMusic: true, // temp
          saveChoise: [...state.saveChoise, {
            action: ActionTypes.CHANGE_PAGE,
            page: newPage
          }],
          isPaused: false,
          //items: action.payload
        }
      }

      let thisLevel = gameData.levels.find(level => level.levelId === action.payload.levelId) || gameData.levels[0];

      let music = process.env.PUBLIC_URL + '/audio/' + thisLevel.backgroundMusic;
      let audio = state.audio;

      // if (audio === null) {
      //   // console.log('new audio');
      //   audio = new Audio(music);
      //   audio.play();
      // } else {
      //   audio.pause();

      //   audio.src = music;
      //   console.log('have audio', audio, audio.src, 'is paused', audio.paused, ' readyState:', audio.readyState);
      //   // audio.play();
      // }

      return {
        ...state,
        page: action.payload.newPage,
        currentLevel: thisLevel,
        backgroundPic: thisLevel.levelPic,
        // music: thisLevel.backgroundMusic,
        music,
        audio,
        // restartMusic: true,
        currentStage: thisLevel.stages.find(stage => stage.stageId === 1),
        saveChoise: [...state.saveChoise, {
          action: ActionTypes.CHANGE_PAGE,
          page: action.payload.newPage,
          levelId: action.payload.levelId
        }],
      }

    case ActionTypes.CHANGE_STAGE:
      //  console.log('change stage reducer');

      let stageId = action.payload.stageId;
      if (!stageId) {
        stageId = state.currentStage? state.currentStage.stageId:0 + 1;
      }

      let score = state.score;
      if (action.payload.score) {
        score += action.payload.score;
      }

      let currentStage = state.currentLevel? state.currentLevel.stages.find(stage => stage.stageId === stageId):null;
      if (!currentStage) {
        console.log('can not find');
        return {
          ...state,
          page: 'chapterPage', // or end stage score page
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

      if (currentStage.optionSection && currentStage.backgroundPic && currentStage.backgroundPic !== '') {
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
      // start audio at first
      // if (state.audio === null) {
      //   // console.log('play music at starting app')
      //   let music = process.env.PUBLIC_URL + '/audio/'; //+ gameData[state.page].music;
      //   let audio = new Audio(music);
      //   audio.loop = true;
      //   // console.log('new audio',audio);
      //   audio.play();

      //   audio.style.display = "none";
      //   document.body.appendChild(audio);

      //   return { ...state, music, audio };
      // }

      return state;
  }
}
