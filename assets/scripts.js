addEventListener("load", function() {
	addNavMenuListener();
});

function addNavMenuListener() {
	nav_menu = document.getElementsByClassName("nav-menu")[0];
	nav_menu.addEventListener("click", menuClicked);
}

function menuClicked() {
	e.preventDefault();
	var block_bott = document.getElementsByClassName("block-bott")[0];
	var menu_shown = nav_menu.style.display;
	if (menu_shown == "") {
		menu_shown = window.
	}
}