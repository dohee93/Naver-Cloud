
// footer Button JS

var footerRight = document.querySelectorAll('.family-site');
var familyButton = document.querySelectorAll('.family-btn');

var familyOpen = false;

function familyClick(idx) {
   familyButton[idx].addEventListener('click',function(){
      // alert(idx);
      if(familyOpen){
         footerRight[idx].classList.remove('on');
         familyOpen = false;
      }
      else{
         footerRight[idx].classList.add('on');
         familyOpen = true;
      }
   });
}

for(var i = 0; i < familyButton.length; i++) {
   familyClick(i);
}

// ------ footer Button JS

