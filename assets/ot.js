let game =  {
	score: 0,
	stage: '',
	currentLevel: 0
};

const initialGame =  {
	score: 0,
	stage: '',
	currentLevel: 0
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

/*------------------------------------------*/

function loadLevel( level ) {
	level = Number(level - 1);

	let frame = document.getElementById('frame');
	console.log(levels, level);
	game.currentLevel = levels[level];

	updateStage(game.currentLevel.levelName);
}


/*------------------------------------------*/

$(document).ready(function(){
	let $document = $(document);

	/**
	 * Load sounds after document load.
	 */
	// let tapSFX = new sound('tap.wav');
	// tapSFX.play();

	new scoreBoard;

	// updateScore( game.score + 10 );
	// updateStage('مرحله ی اول');

	let gameInitScreen = new startScreen;
	gameInitScreen.showStartMenu();

	let lvlSelectScreen = new chapterScreen;

	$document.on('click', '#start-new-btn', function(){
		reset();
		updateStage('انتخاب مرحله');
		lvlSelectScreen.show();
		gameInitScreen.resume();
	});

	$document.on('click', '#resume-btn', function(){
		gameInitScreen.resume();
	});

	$document.on('click', '#menu', function(){
		gameInitScreen.pause();
	})

	$document.on('click', '.chapter', function(e){
		let targetLevel = e.target.getAttribute('data-chapter');
		loadLevel(targetLevel);
	});

});