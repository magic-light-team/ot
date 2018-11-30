function stage() {
	let stage = document.createElement('div');
		stage.id = 'stage';

	let stageText = document.createElement('span');
		stageText.id = 'stage-text';

	stage.appendChild(stageText);

	return stage;
}