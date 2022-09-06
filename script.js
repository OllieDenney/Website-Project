
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

let slideIndex = 1;
console.log(slideIndex)

setInterval(plusSlides(slideIndex), 1000);

function plusSlides(slideIndex) {
  showSlides(slideIndex += 1);
	console.log(slideIndex)
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
