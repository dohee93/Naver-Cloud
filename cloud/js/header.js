

// Header Global 언어 팝업창 
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
// END Header Global JS




// Mobile Header hamburger JS

var mobileMenu = document.querySelectorAll('.m-menu');
var navMenu = document.querySelectorAll('.m-nav');
var closeBtn = document.querySelectorAll('.close-btn');
var subHeader = document.getElementsByClassName('sub-header');
var menuOpen = false;

function hamburgerClick(idx) {
   mobileMenu[idx].addEventListener('click',function(ev){
      ev.preventDefault();
      navMenu[idx].classList.add('active');
      subHeader[idx].style = "display:none;"
      topLine[idx].style = "display:none;"
      // topLine[idx].style.top = '0';
      menuOpen = true;
   });
   closeBtn[idx].addEventListener('click',function(ev){
      ev.preventDefault();
      navMenu[idx].classList.remove('active');
      subHeader[idx].style = "display:block;"
      topLine[idx].style = "display:block;"
      menuOpen = false;
   });
}

for(var i = 0; i < mobileMenu.length; i++) {
   hamburgerClick(i);
}

// END Header hamburger JS


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
         subHeader[0].style = "top: 0px; position: fixed; z-index: 90; transition-duration: 650ms;"

         topLine[1].classList.remove('show');
         subHeader[1].style = "top: 0px; position: fixed; z-index: 90; transition-duration: 650ms;"
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
            subHeader[0].style = "top: 78px; position: fixed; z-index: 90; transition-duration: 650ms;"

            topLine[1].classList.add('show');
            subHeader[1].style = "top: 60px; position: fixed; z-index: 90; transition-duration: 650ms;"

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


