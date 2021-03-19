
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
