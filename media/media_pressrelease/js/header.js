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

   document.querySelector('.m_gnb_lang').style = "visibility: hidden;";

   document.querySelector('#gnb_m_menuopen').style = "display: none;";

   document.querySelector('#gnb_m_menuclose').style = "display: block;";

   document.querySelector('.m_menu_sub').style = "display: block;";


}

function menuClose() {
   document.querySelector('.m_header_wrap').style = "height: auto; background-color: transition";

   document.querySelector('.m_gnb_lang').style = "visibility: visible;";

   document.querySelector('#gnb_m_menuopen').style = "display: block;";

   document.querySelector('#gnb_m_menuclose').style = "display: none;";

   document.querySelector('.m_menu_sub').style = "display: none;";


}

