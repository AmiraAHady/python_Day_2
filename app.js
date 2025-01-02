let a1 = [12, 45, 7, 32];
let max = Math.max(...a);
let min = Math.min(...a);

let a = [9, 3, 5, 1];
a.sort((x, y) => x - y); // Ascending
console.log(a);

a.sort((x, y) => y - x); // Descending
console.log(a);
fun1=(x,y)=>x+y
console.log('hello');
// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
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
