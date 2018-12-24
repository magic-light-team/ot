import { START_PAGE, CHAPTER_PAGE, GAME_PAGE, RESUME_PAGE, SCORE_PAGE, CHANGE_STAGE, PAUSE_GAME, CHANGE_PAGE  } from '../actions/types';

export const showStartPage = () => dispatch => {
    //...
    dispatch({
        type: START_PAGE,
        payload: []
    })
}

export const showChapterPage = () => dispatch => {
    //...
    dispatch({
        type: CHAPTER_PAGE,
        payload: []
    })
}

export const startGame = () => dispatch => {
    //...
    dispatch({
        type: GAME_PAGE,
        payload: []
    })
}

export const resumeGame = () => dispatch => {
    //...
    dispatch({
        type: RESUME_PAGE,
        payload: []
    })
}

export const scorePage = () => dispatch => {
    //...
    dispatch({
        type: SCORE_PAGE,
        payload: []
    })
}




//--------------------------------------------------

export const changePage = (event,newPage, levelId) => dispatch => {

    event.stopPropagation();
    console.log('actions',event,newPage,levelId);

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
        payload: { levelId, newPage }
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

export const pauseGame = (event,show = true) => dispatch => {
    //...
    // let page;
    // let isPaused;
    event.stopPropagation();
    // const currentState = { ...this.state };
    // currentState.isPaused = show;
    // this.setState(currentState);

    dispatch({
        type: show?PAUSE_GAME:RESUME_PAGE,
        payload: {isPaused:show}
    })
}