"use stricr"

const isMobile = () => {
    const userAgent = navigator.userAgent;
  
    const Android = () => {
      return userAgent.match(/Android/i);
    };
  
    const BlackBerry = () => {
      return userAgent.match(/BlackBerry/i);
    };
  
    const iOS = () => {
      return userAgent.match(/iPhone|iPad|iPod/i);
    };
  
    const Opera = () => {
      return userAgent.match(/Opera Mini/i);
    };
  
    const Windows = () => {
      return userAgent.match(/IEMobile/i);
    };
  
    const any = () => {
      return Android() || BlackBerry() || iOS() || Opera() || Windows();
    };
  
    if (any()) {
      document.body.classList.add('touch');
      let menuArrows = document.querySelectorAll('.menu__arrow')
      if(menuArrows.length > 0){
        for(let index = 0; index < menuArrows.length; index++){
          const menuArrow = menuArrows[index];
          menuArrow.addEventListener('click', function(e){
            menuArrow.parentElement.classList.toggle('active');
          })
        }
      }
    } else {
      document.body.classList.add('pc');
    }
  };

module.exports = isMobile;