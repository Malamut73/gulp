const global = require('./global.js');

const send = () => {
    "use strict"
    
    document.addEventListener('DOMContentLoaded', function () {
        const forms = document.querySelectorAll('.form');
        forms.forEach(function (form) {
            form.addEventListener('submit', formSend);
        });
    
        async function formSend(e) {
            e.preventDefault();
    
            let error = formValidate(this);
            let formData = new FormData(this);
            let popupForm = this.classList.contains('form-popup');
    
            if (error === 0) {
    
                // this.classList.add('sending');
                // let response = await fetch('sendmail.php', {
                //     method: 'POST',
                //     body: formData
                // });
                // if (response.ok) {
                //     let result = await response.json();
                //     alert(result.message);
                //     this.reset();
                //     this.classList.remove('sending')
                //     if(popupForm){
                //         closeMainPopupForm(this);
                //     }
                // } else {
                //     alert('Ошибка')
                //     this.classList.remove('sending')
                // }

                    if(popupForm){        
                        closeMainPopupForm(this);
                    }
            } else {
                alert('Заполните обязательные поля');
            }
        }
    
        function formValidate(form) {
            let error = 0;
            let formReq = form.querySelectorAll('.req');
    
            formReq.forEach(function (input) {
                formRemoveError(input);
    
                if (input.classList.contains('email')) {
                    if (emailTest(input)) {
                        formAddError(input);
                        error++;
                    }
                } else if (input.getAttribute('type') === 'checkbox' && !input.checked) {
                    formAddError(input);
                    error++;
                } else {
                    if (input.value === '') {
                        formAddError(input);
                        error++;
                    }
                }
            });
            return error;
        }
    
        function closeMainPopupForm(form){
            //удалить строчку ниже
            form.reset();
            global.popupClose(form);
        }
    
        function formAddError(input) {
            input.parentElement.classList.add('error');
            input.classList.add('error');
        }
    
        function formRemoveError(input) {
            input.parentElement.classList.remove('error');
            input.classList.remove('error');
        }
    
        function emailTest(input) {
            return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
        }


    })
}

module.exports = send;

