

window.onload = function(){
	document.getElementById("header-text").style.opacity = 1;
	document.getElementById("breaker-text").style.opacity = 1;
	document.getElementById("sub-text").style.opacity = 1;
	setTimeout(function() {
		document.getElementById("header-text").style.opacity = 0;
		document.getElementById("breaker-text").style.opacity = 0;
		document.getElementById("sub-text").style.opacity = 0;
		document.getElementById("home-nav-link-1").style.color = "white";
		document.getElementById("home-nav-link-2").style.color = "white";
		document.getElementById("home-nav-link-3").style.color = "white";
		document.getElementById("home-nav-link-4").style.color = "white";
		document.getElementById("home-nav-link-5").style.color = "white";
		document.getElementById("icon-image").src = "images/minaret-tab-icon-white.png";
		document.getElementById("new-header-text").style.opacity = 1;
	},3000)
}

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

window.onscroll = function(){
	var a = document.getElementById("nav-container-fade");
	var top = window.scrollY;
	console.log(top);
	if (top >= 1080){
		a.style.background = "white";
		document.getElementById("home-nav-link-1").style.color = "black";
		document.getElementById("home-nav-link-2").style.color = "black";
		document.getElementById("home-nav-link-3").style.color = "black";
		document.getElementById("home-nav-link-4").style.color = "black";
		document.getElementById("home-nav-link-5").style.color = "black";
		document.getElementById("icon-image").src = "images/minaret-tab-icon.png";
	}else{
		a.style.background = "transparent";
		document.getElementById("home-nav-link-1").style.color = "white";
		document.getElementById("home-nav-link-2").style.color = "white";
		document.getElementById("home-nav-link-3").style.color = "white";
		document.getElementById("home-nav-link-4").style.color = "white";
		document.getElementById("home-nav-link-5").style.color = "white";
		document.getElementById("icon-image").src = "images/minaret-tab-icon-white.png";
	}
}

function reveal() {
  var reveals = document.querySelectorAll(".prints-bottom-section-row");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
