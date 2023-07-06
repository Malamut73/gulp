const lockPadding = document.querySelectorAll('.lock-padding');
let unlock = true;
const body = document.querySelector('body');
const timeout = 800;

const popupClose = (popupActive, doUnlock = true) => {
    if (unlock) {
        const popupActive = document.querySelector('.popup.open');
        popupActive.classList.remove('open');
        if (doUnlock) {
            bodyUnLock();
        }
    }
}

const bodyLock = () => {
    const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

    if (lockPadding.length > 0) {
        for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = lockPaddingValue;
        }
    }
    body.style.paddingRight = lockPaddingValue;
    body.classList.add('lock'); 

    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}

const bodyUnLock = () => {
    setTimeout(function () {
        if (lockPadding.length > 0) {
            for (let index = 0; index < lockPadding.length; index++) {
                const el = lockPadding[index];
                el.style.paddingRight = '0px';
            }
        }
        body.style.paddingRight = '0px';
        body.classList.remove('lock'); 
    }, timeout);

    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}

const popupOpen = (curentPopup) => {
       
    if (curentPopup && unlock) {

        const popupActive = document.querySelector('.popup.open');
        if (popupActive) {
            popupClose(popupActive, false);
        } else {
            bodyLock();
        }
       
        curentPopup.classList.add('open')
        curentPopup.addEventListener('click', function (e) {
            if (!e.target.closest('.popup__content')) {
                popupClose(e.target.closest('.popup'));
            }
        });
    }
}

module.exports = {
    lockPadding: lockPadding,
    unlock: unlock,
    body: body,
    timeout: timeout,
    popupClose: popupClose,
    bodyLock: bodyLock,
    bodyUnLock: bodyUnLock,
    popupOpen: popupOpen
}
