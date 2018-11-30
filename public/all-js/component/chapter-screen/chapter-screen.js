function chapterScreen() {
	let ot = document.getElementById('ot');
		ot.classList.add('chapters-frame');

	let chaptersWrapper = document.createElement('div');
		chaptersWrapper.id = 'chapter-wrapper';
		chaptersWrapper.classList.add('chapter-selector');

	let chapterText = [ 'برادر بزرگتر من', 'دوست ابدی من', 'حقایق اوتیسم', 'نگرانی مادر' ];

	// :)
	for( let i = 0; i <= 3; i++ ) {
		let chapter = document.createElement('div');
			chapter.id = 'chapter-' + (i+1);
			chapter.classList.add('chapter')
			chapter.classList.add('chapter-' + (i+1))
			chapter.setAttribute('data-chapter', (i+1));
			chapter.appendChild(document.createTextNode(chapterText[i]));
		chaptersWrapper.appendChild(chapter);
	}

	this.show = function(){
		ot.appendChild(chaptersWrapper);
	}
}