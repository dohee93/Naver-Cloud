

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


//Home Page : PC header 배경, 로고, 아이콘 색상 변환
var docElem = document.documentElement;
var docHeight = Math.max(docElem.offsetHeight, docElem.scrollHeight);
var offset;
var scrollPos;

if(docHeight != 'undefined') {
   offset = window.innerHeight;
}

var headerLogo = document.querySelector('header.homeheader .header-container .header-wrap .box h1 a');
var gnbItem = document.querySelectorAll('header.homeheader .header-nav .nav-item a');
var headerColor = document.querySelector('header.homeheader .header-wrap');
var langButtonW = document.querySelector('header.homeheader .header-wrap .header-nav .lang-cont .lang-btn');
var mobileMenuW = document.querySelectorAll('header.homeheader .header-wrap .m-menu span');



window.addEventListener('scroll', function(){
   var scrollPos = docElem.scrollTop;

   if(scrollPos > offset) {
      headerLogo.style.backgroundImage = 'url(img/main_logo.svg)';
      headerColor.style.backgroundColor = '#fff';
      langButtonW.style.backgroundImage = 'url(img/global_icon_b.png)';
      for(var i = 0; i < mobileMenuW.length; i++) {
         mobileMenuW[i].style.backgroundColor = '#1e1e1e';
      }
      for(var i = 1; i < gnbItem.length; i++ ){
         gnbItem[i].style.color = '#aaa';
      }
      
   } else {
      headerLogo.style.backgroundImage = 'url(img/main_logo_w.svg)';
      headerColor.style.backgroundColor = 'transparent';
      langButtonW.style.backgroundImage = 'url(img/global_icon_w.png)';
      for(var i = 0; i < mobileMenuW.length; i++) {
         mobileMenuW[i].style.backgroundColor = '#fff';   
      }
      for(var i = 1; i < gnbItem.length; i++ ){
         gnbItem[i].style.color = '#fff';
      }
   }
});

// END PC Header




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
