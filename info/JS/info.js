

// 기업소개 pictogram box
// const moreBtn = document.querySelector('.moreBtn');
// const menu = document.querySelector('.menu_block');


// moreBtn.addEventListener('click', ( ) => {

//     menu.classList.toggle('actives');
//     moreBtn.classList.toggle('clicked');

//  });

const accordion = document.querySelectorAll('.content_box');


 // 다른 accordion 클릭시 닫혀이지 않은 코드
// 조건은 accordion.length(갯수) 미만으로 반복
for(i = 0;  i < accordion.length; i++){
    accordion[i].addEventListener('click', function(){
        this.classList.toggle('active'); // 내가 클릭한 그것(accordion)을 토글

    });
}

const accordionGlobal = document.querySelectorAll('.maplink');

for(i = 0; i < accordionGlobal.length; i++ ){
    accordionGlobal[i].addEventListener('click', function(){
        this.classList.toggle('active');
    });
}








//  swiper
document.querySelector('.btn1').addEventListener('click', function(){
    document.querySelector('.swiper-wrapper').style.transform = 'translate(0)';
 });
document.querySelector('.btn2').addEventListener('click', function(){
    document.querySelector('.swiper-wrapper').style.transform = 'translate(calc(-79vw - 24px))';
});
document.querySelector('.btn3').addEventListener('click', function(){
    document.querySelector('.swiper-wrapper').style.transform = 'translate(calc(-158vw - 48px))';
 });
 
 
 
 
//  const pagerBtn = document.querySelectorAll('.swiper-pagination-bullet');
 
//  // pager 로 슬라이드 이동하기
//  // 배열로 들어오고 있으니 반복문 사용
//  for(var x = 0;  x < pagerBtn.length; x++){// x가 pagerBtn 보다 작을 때 까지 1씩 더해서 실행
    
//     // pagerBtn 들 마다 할 일 작성
//     // pagerBtn 들의 순번 [x]으로 해서 클릭하면 이벤트 실행
//     pagerBtn[x].addEventListener('click',function(event){
//         //event는 요소 자체를 물고들어오기 위해
//         //event 를 물고 들어와서 그녀석이 누구니?target
//         console.log(event.target.innerText); // 내가 클릭한게 누구(target)인지? 여기서는 span
//         // span 속성값(순번)을 가져와서   goToSlide()에 그 값을 넣어줘야 내가 어떤걸 클릭했는지 알 수 있다

//         /* bxSlider
//         기본 위치값은 CSS 에서 설정해야 한다.
//         모바일에서만 터치
//         bxSlider 메서드 - goToSlide(0)
//         인덱스 번호로 슬라이드하기
//         goToSlide 에다가 숫자를 넘겨주면 된다
//         즉 사용자가 원하는(클릭) 숫자를 넘겨주면 된다
//         */
//           // Attribute(속성) 여기서는 data-idx 가 속성이다
//         // get(가져오다), set(바꾸다), has(있는지 없는지)
//         // getAttribute 속성을 가져오다
//     //    var pageNum = event.target.getAttribute('data-idx');
//        var pageNum = event.target.innerText - 1;
//                                 // span 속성값을 가져와서 pageNum 변수에 저장
//        goToSlide(pageNum);  // span 속성값을 즉 인덱스 번호를 goToSlide에다 넘겨주다
       
//        for(var y = 0; y < pagerBtn.length; y++){
//             pagerBtn[y].classList.remove('swiper-pagination-bullet-active');    
//        }
//        event.target.classList.add('swiper-pagination-bullet-active');
//     });
     
//  }
 
 document.querySelector('#info_slide05 .btn001').addEventListener('click', function(){
    document.querySelector('#info_slide05 .swiper-wrapper').style.transform = 'translate(0)';
    // 모든 swiper-pagination-bullet 에 active 제거, 클릭 한 그 요소에만 active 추가
    
    
 });
document.querySelector('#info_slide05 .btn002').addEventListener('click', function(){
    document.querySelector('#info_slide05 .swiper-wrapper').style.transform = 'translate(calc(-79vw - 24px))';
});
document.querySelector('#info_slide05 .btn003').addEventListener('click', function(){
    document.querySelector('#info_slide05 .swiper-wrapper').style.transform = 'translate(calc(-158vw - 48px))';
 });
 document.querySelector('#info_slide05 .btn004').addEventListener('click', function(){
    document.querySelector('#info_slide05 .swiper-wrapper').style.transform = 'translate(calc(-237vw - 72px))';
});
document.querySelector('#info_slide05 .btn005').addEventListener('click', function(){
    document.querySelector('#info_slide05 .swiper-wrapper').style.transform = 'translate(calc(-316vw - 96px))';
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










