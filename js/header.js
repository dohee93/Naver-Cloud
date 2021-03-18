//PC header 배경, 로고, 아이콘 색상 변환
var docElem = document.documentElement;
var docHeight = Math.max(docElem.offsetHeight, docElem.scrollHeight);
var offset;
var scrollPos;

if(docHeight != 'undefined') {
   offset = window.innerHeight;
}

var navBar = document.getElementById('navbar');
var logoImg = document.getElementById('logo');
var changeTextColor = document.getElementsByClassName('item');
var langImg = document.getElementById('lang_img');

console.log(changeTextColor);

window.addEventListener('scroll', function() {
  var scrollPos = docElem.scrollTop;
  if(scrollPos > offset - 300){
     navBar.style.backgroundColor = 'white';
     navBar.style.animation = 'bar_opacity 1s';
     logoImg.classList.add('green');
     langImg.classList.add('black');
     
     for( var i = 1; i < 7; i++) {
        changeTextColor[i].classList.add('gray');
     }
  }
  else{
     navBar.style.backgroundColor = 'transparent';
     logoImg.classList.remove('green');
     langImg.classList.remove('black');
     
     for( var i = 1; i < 7; i++) {
      changeTextColor[i].classList.remove('gray');
     }
  }
});



//Mobile header 배경, 로고, 아이콘 색상 변환
var mnavBar = document.getElementById('m_navbar');
var mlogoImg = document.getElementById('m_gnb_logo_w');
var mlangImg = document.getElementById('m_lang_img');
var mmenuImg = document.getElementById('gnb_m_menuopen');

window.addEventListener('scroll', function() {
   var mscrollPos = docElem.scrollTop;
   if(mscrollPos > offset - 100){
      mnavBar.style.backgroundColor = 'white';
      mlogoImg.classList.add('mgreen');
      mlangImg.classList.add('mblack');
      mmenuImg.classList.add('mblack2');
   }
   else{
      mnavBar.style.backgroundColor = 'transparent';
      mlogoImg.classList.remove('mgreen');
      mlangImg.classList.remove('mblack');
      mmenuImg.classList.remove('mblack2');
   }
 });



// PC 지구본 아이콘 - 언어부분
var headerLang = document.querySelector('.gnb_lang');
var langButton = document.querySelector('#lang_img');
var global = document.querySelector('#langUL');

var globalOpen = false;

langButton.addEventListener('click', () => {
   if(globalOpen){
      headerLang.classList.remove('active');
      global.style.display = 'none';
      globalOpen = false;
   }
   else{
      headerLang.classList.add('active');
      global.style.display = 'block';
      globalOpen = true;
   }
})



// Mobile 지구본 아이콘 - 언어부분
function doDisplay() {
   var con = document.querySelector('#mlangUL');
   if(con.style.display === 'none') {
      con.style.display ="block";
   }
   else {
      con.style.display = "none";
   }
}



// 모바일 메뉴 열기 닫기
function menuOpen() {
   document.querySelector('.m_header_wrap').style = "height: 100vh; background-color: rgb(255, 255, 255);";

   document.querySelector('.m_gnb_logo_w').style = "display: none";

   document.querySelector('.m_gnb_logo_g').style = "display: block";

   document.querySelector('#gnb_m_menuopen').style = "display: none;";

   document.querySelector('#gnb_m_menuclose').style = "display: block;";

   document.querySelector('.m_menu_sub').style = "display: block;";

   document.querySelector('.m_gnb_lang').style = "visibility: hidden;";

}

function menuClose() {
   document.querySelector('.m_header_wrap').style = "height: auto; background-color: transition";

   document.querySelector('.m_gnb_logo_g').style = "display: none;";

   document.querySelector('.m_gnb_logo_w').style = "display: block;";

   document.querySelector('#gnb_m_menuopen').style = "display: block;";

   document.querySelector('#gnb_m_menuclose').style = "display: none;";

   document.querySelector('.m_menu_sub').style = "display: none;";

   document.querySelector('.m_gnb_lang').style = "visibility: visible;";

}

