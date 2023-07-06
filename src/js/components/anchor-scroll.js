const anchorScroll = () => {
    const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
    if(menuLinks.length > 0){
        menuLinks.forEach(menuLink => {
            menuLink.addEventListener('click', onMenuLinkClick);
        })
        function onMenuLinkClick(e){
            const menuLink = e.target;
            if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
                const gotoBlock = document.querySelector(menuLink.dataset.goto);
                const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
            
                const menuBody = document.querySelector('.menu__body');
                const iconMenu = document.querySelector('.menu__icon');
                if(iconMenu.classList.contains('active')){
                    document.body.classList.remove('lock')
                    iconMenu.classList.remove('active');
                    menuBody.classList.remove('active');
                }

                window.scrollTo({
                    top: gotoBlockValue,
                    behavior: "smooth"
                })
                e.preventDefault();
            }
        }
    }
}

module.exports = anchorScroll;