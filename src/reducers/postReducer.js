import { START_PAGE,CHAPTER_PAGE,GAME_PAGE,RESUME_PAGE,SCORE_PAGE } from '../actions/types';

const initialState = {
    // items: [],
    // item:{},
    score: 0,
    backgroundPic: '',
    currentLevel: {},
    currentStage: {},

    gameData: {},
    page: "start-page",
    isPaused: false,
}

export default function(state = initialState,action) {
    switch(action.type) {
        case START_PAGE:
            return {
                ...state,
                items: action.payload
            }
        case CHAPTER_PAGE:
            return {
                ...state,
                items: action.payload
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
