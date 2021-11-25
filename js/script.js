$(document).ready(function () {
    $('.slider').slick({
        arrows: false,
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 1200,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        variableWidght: false,

    });
})