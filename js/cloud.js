
// Top Button JS
var docElem = document.documentElement;
var docHeight = Math.max(docElem.offsetHeight, docElem.scrollHeight);
var offset;
var scrollPos;


if(docHeight != 'undefined') {
   offset = window.innerHeight;
}

var btt = document.getElementById('top-btn');

window.addEventListener('scroll', function() {
   scrollPos = docElem.scrollTop;
   btt.style.display = (scrollPos > offset) ? 'block': 'none';
});



btt.addEventListener('click', function(ev){
   ev.preventDefault();
   scrollToTop();
});


function scrollToTop() {
   var scrollInterval = setInterval(function(){ 
      if(scrollPos != 0) {
         window.scrollBy(1,-250);
      } else {
         clearInterval(scrollInterval);
      }
   }, 15);
}



// Content02 Slide JS
var slideWrapper = document.getElementsByClassName('swiper-container'),//.swiper-container
    sliderContainer = document.getElementsByClassName('swiper-wrapper'),//.swiper-wrapper
    slides = document.getElementsByClassName('swiper-slide'),//.swiper-slide 배열
    slideCount = slides.length,//슬라이드 개수
    currentIndex = 0, //처음인지 마지막인지 순서 구분
    btnPrev = document.getElementsByClassName('swiper-button-prev'),
    btnNext = document.getElementsByClassName('swiper-button-next');

//currentIndex = 0 1 2 3 4 5 
//transitionX() = 0% -16.666667% -33.333333% -50% -66.666667% -83.333333%
// (100/6*currentIndex)

for( var i = 0; i < slideCount; i++){
   
   console.log(slides[i].style.left);
   slides[i].style.left = 100 * i + '%';
   
   console.log(slides[i].style.top)
   
}


function goToSlide(idx) {
   var xPos = -100 * idx + '%';

   slides[0].style.left = xPos;
   console.log(xPos);
   currentIndex = idx;
}

goToSlide(1);


// console.log(sliderContainer);

// footer Button JS
var footerRight = document.querySelector('.footer_right');
var familyButton = document.querySelector('#footer_btn');

var buttonOpen = false;

familyButton.addEventListener('click', () => {
   if(buttonOpen){
      footerRight.classList.remove('on');
      buttonOpen = false;
   }
   else{
      footerRight.classList.add('on');
      buttonOpen = true;
   }
})

