function sound(src, loop = false) {
    this.sound = document.createElement('audio');
    this.sound.src =  './assets/audio/'+ src;
    this.sound.setAttribute('preload', 'auto');
	this.sound.setAttribute('controls', 'none');
	if ( loop ) {
		this.sound.setAttribute('loop', 'true');
	}
	this.sound.style.display = 'none';

	document.body.appendChild(this.sound);

    this.play = function(){
        this.sound.play();
	}

    this.stop = function(){
        this.sound.pause();
    }
}