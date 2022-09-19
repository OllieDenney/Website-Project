

window.onload = function(){
	document.getElementById("header-text").style.opacity = 1;
	setTimeout(function() {
		document.getElementById("header-text").style.opacity = 0;
	},3000)
	setTimeout(function() {
		document.getElementById("header-text").innerHTML = "Minaret";
		document.getElementById("header-text").style.opacity = 1;
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
