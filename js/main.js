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

  var aboutSlider = $('.about-slider');

  aboutSlider.owlCarousel({
    items: 2,
    margin: 30,
    nav: true,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      475: {
        items: 2
      }
    }
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


  var sync1 = $(".product-photos");
  var sync2 = $(".product-thumbs");
  var slidesPerPage = 4;
  var syncedSecondary = true;

  sync1.owlCarousel({
    items : 1.35,
    center: true,
    stagePadding: 30,
    slideSpeed : 2000,
    smartSpeed: 700,
    nav: false,
    autoplay: true,
    dots: true,
    loop: true,
    responsiveRefreshRate: 200,
    responsive: {
      0: {
        items: 1,
        stagePadding: 0
      },
      600: {
        items : 1.35
      }
    }
  }).on('changed.owl.carousel', syncPosition);

  sync2
    .on('initialized.owl.carousel', function () {
      sync2.find(".owl-item").eq(0).addClass("current");
    })
    .owlCarousel({
    items : slidesPerPage,
    dots: false,
    nav: true,
    smartSpeed: 700,
    slideSpeed : 700,
    margin: 30,
    slideBy: slidesPerPage,
    responsiveRefreshRate : 100
  }).on('changed.owl.carousel', syncPosition2);

  function syncPosition(el) {
    var count = el.item.count-1;
    var current = Math.round(el.item.index - (el.item.count/2) - .5);
    
    if(current < 0) {
      current = count;
    }
    if(current > count) {
      current = 0;
    }
    
    sync2
      .find(".owl-item")
      .removeClass("current")
      .eq(current)
      .addClass("current");
    var onscreen = sync2.find('.owl-item.active').length - 1;
    var start = sync2.find('.owl-item.active').first().index();
    var end = sync2.find('.owl-item.active').last().index();
    
    if (current > end) {
      sync2.data('owl.carousel').to(current, 100, true);
    }
    if (current < start) {
      sync2.data('owl.carousel').to(current - onscreen, 100, true);
    }
  }
  
  function syncPosition2(el) {
    if(syncedSecondary) {
      var number = el.item.index;
      sync1.data('owl.carousel').to(number, 100, true);
    }
  }
  
  sync2.on("click", ".owl-item", function(e){
    e.preventDefault();
    var number = $(this).index();
    sync1.data('owl.carousel').to(number, 300, true);
  });

});