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
		frame.classList.remove('fadein').add('fadeout');
		startScreen.classList.remove('fadeout').add('fadein');
		this.isPaused = true;
	};

	this.resume = function() {
		frame.classList.remove('fadeout');
		frame.classList.remove('hidden');
		frame.classList.add('fadein');
		startScreen.classList.remove('fadein');
		startScreen.classList.add('fadeout');
		this.isPaused = false;
	};

}