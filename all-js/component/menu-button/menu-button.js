function menuButton( text, options ) {
	let btn = document.createElement('button');
		btn.setAttribute( 'class', 'start-btn btn' );

	if ( options ) {
		if ( options.id ) {
			btn.id = options.id;
		}

		if( options.class ) {
			btn.classList.add( options.class );
		}
	}

	btn.appendChild(document.createTextNode( text ));

	return btn;
}