import { START_PAGE, CHAPTER_PAGE, GAME_PAGE, RESUME_PAGE, SCORE_PAGE } from '../actions/types';
import gameData from './data';

const initialState = {
    // items: [],
    // item:{},
    score: 0,
    backgroundPic: '',
    music:'',

    currentLevel: {},
    currentStage: {},

    gameData: {},
    achievment: {},

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
                items: action.payload
            }
        case SCORE_PAGE:
            return {
                ...state,
                items: action.payload
            }
        default:
            return state;
    }
}
