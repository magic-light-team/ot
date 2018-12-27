import { START_PAGE, CHAPTER_PAGE, GAME_PAGE, RESUME_PAGE, SCORE_PAGE, CHANGE_PAGE, CHANGE_STAGE, PAUSE_GAME } from '../actions/types';
import gameData from './data';

const initialState = {
    // items: [],
    // item:{},
    score: 0,
    backgroundPic: '',
    music:'',

    currentLevel: {},
    currentStage: {},

    gameData: gameData,
    achievment: {},
    saveChoise:{},

    page: "start-page",
    isPaused: false,
}

export default function MainReducer(state = initialState,action) {
    let page;
    switch(action.type) {
        case START_PAGE:
            page = gameData.startPage;
            return {
                ...state,
                score:0,
                backgroundPic: page.backgroundPic,
                music: page.music,
                //...page
            }
            // return Object.assign({}, state, {
            //     articles: state.articles.concat(action.payload)
            //   });
        case CHAPTER_PAGE:
            page= gameData.chapterPage;
            return {
                ...state,
                backgroundPic: page.backgroundPic,
                //...page
            }
        case GAME_PAGE:
            return {
                ...state,
                items: action.payload
            }
        case RESUME_PAGE:
        return {
            ...state,
            isPaused:false,
            //items: action.payload
        }
        case SCORE_PAGE:
            return {
                ...state,
                items: action.payload
            }



        case CHANGE_PAGE:
            console.log('change page reducer',action.payload);
            
            if(!action.payload.levelId){
                return {
                    ...state,
                    page: action.payload.newPage,
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
            }

        case CHANGE_STAGE:
            console.log('change page reducer');
            let stageId = action.payload.stageId;
            if(!stageId){
                stageId = state.currentState.currentStage.stageId + 1;
            }

            let score = state.score;
            if(action.payload.score){
                score += action.payload.score;
            }
            
            let currentStage = state.currentLevel.stages.find(stage => stage.stageId === stageId);
            return {
                ...state,
                currentStage,
                score
            }
            
        case PAUSE_GAME:
            console.log('change page reducer');
            return {
                ...state,
                isPaused:true,
                //items: action.payload
            }


        default:
            return state;
    }
}
