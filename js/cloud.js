
// pc 풋터- 관계사 더보기
const footerRight = document.querySelector('.footer_right');
const familyButton = document.querySelector('#footer_btn');


var buttonOpen = false;


familyButton.addEventListener('click', () => {
   if(buttonOpen){
      footerRight.classList.remove('on');
      buttonOpen = false;
   }
   else{
      footerRight.classList.add('on');
      buttonOpen = true;
   }
})



// mobile 풋터- 관계사 더보기
const mfooterRight = document.querySelector('.m_footer_right');
const mfamilyButton = document.querySelector('#m_footer_btn');


var buttonOpen = false;


mfamilyButton.addEventListener('click', () => {
   if(buttonOpen){
      mfooterRight.classList.remove('on');
      buttonOpen = false;
   }
   else{
      mfooterRight.classList.add('on');
      buttonOpen = true;
   }
})