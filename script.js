
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


let slideIndex = 0;
var i = 0;
console.log(i)
showSlides(i);


function showSlides(i) {
	console.log("balls", i)
	i ++
	console.log("balls", i)
  var slide1 = document.querySelectorAll("#mySlides1");
	var slide2 = document.querySelectorAll("#mySlides2");
	var slide3 = document.querySelectorAll("#mySlides3");
	console.log("balls")
  if (i === 1){
		console.log("balls")
		slide1.style.display = "block";
		slide2.style.display = "hidden";
		slide3.style.display = "none";
		console.log("balls")
	}
	if (i === 2){
		slide1.style.display = "none";
		slide2.style.display = "block";
		slide3.style.display = "none";
	}
	if (i === 3){
		slide1.style.display = "none";
		slide2.style.display = "none";
		slide3.style.display = "block";
		i = 0
	}
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
