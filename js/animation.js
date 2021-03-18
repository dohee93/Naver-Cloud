var screenH = document.documentElement.clientHeight;
var windowscrollY = window.pageYOffset;

var aniEle01Y = document.querySelector('#section_1').offsetTop;

var aniEle02Y = document.querySelector('#section_2').offsetTop;

var aniEle03Y = document.querySelector('#section_3').offsetTop;

var aniEle04Y = document.querySelector('#section_4').offsetTop;

function scrollEvent() {

    windowScrollY = window.pageYOffset;

    if (windowScrollY  > aniEle01Y - screenH + 200) {
      document.getElementsByClassName('introduce_cont')[0].style = " animation: fade_in_up 3s forwards;"; 
    }

    if (windowScrollY  > aniEle02Y - screenH + 100) {
      document.getElementsByClassName('cont_box_left')[0].style = " animation: fade_in_up 3s forwards;";
      document.getElementsByClassName('pc_row_1')[0].style = "animation: verticalscroll 180s linear infinite;";
      document.getElementsByClassName('pc_row_2')[0].style = "animation: verticalscroll 180s linear infinite;";

    }

    if (windowScrollY  > aniEle03Y - screenH + 200) {
       document.getElementsByClassName('icon_img')[0].style = " animation:zoomout 3s forwards;"; 
     }

     if (windowScrollY  > aniEle04Y - screenH + 100) {
      document.getElementsByClassName('naver_news')[0].style = " animation: fade_in_up 3s forwards;";
      document.getElementsByClassName('white_btn')[0].style = " animation: fade_in_up 3s forwards;"; 
      document.getElementsByClassName('naver_notice')[0].style = " "; 
    }

 }