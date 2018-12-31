function menu() {
	let menu = document.createElement('div');
	menu.id = 'menu';

	let menuIcon = document.createElement('img');
	menuIcon.src = 'assets/img/menu.png';
	menu.appendChild(menuIcon);

	return menu;
}