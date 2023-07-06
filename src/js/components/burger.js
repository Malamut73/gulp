const burger = () => {
  const iconMenu = document.querySelector('.menu__icon');
  if(iconMenu){
    const menuBody = document.querySelector('.menu__body');
    iconMenu.addEventListener('click', function(e){
      document.body.classList.toggle('lock')
      iconMenu.classList.toggle('active');
      menuBody.classList.toggle('active');
    })
  }

}

module.exports = burger;