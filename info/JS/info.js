 // langs toggle
// 클릭되는 영역
const langBtn = document.querySelector('.lang_btn');
 // 메뉴 목록
const langNav = document.querySelector('.lang_nav');



langBtn.addEventListener('click', ( ) => {
    
    langNav.classList.toggle('on');
   
    
});





// 기업소개 pictogram box
const moreBtn = document.querySelector('.moreBtn');
const menu = document.querySelector('.menu_block');


moreBtn.addEventListener('click', ( ) => {

    menu.classList.toggle('actives');
    moreBtn.classList.toggle('clicked');

 });
 


//  swiper
document.querySelector('.btn2').addEventListener('click', function(){
   document.querySelector('.swiper-wrapper').style.transform = 'translate(-100vw)';
});
document.querySelector('.btn3').addEventListener('click', function(){
    document.querySelector('.swiper-wrapper').style.transform = 'translate(-200vw)';
 });
 
 
 


// // 현재 스크롤에 따라 Nav 고정하는 방법

// // 1.  아이디 sub_nav 변수에 담기
// const subNav = document.getElementById('sub_nav');

// // 2. position:fixed 로 빠진 부분을 어떻게 채울 수 있을까?
// // 해결 방법은 똑같은 요소를 만들어서 대신 넣는다 
// // 해당 node의 children 까지 복제하려면 true, 해당 node 만 복제하려면 false
// /* 자식들까지 복제하는 이유는 자식 요소가 없으면 요소를 복제한다 해도 
// height 값이 0 이기 때문
// */
// //아이디 subNav 를 고정할 때 복제한 요소를 넣어주고
// // 고정을 해제할 때 복제한 요소를 제거하는 방식
// const tmp = subNav.cloneNode(true);
// tmp.style.visibility = 'hidden';

// //3. 엘리먼트의 페이지 위치 알아내기, GetBoundingClientRect
// // sub_nav의 top 값 가져오기
// const navTop = subNav.getBoundingClientRect().top;

// /* Window.pageYOffset
// Window 인터페이스의 pageYOffset 읽기 전용 속성은 scrollY의 다른 이름으로, 
// 문서가 수직으로 얼마나 스크롤됐는지 픽셀 단위로 반환한다 */
// window.addEventListener('scroll', () => {
    
// // 윈도우 문서에 수직으로 스크롤 한것이 nav의 top값 보다 크면 if문 실행
//     if (window.pageYOffset > navTop) {
//         subNav.parentNode.appendChild(tmp);
//         subNav.style.position = 'fixed';
//         subNav.style.top = 0;
//     } 
//     // else if(Array.from(subNav.parentNode.children).indexOf(tmp) > -1){
//     //     subNav.parentNode.removeChild(tmp);
//     //     subNav.style.position = 'static';
//     //     subNav.style.top = '';
//     // }
//     else {
//         subNav.parentNode.removeChild(tmp);
//         subNav.style.position = 'static';
//         subNav.style.top = '';
//     }
// });


// Top Btn
let Top = document.querySelector('#go-top');

// Top버튼이 안보이다가 스크롤 조금 아래로 내리면  Top 버튼 보이게 하는 코드
window.addEventListener('scroll', function(){
    if(this.scrollY > 476){
        Top.classList.add('on');   
    }
    else{
        Top.classList.remove('on');
    }
})
// 스크롤 올라가는 코드
// ()안에는 매개변수(파라미터) 즉 값을 가져와서 담는 변수, 
// 값은 인자라고 한다(값 자체가 인자)
Top.addEventListener('click', function(e){
    e.preventDefault(); // a 태그를 눌렀을때도 href 링크로 이동하지 않게 할 경우
    window.scrollTo({
       top:0, behavior: 'smooth'
    });
})






// 주요 연혁 슬라이드
document.querySelector('.button-prev').addEventListener('click', function(){
    document.querySelector('.con').style.transform = 
    'translate(0)';
});
document.querySelector('.button-next').addEventListener('click', function(){
    document.querySelector('.con').style.transform = 
    'translate(-90vw)';
});











// footer famliy_site
// 버튼, 목록, X 아이콘
const footerBtn = document.querySelector('#footer_btn');
const famliySite = document.querySelector('.famliy_site');
const famliySiteUl = document.querySelector('.famliy_site .clfix');


footerBtn.addEventListener('click', ( ) => {
    
    famliySite.classList.toggle('on');
    footerBtn.classList.toggle('on');
    famliySiteUl.classList.toggle('on');
    
});


// // Mobile footer famliy_site
//버튼이 돌아가기 위해
const footerMBtn = document.querySelector('#m_footBtn');
// 클릭되는 영역
 const familyMSite = document.querySelector('.m_foot .family_site');
 // 메뉴 목록
const familyMSiteUl = document.querySelector('.m_foot .family_site .clfix');



footerMBtn.addEventListener('click', ( ) => {
    
    familyMSite.classList.toggle('on');
    footerMBtn.classList.toggle('on');
    familyMSiteUl.classList.toggle('on');
    
});



