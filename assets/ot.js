let game =  {
	score: 0,
	stage: ''
};

const initialGame =  {
	score: 0,
	stage: ''
};

function updateScore( newVal ) {
	let score = document.getElementById('score-num');
	game.score = Number(newVal);
	score.innerHTML = game.score;
}

function updateStage( newVal ) {
	let stage = document.getElementById('stage');
		stage.innerHTML = newVal;
}

function reset() {
	game = initialGame;
	updateScore(game.score);
	updateStage(game.stage);
}



$(document).ready(function(){

	/**
	 * Load sounds after document load.
	 */
	// let tapSFX = new sound('tap.wav');
	// tapSFX.play();

	new scoreBoard;

	updateScore( game.score + 10 );
	updateStage('مرحله ی اول');

	let gameInitScreen = new startScreen;
	gameInitScreen.showStartMenu();

	document.on('click', '#start-new-btn', function(){
		console.log('click');
		gameInitScreen.resume();
	});

});