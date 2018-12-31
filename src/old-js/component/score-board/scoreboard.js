function scoreBoard() {
	let game = document.getElementById('stage-screen');

	this.scoreBoardScreen = document.createElement('div');
	this.scoreBoardScreen.id = 'score-board';

	this.scoreBoardScreen.appendChild(new menu);
	this.scoreBoardScreen.appendChild(new stage);
	this.scoreBoardScreen.appendChild(new score);

	game.appendChild(this.scoreBoardScreen);
}
