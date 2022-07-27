
window.onscroll = function(){
	var a = document.getElementById("nav-container-fade");
	var top = window.scrollY;
	console.log(top);
	if (top >= 50){
		a.style.background = "white";
	}else{
		a.style.background = "transparent";
	}
}
