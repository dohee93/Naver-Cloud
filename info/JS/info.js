const famliySite = document.querySelector('.famliy_site');
const footerBtn = document.querySelector('#footer_btn');

var buttonOpen = false;

footerBtn.addEventListener('click', () => {
    
    if(buttonOpen){
        famliySite.classList.remove('on');
        buttonOpen = false;
    }
    else{
        famliySite.classList.add('on');
        buttonOpen = true;
    }
});
