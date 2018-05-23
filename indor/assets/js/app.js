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
});
