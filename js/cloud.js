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