'use strict'

$(document).ready(function(){
  var mainSlider = $('.mainslider');

  mainSlider.owlCarousel({
    items: 1,
    nav: true,
    loop: true,
    smartSpeed: 700
  });

  var product = $('.product');

  product.each(function(){
    $(this).owlCarousel({
      items: 1,
      margin: 15,
      nav: true,
      navText: [
        '<img src="../img/product-arl.jpg">',
        '<img src="../img/product-arr.jpg">'
      ],
      responsive: {
        991: {
          items: 5
        },
        768: {
          items: 4
        },
        640: {
          items: 3
        },
        340: {
          items: 2
        }
      }
    });
  });

  var burger = $('.header-burger');
  var nav = $('.header-nav');

  burger.click(function(){
    nav.toggleClass('show-nav');
  });
});