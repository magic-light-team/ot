import { CHANGE_STAGE, CHANGE_PAGE, PAUSE_GAME, RESUME_PAGE } from '../actions/actionTypes';
import { Dispatch } from 'redux';

// export const scorePage = () => dispatch => {
//     //...
//     dispatch({
//         type: SCORE_PAGE,
//         payload: []
//     })
// }

export const changePage = (event:Event, newPage:string, levelId:number) => (dispatch:Dispatch) => {

    event.stopPropagation();
    console.log('changePage actions', event, newPage, levelId);

    dispatch({
        type: CHANGE_PAGE, // newPage,
        payload: { levelId, newPage },
    })
}

export const changeStage = (stageId:string, score:number, backgroundPic:string) => (dispatch:Dispatch) => {

    dispatch({
        type: CHANGE_STAGE,
        payload: { stageId, score,backgroundPic }
    })
}

export const pauseGame = (event:Event, show:boolean = true) => (dispatch:Dispatch) => {
    //...
    
    event.stopPropagation();
    dispatch({
        type: show ? PAUSE_GAME : RESUME_PAGE,
        payload: { isPaused: show }
    })
}