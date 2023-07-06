const global = require('./global.js');

const popup = () => {
    const popupLinks = document.querySelectorAll('.popup-link');

    if (popupLinks.length > 0) {
        for (let index = 0; index < popupLinks.length; index++) {
            const popupLink = popupLinks[index];
            popupLink.addEventListener("click", function (e) {
                const popupName = popupLink.getAttribute('href').replace('#', '');
                const curentPopup = document.getElementById(popupName);
                global.popupOpen(curentPopup);
                e.preventDefault();
            });
        }
    }

    const popupCloseIcon = document.querySelectorAll('.close-popup');
    
    if (popupCloseIcon.length > 0) {
        for (let index = 0; index < popupCloseIcon.length; index++) {
            const el = popupCloseIcon[index];
            el.addEventListener('click', function (e) {
                
                global.popupClose(el.closest('.popup'));
                e.preventDefault();
            })
        }
    }

    document.addEventListener('keydown', function (e) {
        if (e.keyCode === 27) {
            const popupActive = document.querySelector('.popup.open');
            global.popupClose(popupActive);
        }
    });

}

module.exports = popup;

