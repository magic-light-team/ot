function startScreen() {
	this.isPaused = false;
	let startScreen = document.createElement('div');
		startScreen.id = 'start-screen';

	let innerScreen = document.createElement('div');
		innerScreen.id = 'inner-screen';

	let ot = document.getElementById('ot');
	let frame = document.getElementById('frame');

	innerScreen.appendChild( new menuButton( 'شروع', { id: 'start-new-btn', class: 'start-new-btn' } ) );
	innerScreen.appendChild( new menuButton( 'منابع', { id: 'credits-btn', class: 'credits-btn' } ) );
	innerScreen.appendChild( new menuButton( 'درباره', { id: 'about-btn', class: 'about-btn' } ) );

	startScreen.appendChild( innerScreen );

	this.showStartMenu = function() {
		ot.appendChild(startScreen);
	};

	this.pause = function() {
		if ( ! $('#resume-btn').length ) {
			innerScreen.prepend( new menuButton( 'ادامه', { id: 'resume-btn', class: 'resume-btn' } ) );
		}

		startScreen.classList.add('fadein');
		startScreen.classList.remove('hidden');
		startScreen.classList.remove('fadeout');

		let stageScreen = document.getElementById('stage-screen');
		stageScreen.classList.remove('fadein');
		stageScreen.classList.add('hidden');
		stageScreen.classList.add('fadeout');

		frame.classList.remove('fadein');
		frame.classList.add('fadeout');
		frame.classList.add('hidden');

		this.isPaused = true;
	};

	this.resume = function() {
		frame.classList.remove('fadeout');
		frame.classList.remove('hidden');
		frame.classList.add('fadein');

		let stageScreen = document.getElementById('stage-screen');
		stageScreen.classList.add('fadein');
		stageScreen.classList.remove('hidden');
		stageScreen.classList.remove('fadeout');

		startScreen.classList.remove('fadein');
		startScreen.classList.add('fadeout');
		startScreen.classList.add('hidden');

		this.isPaused = false;
	};

}