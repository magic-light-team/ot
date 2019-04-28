import { CHANGE_STAGE, CHANGE_PAGE, PAUSE_GAME, RESUME_PAGE } from '../actions/actionTypes';

// export const scorePage = () => dispatch => {
//     //...
//     dispatch({
//         type: SCORE_PAGE,
//         payload: []
//     })
// }

export const changePage = (event, newPage, levelId) => dispatch => {

    event.stopPropagation();
    console.log('changePage actions', event, newPage, levelId);

    dispatch({
        type: CHANGE_PAGE, // newPage,
        payload: { levelId, newPage },
    })
}

export const changeStage = (stageId, score, backgroundPic) => dispatch => {

    dispatch({
        type: CHANGE_STAGE,
        payload: { stageId, score,backgroundPic }
    })
}

export const pauseGame = (event, show = true) => dispatch => {
    //...
    
    event.stopPropagation();
    dispatch({
        type: show ? PAUSE_GAME : RESUME_PAGE,
        payload: { isPaused: show }
    })
}