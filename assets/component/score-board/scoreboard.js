function scoreBoard() {
	let game = document.getElementById('frame');

	this.scoreBoard = document.createElement('div');
	this.scoreBoard.id = 'score-board';

	this.scoreBoard.appendChild(new menu);
	this.scoreBoard.appendChild(new stage);
	this.scoreBoard.appendChild(new score);

	game.appendChild(this.scoreBoard);
}
