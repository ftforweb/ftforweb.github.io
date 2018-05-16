$(document).ready(function(){
  $('.block-2 .owl-carousel').owlCarousel({
    items : 1,
    navigation : true,
    pagination: false,
    nav:true,
    loop:true,
    navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>"
        ],
  });

  $('.block-7 .owl-carousel').owlCarousel({
    items : 5,
    navigation : true,
    pagination: false,
    nav:true,
    loop:true,
    responsiveClass:true,
    responsive:{
        320:{
            items:1,
            nav:true,
            loop:true
        },
        768:{
            items:3,
            nav:true,
            loop:true
        },
        992:{
            items:5,
            nav:true,
            loop:true
        }
    },
    center: true,
    navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>"
        ],
  });

  $('.filtres-toogle a').on('click', function(e){
    e.preventDefault();
    if($(this).parents('.filtres-item').hasClass('open')) {
      $(this).parents('.filtres-item').removeClass('open');
      $(this).parents('.filtres-item').animate({'height': 180}, 400);
      $(this).css('transform','rotate(0deg)');
      console.log('if');
    }
    else {
      var fullHeight = parseInt($(this).parents('.filtres-item').find('ul').outerHeight()) + 
               parseInt($(this).parents('.filtres-item').find('.filtres-title').outerHeight()) + 100; //70 высота плашки + 30px запас
               console.log($(this).parents('.filtres-item').find('.filtres-title').outerHeight());
      $(this).parents('.filtres-item').addClass('open');
      $(this).parents('.filtres-item').animate({'height': fullHeight}, 400);
      $(this).css('transform','rotate(180deg)');
      console.log('else');
    }
  });

  $('.show-filter').on('click', function () {
    $('body').addClass('overflow-body');
    $('body').css({ 'padding-right': '17px' });
    $('.overlay').addClass('active');
    setTimeout(function () {
      $('.filtres').addClass('active');
    }, 50);
  });

  $('.filtres .close').on('click', function (event) {
    event.preventDefault();
    setTimeout(function () {
      $('.overlay').removeClass('active');
      $('body').css({ 'padding-right': '0px' });
      $('body').removeClass('overflow-body');
    }, 250);
    $('.filtres').removeClass('active');
  });

  $('.btn-plus').on('click', function(){
    var cnt = parseInt($(this).siblings('input').attr('value'));
    cnt++;
    $(this).siblings('input').attr('value',cnt+' шт');
    console.log('click' + cnt);
  });

  $('.btn-minus').on('click', function(){
    var cnt = parseInt($(this).siblings('input').attr('value'));
    if(cnt == 1) {
      return false;
    } else {
      cnt--;
    $(this).siblings('input').attr('value',cnt+' шт');
    console.log('click' + cnt);
    }
  });
});
