const $ = require('jquery');

const slick = () => {

    document.addEventListener("DOMContentLoaded", function() {
        var sliderContainer = document.querySelector('.services__slider-container');
        var settings = {
            dots: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 6000,
            slidesToShow: 3,
            responsive: [
                {
                    breakpoint: 950,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 650,
                    settings: {
                        slidesToShow: 1,
                    }
                },
            ]
        };
        
        new Slider(sliderContainer, settings);
    });
    
    function Slider(container, settings) {
        this.container = container;
        this.settings = settings;
        
        this.init();
    }
    
    Slider.prototype.init = function() {
        $(this.container).slick(this.settings);
    };
};

module.exports = slick;