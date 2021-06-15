// const hamburger = document.querySelector('.hamburger'),
//     menu = document.querySelector('.menu'),
//     closeElem = document.querySelector('.menu__close');
// hamburger.addEventListener('click', ('.menu') => {
//     menu.classList.add('active');
// });
// closeElem.addEventListener('click', () => {
//     menu.classList.remove('active');
// });


// $(document).ready(function() {
//     $('.humburger').click(function() {
//         $('.menu').addClass('open');
//     });

//     $('.menu__link').click(function() {
//         $('header').removeClass('open');
//     });

//     $('.menu__close').click(function() {
//         $('header').removeClass('open');
//     });
// });


// const menu = document.querySelector("svg");
// menu.addEventListener("click", morph);

// function morph() {
//   menu.classList.toggle("open");
// }
// document.querySelector('.humburger').addEventListener('click', function(){
//   document.querySelector('.menu').classList.toggle('active')
//   });
// document.querySelector('.menu__close').addEventListener('click', function(){
//   document.querySelector('header').toggleClass('active')
//   });

document.querySelector('.humburger').addEventListener('click', function(){
  document.querySelector('.menu').classList.toggle('active')
  });
document.querySelector('.menu__close').addEventListener('click', function(){
  document.querySelector('.menu').classList.toggle('active')
  });
  
// var default_color;
// function mouseIn() {
//   default_color = document.changecolorbutton.but.style.background;
//   document.changecolorbutton.but.style.background = "white";
// }
// function mouseOut() {
//   document.changecolorbutton.but.style.background = default_color;
// }