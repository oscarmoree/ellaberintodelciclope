function toggleSandwich(x) {
	var mp = document.getElementById("myTopnav");
	if (mp.className === "topnav") {
		mp.className += " responsive";
	} else {
		mp.className = "topnav";
	}
	x.classList.toggle("cambiarIcono");
}
