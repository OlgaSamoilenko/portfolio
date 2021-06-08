// const hamburger = document.querySelector('.hamburger'),
//     menu = document.querySelector('.menu'),
//     closeElem = document.querySelector('.menu__close');

// hamburger.addEventListener('click', () => {
//     menu.classList.add('active');
// });

// closeElem.addEventListener('click', () => {
//     menu.classList.remove('active');
// });


$(document).ready(function() {
    $('.humburger').click(function() {
        $('.menu').addClass('open');
    });

    $('.menu__link').click(function() {
        $('header').removeClass('open');
    });

    $('.menu__close').click(function() {
        $('header').removeClass('open');
    });
});