// Header lang JS
var headerLang = document.querySelectorAll('.lang-cont');
var langButton = document.querySelectorAll('.lang-btn');
var global = document.querySelectorAll('.lang-cont ul');

var globalOpen = false;

function globalClick(idx) {
   langButton[idx].addEventListener('click',function(ev){
      ev.preventDefault();

      if(globalOpen){
         headerLang[idx].classList.remove('active');
         global[idx].style.display = 'none';
         global[idx].style.zIndex = '0';
         globalOpen = false;
      }
      else{
         headerLang[idx].classList.add('active');
         global[idx].style.display = 'block';
         global[idx].style.zIndex = '105';

         globalOpen = true;
      }
   });
}

for(var i = 0; i < langButton.length; i++) {
   globalClick(i);
}
// END Header lang JS





// Header hamburger JS

var mobileMenu = document.querySelectorAll('.m-menu');
var navMenu = document.querySelectorAll('.m-nav');
var closeBtn = document.querySelectorAll('.close-btn');
var menuOpen = false;

function hamburgerClick(idx) {
   mobileMenu[idx].addEventListener('click',function(ev){
      ev.preventDefault();
      navMenu[idx].classList.add('active');
      subHeader[idx].style = "display:none;"
      menuOpen = true;
   });
   closeBtn[idx].addEventListener('click',function(ev){
      ev.preventDefault();
      navMenu[idx].classList.remove('active');
      subHeader[idx].style = "display:block; "
      menuOpen = false;
   });
}

for(var i = 0; i < mobileMenu.length; i++) {
   hamburgerClick(i);
}

// END Header hamburger JS






// Section02 - 04 pc Slide JS
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


//------ Section02 - 04 pc Slide JS







// Section03 - Mobile Card Box Accordion JS

var cardBox = document.querySelectorAll('.wrap.mo .card-box ul li');
var cardBoxInfo = document.querySelectorAll('.wrap.mo .card-box ul li .info');
var cardBoxArrow = document.querySelectorAll('.wrap.mo .card-box ul li strong');

var cardOpen = false;

function cardBoxOpen(idx) {
   cardBox[idx].addEventListener('click', function(){
      if(cardOpen){   
         cardBoxInfo[idx].classList.remove('open');
         cardBoxArrow[idx].classList.remove('open');
         cardOpen = false;
      } else {
         cardBoxInfo[idx].classList.add('open');
         cardBoxArrow[idx].classList.add('open');
         cardOpen = true;
      }
   });
}

for(var i = 0; i < cardBox.length; i++) {
   cardBoxOpen(i);
}




// ----- Section03 - Mobile Card Box Accordion







// Top Button JS
var docElem = document.documentElement,
   docHeight = Math.max(docElem.offsetHeight, docElem.scrollHeight),
   offset,
   scrollPos,
   btt = document.getElementById('top-btn'),
   mBtt = document.getElementById('mo-top-btn');

if(docHeight != 'undefined') {
   offset = window.innerHeight;
}

window.addEventListener('scroll', function() {
   scrollPos = docElem.scrollTop;
   btt.style.display = (scrollPos > offset) ? 'block': 'none';
   mBtt.style.display = (scrollPos > offset) ? 'block': 'none';
});

