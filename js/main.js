//menu desplegable movil
$('.toggle-menu').click(function () {
    $('.enlaces-navegacion').slideToggle();
});

//asegurarse de mostar siempre el nav
$(window).resize(function () {
    if($(this).width() >= 768) {
        $('.enlaces-navegacion').css('display', 'inline-block');
    }
});


//slider
$('.slider').slick({
    prevArrow: '<i class="fas fa-chevron-left flecha-slick slick-prev"></i>',
    nextArrow: '<i class="fas fa-chevron-right flecha-slick slick-next"></i>',
    autoplay: true,
    autoplaySpeed: 5000,
});
