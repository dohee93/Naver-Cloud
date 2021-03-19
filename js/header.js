

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
      // subHeader[idx].style = "display:none;"
      menuOpen = true;
   });
   closeBtn[idx].addEventListener('click',function(ev){
      ev.preventDefault();
      navMenu[idx].classList.remove('active');
      // subHeader[idx].style = "display:block;"
      menuOpen = false;
   });
}

for(var i = 0; i < mobileMenu.length; i++) {
   hamburgerClick(i);
}

// END Header hamburger JS
