addEventListener("load", function() {
	document.getElementsByClassName("fa-bars")[0].addEventListener("click", toggleMenu);
});

function toggleMenu(e) {
	e.preventDefault;
	var block = document.getElementsByClassName("block-bott")[0];
	if (block.style.display == "flex") {
		block.style.display = "none"
	} else {
		block.style.display = "flex"
	}
}