btt.addEventListener('click', function(ev){
   ev.preventDefault();
   scrollToTop();
});
mBtt.addEventListener('click', function(ew){
   ew.preventDefault();
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
// ----- Top Button JS 








// footer Button JS

var footerRight = document.querySelectorAll('.family-site');
var familyButton = document.querySelectorAll('.family-btn');

var familyOpen = false;

function familyClick(idx) {
   familyButton[idx].addEventListener('click',function(){
      // alert(idx);
      if(familyOpen){
         footerRight[idx].classList.remove('on');
         familyOpen = false;
      }
      else{
         footerRight[idx].classList.add('on');
         familyOpen = true;
      }
   });
}

for(var i = 0; i < familyButton.length; i++) {
   familyClick(i);
}

// ------ footer Button JS








// Small Navigation JS
// Header & Section Menu Fixed JS
var content02Top = document.getElementById('content02').offsetTop;
var smallNav = document.getElementsByClassName('small-nav');
var content02Height = document.getElementById('content02').offsetHeight;

var lastScrollTop = 0;
var delta = 5;
var fixBox = document.getElementsByClassName('sub-header');
var fixBox1 = fixBox[0];
var fixBox1Top = fixBox1.offsetTop;
var fixBox1Height = fixBox1.offsetHeight;

var didScroll;

var headerWrap = document.getElementsByClassName('header-container');
var topLine = document.querySelectorAll('#top-line');
var subHeader = document.getElementsByClassName('sub-header');
var headerH = headerWrap[0].offsetHeight;
var subheaderH = subHeader[0].offsetHeight;

window.onscroll = function(e) {
   didScroll = true;
   
};

//0.25초마다 스크롤 여부 체크, hasScrolled() 함수 호출
setInterval(function(){
   if(didScroll){
      hasScrolled();
      didScroll = false;
   }
}, 250);

function hasScrolled() {
   var nowScrollTop = window.pageYOffset;
   var pageH = window.pageYOffset;
   // console.log(nowScrollTop);
   if(Math.abs(lastScrollTop - nowScrollTop) <= delta) {
      return;
   }
   if(nowScrollTop > 200) {
      if(nowScrollTop > lastScrollTop && nowScrollTop > fixBox1Height) {
         //scroll down

         headerWrap[0].classList.add('hide');
         topLine[0].classList.remove('show');
         subHeader[0].style = "top: 0px; position: fixed; z-index: 101; transition-duration: 650ms;"

         topLine[1].classList.remove('show');
         subHeader[1].style = "top: 0px; position: fixed; z-index: 101; transition-duration: 650ms;"
         if(nowScrollTop > content02Top - 200 && nowScrollTop < content03Top - screenH) {
            smallNav[0].classList.add('down');
            smallNav[0].classList.remove('up');
            smallNav[0].classList.add('visible');
         } else {
            smallNav[0].classList.remove('visible');
            smallNav[0].classList.remove('up');
            smallNav[0].classList.remove('down');
         }
         


      } else {
         if(nowScrollTop + window.innerHeight < document.body.offsetHeight) {
            //scroll up

            headerWrap[0].classList.remove('hide');
            topLine[0].classList.add('show');
            subHeader[0].style = "top: 78px; position: fixed; z-index: 99; transition-duration: 650ms;"

            topLine[1].classList.add('show');
            subHeader[1].style = "top: 60px; position: fixed; z-index: 101; transition-duration: 650ms;"

            if(nowScrollTop > content02Top - 200 && nowScrollTop < content03Top - screenH) {
               smallNav[0].classList.add('up');
               smallNav[0].classList.remove('down');
               smallNav[0].classList.add('visible');
            } else {
               smallNav[0].classList.remove('visible');
               smallNav[0].classList.remove('up');
               smallNav[0].classList.remove('down');
            }
         }
      } 
   } else {
      subHeader[0].style = "top: 392px;"
      subHeader[1].style = "top: 276px;"
      topLine[0].classList.remove('show');
      topLine[1].classList.remove('show');
      headerWrap[0].classList.remove('hide');
   }
   lastScrollTop = nowScrollTop;
}

// ----- Header & Section Menu Fixed JS
// ----- Small Navigation JS


// 첫 화면
// header-wrap  top : 0px;
// top-line opacity: 1; top: 0px; position: absolute;
// sub-header opacity: 1; top: 392px; position: absolute; z-index: 101; transition-duration: 650ms;

// 스크롤 내렸을 때
// header-wrap  top : -80px;
// top-line opacity: 0; top: -82px; position: absolute;
// sub-header opacity: 1; top: 0px; position: absolute; z-index: 101; transition-duration: 650ms;


// 스크롤 올렸을 때
// header-wrap  top : 0px;
// top-line opacity: 1; top: 82px; position: absolute;
// sub-header opacity: 1; top: 80px; position: absolute; z-index: 29; transition-duration: 650ms;




// Small Navigation JS Click 시, active 이벤트 추가

var navButtons = document.querySelectorAll('#smallNav .nav-button');
var screenH = document.documentElement.clientHeight;

var section01Box = document.getElementById('s-section-01-box');
var section02Box = document.getElementById('s-section-02-box');
var section03Box = document.getElementById('s-section-03-box');
var section04Box = document.getElementById('s-section-04-box');
var section05Box = document.getElementById('s-section-05-box');
var content01Top = document.getElementById('content01').offsetTop;
var content03Top = document.getElementById('content03').offsetTop;

// Content02 - Section 01 ~ 05 Box의 top 위치 계산 
var section01BoxTop = content02Top + section01Box.offsetTop - headerH - subheaderH - 200;
var section02BoxTop = content02Top + section02Box.offsetTop + screenH - headerH - subheaderH;
var section03BoxTop = content02Top + section03Box.offsetTop + screenH - headerH - subheaderH;
var section04BoxTop = content02Top + section04Box.offsetTop + screenH - headerH - subheaderH;
var section05BoxTop = content02Top + section05Box.offsetTop + screenH - headerH - subheaderH;
var section05BoxBottom = content03Top;

//해당 위치에 왔을 때, 각 버튼에 active 클래스 추가
function smallNavPos(pos) {
   
   if(pos >= section01BoxTop  && pos < section02BoxTop) {
      navButtons[0].classList.add('active');
   } else {
      navButtons[0].classList.remove('active');
   }
   if(pos >= section02BoxTop && pos < section03BoxTop) {
      navButtons[1].classList.add('active');
   } else {
      navButtons[1].classList.remove('active');
   }
   if(pos >= section03BoxTop && pos < section04BoxTop) {
      navButtons[2].classList.add('active');
   } else {
      navButtons[2].classList.remove('active');
   }
   if(pos >= section04BoxTop && pos < section05BoxTop) {
      navButtons[3].classList.add('active');
   } else {
      navButtons[3].classList.remove('active');
   }
   if(pos >= section05BoxTop && pos < section05BoxBottom) {
      navButtons[4].classList.add('active');
   } else {
      navButtons[4].classList.remove('active');
   }
}

window.addEventListener('scroll', function(){
   var scrollTop = window.pageYOffset;
   smallNavPos(scrollTop);
   subHeaderPos(scrollTop);
});

for(var i = 0; i < navButtons.length; i++){
   navClick(i);
}
// small navigation 클릭했을 때, 페이지 이동 함수
function navClick(ev){
   navButtons[ev].addEventListener('click', function(p) {
      p.preventDefault();
      console.log(ev);
      switch(ev) {
         case 0:
            window.scrollTo({top:section01BoxTop + 200, behavior: 'smooth'});
            break;
         case 1:
            window.scrollTo({top:section02BoxTop + 200, behavior: 'smooth'});
            break;
         case 2:
            window.scrollTo({top:section03BoxTop + 200, behavior: 'smooth'});
            break;
         case 3:
            window.scrollTo({top:section04BoxTop + 200, behavior: 'smooth'});
            break;
         case 4:
            window.scrollTo({top:section05BoxTop + 200, behavior: 'smooth'});
            break;
         default:
            break;
      }

   });
}
// ----- Small Navigation JS



var subButton = document.querySelectorAll('.sub-btn');
var section01Top = document.getElementById('title01').offsetTop;
var section02Top = document.getElementById('title02').offsetTop;
var section03Top = document.getElementById('title03').offsetTop;
var visualTop = document.getElementById('visual').offsetTop;
var technologyTop = document.getElementById('technology').offsetTop;
var serviceTop = document.getElementById('service').offsetTop;


function subClick(idx) {
   subButton[idx].addEventListener('click', function(ev){
      ev.preventDefault();
      
      switch(idx) {
         case 0:
            window.scrollTo({top: section01Top + 500, behavior: 'smooth'});  
            break;
         case 1:
            window.scrollTo({top: section02Top - subheaderH, behavior: 'smooth'});
            break;
         case 2:
            window.scrollTo({top: section03Top + screenH - subheaderH  , behavior: 'smooth'});
            break;
         case 3 :
            window.scrollTo({top: visualTop, behavior: 'smooth'});  
            break;
         case 4:
            window.scrollTo({top: technologyTop + 100, behavior: 'smooth'});
            break;
         case 5:
            window.scrollTo({top: serviceTop + screenH , behavior: 'smooth'});
            break;

         default:
            break;
      }

   });
}

for(var i = 0; i < subButton.length; i++) {
   subClick(i);
}
console.log(section01Top,section02Top,section03Top);
console.log(visualTop,technologyTop,serviceTop);

function subHeaderPos(pos) {
   
   if(pos >= 0  && pos < section02Top - 100) {
      subButton[0].classList.add('active');
   } else {
      subButton[0].classList.remove('active');
   }
   if(pos >= section02Top - 100 && pos < section03Top + screenH - 100) {
      subButton[1].classList.add('active');
   } else {
      subButton[1].classList.remove('active');
   }
   if(pos >= section03Top + screenH - 100) {
      subButton[2].classList.add('active');
   } else {
      subButton[2].classList.remove('active');
   }
   if(pos >= 0 && pos < technologyTop) {
      subButton[3].classList.add('active');
   } else {
      subButton[3].classList.remove('active');
   }
   if(pos >= technologyTop && pos < serviceTop + screenH - 200) {
      subButton[4].classList.add('active');
   } else {
      subButton[4].classList.remove('active');
   }
   if(pos >= serviceTop + screenH - 200) {
      subButton[5].classList.add('active');
   } else {
      subButton[5].classList.remove('active');
   }
}