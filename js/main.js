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
      items: 5,
      margin: 15,
      nav: true,
      navText: [
        '<img src="../img/product-arl.jpg">',
        '<img src="../img/product-arr.jpg">'
      ]
    });
  });
});