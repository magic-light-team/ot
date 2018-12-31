import { CHANGE_STAGE, CHANGE_PAGE, PAUSE_GAME, RESUME_PAGE } from '../actions/types';

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

    // const currentState = { ...this.state };
    // currentState.page = newPage;
    // if (levelId) {
    //   currentState.currentLevel = currentState.gameData.levels.find(level => level.levelId === levelId);
    //   currentState.backgroundPic = currentState.currentLevel.levelPic;
    //   currentState.currentStage = currentState.currentLevel.stages.find(stage => stage.stageId === 1);
    // }
    // this.setState(currentState);

    dispatch({
        type: CHANGE_PAGE, // newPage,
        payload: { levelId, newPage },
    })
}

export const changeStage = (stageId, score) => dispatch => {
    //...
    // let currentStage;
    // const currentState = { ...this.state };

    // if (!stageId) {
    //   stageId = currentState.currentStage.stageId + 1;
    // }

    // currentState.currentStage = currentState.currentLevel.stages.find(stage => stage.stageId === stageId);

    // if (score) {
    //   currentState.score += score;
    // }

    // if (currentState.currentStage) {
    //   this.setState(currentState);
    // } else {
    //   console.log('can not find stage');
    // }

    dispatch({
        type: CHANGE_STAGE,
        payload: { stageId, score }
    })
}

export const pauseGame = (event, show = true) => dispatch => {
    //...
    // let page;
    // let isPaused;
    event.stopPropagation();
    // const currentState = { ...this.state };
    // currentState.isPaused = show;
    // this.setState(currentState);

    dispatch({
        type: show ? PAUSE_GAME : RESUME_PAGE,
        payload: { isPaused: show }
    })
}