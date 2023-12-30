function countdown(){//Made function countdown
    var seconds = document.getElementById('seconds').value;
    //gets variable seconds from input
    function tick(){//Made subFunction tick
        seconds = seconds -1;//takes variable seconds and minus 1
        timer.innerHTML= seconds;//displays seconds on html id timer
        var time = setTimeout(tick, 1000);//variable time uses statement setTimeout(tick, 1000) to pause program for 1000 milliseconds
        if (seconds == -1){//using if statement when seconds equals -1 calls alert
            alert('Time\'s up!');//use alert to show 'Time's up'
            clearTimeout(time);//use clearTimeout to unpause program when (time) gets to 1000 milliseconds (1 second)
            timer.innerHTML= '';//displays seconds on html id timer
        }
    }
    tick();//calls function tick
}
//starting slideshow
let slideIndex = 1;
showSlides(slideIndex);
// Next and previous controls
function plusSlides(n){
    showSlides(slideIndex += n);
}
// Thumbnail image controls
function currentSlide(n){
    showSlides(slideIndex = n);
}
function showSlides (n){
    let i;
    let slides = document.getElementsByClassName('mySlides');
    let dots = document.getElementsByClassName('dot');
    if (n > slides.length){slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++){
        slides[i].style.display= 'none';
    }
    for (i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}