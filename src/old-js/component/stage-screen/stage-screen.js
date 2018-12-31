function stageScreen() {
	let stageScreen = document.createElement('div');
		stageScreen.id = 'stage-screen';
		stageScreen.classList.add('level-screen');
		stageScreen.classList.add('hidden');
	let ot = document.getElementById('ot');
		ot.appendChild(stageScreen);
}
