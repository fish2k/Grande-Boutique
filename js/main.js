'use strict'

$(document).ready(function(){

  // Верхний слайдер на главной
  var mainSlider = $('.mainslider');

  mainSlider.owlCarousel({
    items: 1,
    nav: true,
    loop: true,
    smartSpeed: 700
  });

  // Каруселька с продукцией
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

  // Бургер меню
  var burger = $('.header-burger');
  var nav = $('.header-nav');

  burger.click(function(){
    nav.toggleClass('show-nav');
  });

  // Модальное окно выбора городов
  var citySelect = $('.header-city');
  var cityModal = $('.modal-city');

  citySelect.click(function(){
    $('body').toggleClass('onmodal');
    cityModal.slideToggle(500);
  });

  cityModal.click(function(){
    $('body').toggleClass('onmodal');
    $(this).slideToggle(300);
  });

  var modalBlock = $('.modal-block');

  modalBlock.click(function(e){
    e.stopPropagation();
  });

  // Корзина
  var cartSizeOption = $('.cart-option_size');
  var cartSizeSelect = $('.cart-select_value');
  var cartSizeValue  = $('.cart-option_value');

  cartSizeOption.click(function(){
    $('.cart-select').slideToggle(150);
  });

  cartSizeSelect.click(function(){
    var getSize = $(this).data('size');

    cartSizeValue.attr('value', getSize);
  });

  var minus = $('.count_minus');
  var plus  = $('.count_plus');
  var count = $('.count-value');

  minus.click(function(){
    var currentCount = count.val();
    var calcCountMinus = Number(currentCount) - 1;
    
    if (currentCount <= 1) {
      return false;
    } else {
      count.attr('value', calcCountMinus);
    }
  });

  plus.click(function(){
    var currentCount = count.val();
    var calcCountPlus = Number(currentCount) + 1;
    count.attr('value', calcCountPlus);
  });

  var brandAnchor = $('.brand-anchor');
  var brandBlock = $('.brand-block');
  

  brandAnchor.click(function(){
    var currentLetter = $(this).data('letter');

    brandBlock.each(function(){
      var currentBrandLetter = $(this).data('brand-letter');

      if ( currentBrandLetter == currentLetter ) {
        brandBlock.removeClass('letter-show');
        $(this).toggleClass('letter-show');
      }
    });
  });

  $('.sidepanel-sub').click(function(){
    var sub = $(this).find('.sidepanel-submenu');

    sub.stop();
    sub.slideToggle(300);
    $(this).toggleClass('show-sub');
  });

});