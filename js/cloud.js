
// Top Button JS

var docElem = document.documentElement,
   docHeight = Math.max(docElem.offsetHeight, docElem.scrollHeight),
   offset,
   scrollPos,
   btt = document.getElementById('top-btn');

if(docHeight != 'undefined') {
   offset = window.innerHeight;
}

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
         window.scrollBy(0,-100);
      } else {
         clearInterval(scrollInterval);
      }
   }, 15);
}

// ----- END Top Button JS ----

// Content02 Slide JS

var slideWrapper = document.getElementsByClassName('slide-wrap'),
    slideContainer = document.getElementsByClassName('slide-container'),
    slides = document.getElementsByClassName('slide'),
    slideCount = slides.length,
    currentIndex = 0,
    animateState = [false, false, false, false, false, false],
    prevButton = document.querySelector('#slide-button-prev'),
    nextButton = document.querySelector('#slide-button-next'),
    pageCurrent = document.querySelector('.slide-pagination-current');

for( var i = 0; i < slideCount; i++){
   slides[i].style.left = i * 100 + '%';
}

function goToSlide(idx) {
   if(idx > -1 && idx < slideCount) {
      slideContainer[0].style.left = -100 * idx + '%';
      slides[idx].classList.add('animated');
      animateState = true;
      currentIndex = idx;
      pageCurrent.innerHTML = idx + 1;
   }
   for(var i = 0; i < slideCount; i++) {
      if(i!=idx){
         slides[i].classList.remove('animated');
         animateState = false;
      }
   }
   updateNav();
}

function updateNav() {
   if(currentIndex == 0){
      prevButton.classList.add('disabled');
   } else {
      prevButton.classList.remove('disabled');
   }
   if(currentIndex == slideCount - 1) {
      nextButton.classList.add('disabled');
   } else {
      nextButton.classList.remove('disabled');
   }
}

prevButton.addEventListener('click', function(e){
   e.preventDefault();
   goToSlide(currentIndex - 1);
});

nextButton.addEventListener('click', function(e){
   e.preventDefault();
   goToSlide(currentIndex + 1);
});

prevButton.addEventListener('mouseover', function(){
   if(currentIndex != 0) {
      prevButton.style.backgroundImage = 'url(img/history_prev_b.png)';
   }
});
prevButton.addEventListener('mouseout', function(){
   prevButton.style.backgroundImage = 'url(img/history_prev.png)';
});
prevButton.addEventListener('mouseup', function(){
   if(currentIndex == 1){
      prevButton.style.backgroundImage = 'url(img/history_prev.png)';
   }
});

nextButton.addEventListener('mouseover', function(){
   if(currentIndex != slideCount-1) {
      nextButton.style.backgroundImage = 'url(img/history_next_b.png)';
   }
});
nextButton.addEventListener('mouseout', function(){
   nextButton.style.backgroundImage = 'url(img/history_next.png)';
});
nextButton.addEventListener('mouseup', function(){
   if(currentIndex == slideCount - 2){
      nextButton.style.backgroundImage = 'url(img/history_next.png)';
   }
});

goToSlide(0);

// END Content02 Slide JS

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

// END footer Button JS