(function($) {
  "use strict";

  $(document).ready(function() {

    //#から始まるIDをもつaタグをクリックしたとき
    $(document).on('click', 'a[href^="#"]', function() {
      smoothScroll(this);
    });

    //スクロールしたとき
    $(document).on('scroll', function() {
      scrollMenu(this);
    });

  });

  //スムーススクロール
  function smoothScroll(el) {
    var speed = 500;
    var href = $(el).attr('href');
    var target = $(href == '#' || href == '' ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({ scrollTop: position }, speed);
    return false;
  }


  //スクロールしたらメニューが出る
  function scrollMenu(el) {
    //mainposition までスクロールされたとき
    // var mainposition = $("#js-mainBlock").offset().top - 1;
    var mainposition = 100;
    if ($(el).scrollTop() > mainposition) {
      $('#js-footerBlock').addClass('fixed');
    } else {
      $('#js-footerBlock').removeClass('fixed');
    }
    return false;
  }







})(jQuery);