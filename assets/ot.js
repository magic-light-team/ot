// currentStage = stages.find(x => x.stageId === stageId);
// if (!currentStage) {
// 	console.log('can not find stage')
// 	return;
// }

let game =  {
	score: 0,
	stage: '',
	currentLevel: 0,
	currentStage: 1
};

const initialGame =  {
	score: 0,
	stage: '',
	currentLevel: 0,
	currentStage: 1
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
	let stage = document.getElementById('stage-screen');
		stage.style.backgroundImage = "url(assets/img/" + newVal + ")";
}

function updateLevelMusic( newVal ) {
	let music = new sound('assets/audio/' + newVal, true);
	music.play();
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
	let currentStageScreen = document.getElementById('stage-screen');
	chapterScreen.classList.add('fadeout');
	chapterScreen.classList.add('hidden');
	currentStageScreen.classList.remove('hidden');
	currentStageScreen.classList.remove('fadeout');
	currentStageScreen.classList.add('fadein');
	game.currentLevel = levels[level];

	console.log(game.currentLevel);

	loadStage(1);

	updateLevelName(game.currentLevel.levelName);
	updateLevelPic(game.currentLevel.levelPic);
	// updateLevelMusic(game.currentLevel.backgroundMusic);
}

function loadStage( stage ) {
	stage = Number(stage);
	let currentStageScreen = document.getElementById('stage-screen');

	game.currentStage = game.currentLevel.stages.find(x => x.stageId === stage);

	console.log(game.currentStage);

	if ( game.currentStage === undefined ) {
		console.log( 'no next stage.' );
		document.getElementById('chapter-wrapper').classList.add('fadein');
		document.getElementById('chapter-wrapper').classList.remove('hidden');
		currentStageScreen.classList.add('fadeout');
		currentStageScreen.classList.add('hidden');
		return;
	}

	if ( game.currentStage.stageType === 0 ) {
		loadDialogue( game.currentStage );
	} else {
		loadOptions( game.currentStage );
	}

}


function loadDialogue( stage ){

}

function loadOptions( stage ) {

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

	let gameInitScreen = new startScreen;
	gameInitScreen.showStartMenu();

	let lvlSelectScreen = new chapterScreen;

	new stageScreen;
	new scoreBoard;
	$document.on('click', '#start-new-btn', function(){
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

	$document.on('click', '#stage-screen', function() {
		loadStage(game.currentStage.stageId + 1);
	});

});