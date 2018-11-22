function scoreBoard() {
	let game = document.getElementById('frame');

	this.scoreBoard = document.createElement('div');
	this.scoreBoard.id = 'score-board';

	let menu = document.createElement('div');
		menu.id = 'menu';

	let menuIcon = document.createElement('img');
		menuIcon.src = 'assets/img/menu.png';
		menu.appendChild(menuIcon);

	this.scoreBoard.appendChild(menu);

	game.appendChild(this.scoreBoard);
}
