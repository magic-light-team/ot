import { ActionTypes } from '../actions/actionTypes';
import { Dispatch } from 'redux';

// export const scorePage = () => dispatch => {
//     //...
//     dispatch({
//         type: SCORE_PAGE,
//         payload: []
//     })
// }

export const changePage = (event: React.MouseEvent<HTMLButtonElement>, newPage:string, levelId:number) => (dispatch:Dispatch) => {

    event.stopPropagation();
    // console.log('changePage actions', event, newPage, levelId);
    dispatch({
        type: ActionTypes.CHANGE_PAGE, // newPage,
        payload: { levelId, newPage },
    })
}

export const changeStage = (event: React.MouseEvent<HTMLButtonElement>,stageId:string, score:number, backgroundPic:string) => (dispatch:Dispatch) => {
    
    event.stopPropagation();
    // console.log('changeStage actions', event, stageId, score,backgroundPic);
    dispatch({
        type: ActionTypes.CHANGE_STAGE,
        payload: { stageId, score,backgroundPic }
    })
}

export const pauseGame = (event:React.MouseEvent<HTMLButtonElement>, show:boolean = true) => (dispatch:Dispatch) => {
    //...
    
    event.stopPropagation();
    dispatch({
        type: show ? ActionTypes.PAUSE_GAME : ActionTypes.RESUME_PAGE,
        payload: { isPaused: show }
    })
}