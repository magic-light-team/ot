function score() {
	let score = document.createElement('div');
		score.id = 'score';

	let scoreText = document.createElement('span');
		scoreText.id = 'score-text';
		scoreText.appendChild(document.createTextNode('امتیاز'));

	let scoreNum = document.createElement('span');
		scoreNum.id = 'score-num';

	score.appendChild(scoreText);
	score.appendChild(scoreNum);

	return score;
}
