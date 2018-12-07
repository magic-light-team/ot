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
	var sounds = document.getElementsByTagName('audio');
	for(i=0; i<sounds.length; i++) {
		if (! sounds[i].paused) {
			sounds[i].pause();
		}
	};
	let music = new sound(newVal, true);
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

	loadStage(1);

	updateLevelName(game.currentLevel.levelName);
	updateLevelPic(game.currentLevel.levelPic);
	updateLevelMusic(game.currentLevel.backgroundMusic);
}

function loadStage( stage ) {
	stage = Number(stage);
	let currentStageScreen = document.getElementById('stage-screen');

	game.currentStage = game.currentLevel.stages.find(x => x.stageId === stage);

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
	let dialogue = stage.dialogueSection.dialogue;

	let dialogueBox = document.createElement('div');

	let currentStageScreen = document.getElementById('stage-screen');

	$('.dialogue-box').addClass('fadeout');
	$('.dialogue-box').addClass('hidden');
	$('.dialogue-box').remove();
	$('.btn-wrapper').remove();
	$('.description-wrapper').remove();

	dialogueBox.classList.add('fadein');
	dialogueBox.classList.add('dialogue-box');
	dialogueBox.classList.add('dialogue');
	if ( dialogue.nextStageId ) {
		dialogueBox.setAttribute('data-level', dialogue.nextStageId );
	}

	dialogueBox.appendChild(document.createTextNode(String(dialogue)));
	currentStageScreen.appendChild(dialogueBox);
}

function loadOptions( stage ) {
	let desc = stage.optionSection.desc;
	let options = stage.optionSection.options;

	$('.dialogue-box').addClass('fadeout');
	$('.dialogue-box').addClass('hidden');
	$('.dialogue-box').remove();

	$('.btn-wrapper').remove();
	$('.description-wrapper').remove();

	let optionWrapper = document.createElement('div');
	optionWrapper.classList.add('btn-wrapper');




	for( let i = 0; i < options.length; i++ ) {
		let newBtn = btn(options[i].title, options[i].color, options[i].nextDialogueId || '', options[i].score || 0);
		$(optionWrapper).append( newBtn );
	}

	let currentStageScreen = document.getElementById('stage-screen');
	let descWrapper = document.createElement('div');
	descWrapper.classList.add('description-wrapper');
	descWrapper.classList.add('dialogue');
	descWrapper.appendChild(document.createTextNode(String(desc)));
	currentStageScreen.appendChild(descWrapper);
	currentStageScreen.appendChild(optionWrapper);

}



/*------------------------------------------*/

$(document).ready(function(){
	let $document = $(document);

	// let introSound = new sound('bensound-tenderness-0.mp3');
		// introSound.play();

	/**
	 * Load sounds after document load.
	 */
	let tapSFX = new sound('tap.wav');
	$document.on('click', '.btn,.start-btn,.chapter', function(){
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
		document.getElementById('chapter-wrapper').classList.remove('hidden');
		document.getElementById('chapter-wrapper').classList.remove('fadeout');
		document.getElementById('chapter-wrapper').classList.add('fadein');
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

	$document.on('click', '#stage-screen', function(e) {
		if ( $('.btn-wrapper').length ) {
			if ( $(e.target).hasClass('btn') ) {
				let btn = $(e.target);
				updateScore(game.score + Number($(btn).data('score')))
				if ( $(btn).data('level') ) {
					loadStage($(btn).data('level'));
					console.log(Number($(btn).data('score')));
				} else {
					loadStage(game.currentStage.stageId + 1);
				}
			}
		} else {
			if ( $('.dialogue').data('level') ) {
				loadStage($('.dialogue').data('level'));
			} else {
				loadStage(game.currentStage.stageId + 1);
			}
		}
	});

});