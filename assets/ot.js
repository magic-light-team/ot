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

function updateLevelName( newVal ) {
	let stage = document.getElementById('stage');
		stage.innerHTML = newVal;
}

function updateLevelPic( newVal ) {
	let stage = document.getElementById('stage');
		stage.styles.backgroundImage = "url(" + newVal + ")";
}


function reset() {
	game = initialGame;
	updateScore(game.score);
	updateLevelName(game.stage);
}

/*------------------------------------------*/

function loadLevel( level ) {
	level = Number(level - 1);

	let chapterScreen = document.getElementById('chapter-wrapper');
	chapterScreen.classList.add('fadeout');
	chapterScreen.classList.add('hidden');

	game.currentLevel = levels[level];

	updateLevelName(game.currentLevel.levelName);
}


/*------------------------------------------*/

$(document).ready(function(){
	let $document = $(document);

	/**
	 * Load sounds after document load.
	 */
	let tapSFX = new sound('tap.wav');

	$document.on('click', 'btn,start-btn,chapter', function(){
		tapSFX.play();
	});

	new scoreBoard;

	let gameInitScreen = new startScreen;
	gameInitScreen.showStartMenu();

	let lvlSelectScreen = new chapterScreen;

	$document.on('click', '#start-new-btn', function(){
		reset();
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