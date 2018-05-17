 $(document).ready(function() {
	// var owlMain = $('[data-item="corusel"]');
	// owlMain.owlCarousel({
	// 	loop:true,
	// 	margin:0,
	// 	nav:true,
	// 	dots:true,
	// 	items:1,
	// 	autoplay:true,
	// 	navText: [
	// 	  "<i class='my-arrow-left'></i>",
	// 	  "<i class='my-arrow-right'></i>"
 //      ],
	// 	dots: false
	// });
// jQuery(function() {
// 	/* Init inview */
//     $('.anim-el').on('inview', function(event, isVisible) {
// 		if (isVisible) {
// 			$(this).addClass('is-v');
// 		} else {
// 			$(this).removeClass('is-v');
// 		}
// 	});
	$(".owl-carousel").owlCarousel({
		items : 1,
		navigation : true,
		pagination: false,
		itemsDesktop : [1000,1],
		itemsDesktopSmall : [900,1],
		itemsTablet: [600,1],
		nav:true,
		navText: [
		  "<i class='my-arrow-left'></i>",
		  "<i class='my-arrow-right'></i>"
      	],
	});
 send();
 	var form = $('[data-form="send"]');
	$(form).validator().on('submit', function (e) {
		if ($(this).hasClass('disabled')) {
			// handle the invalid form...
			e.preventDefault();
		} else {
			// everything looks good!
			send();
		}
	});
 // 	var myMap;
	// ymaps.ready(init);
	// function init () {
	// 	myMap = new ymaps.Map('map', {
	// 		center: [55.7290811, 37.5705167],
	// 		zoom: 17,
	// 		controls: []
	// 	}),
	// 	myMap.behaviors
	// 		.disable(['rightMouseButtonMagnifier' , 'scrollZoom'])
	// 		myPlacemark = new ymaps.Placemark([55.7290811, 37.5705167], {
	// 			hintContent: [
	// 			''
	// 		].join(''),
	// 			balloonContentBody: [
	// 			''// '<div class=\'map_holder\'><div class=\'map_header\'><p>Контакты</p><\/div><div class=\'map_address\'><div class=\'icon\'><\/div><p>г. Москва, м. Митино</p><\/div><div class=\'map_phone\'><div class=\'icon\'><\/div><p><strong>+ 7 965-242-97-42</strong></p><p><strong>+ 7 926-113-58-17</strong></p><\/div><div class=\'map_date\'><div class=\'icon\'><\/div><p>Пн-Пт с 09:00 до 18:00</p><\/div><div class=\'map_mail\'><div class=\'icon\'><\/div><p><a href="mailto:Topsales15@mail.ru">Topsales15@mail.ru</a></p><\/div><\/div>'
	// 		].join('')
	// 		}, {
	// 			iconLayout: 'default#image',
	// 			iconImageHref: 'assets/img/pin.png',
	// 			iconImageSize: [46, 76],
	// 			iconImageOffset: [-23, -70]
	// 		});
	// 	myMap.geoObjects.add(myPlacemark);
	// }
	$('.tur1').mouseover(function(){
 		$('.tur1').css({
		'opacity':'0.5'
		 });
 		$('.tur1 button').css({
 			'visibility':'visible'
 		});
 	});
 	$('.tur1').mouseleave(function(){
 		$('.tur1').css({
		'opacity':'1'
		 });
 		$('.tur1 button').css({
 			'visibility':'hidden'
 		});
 	});
 	$('.tur2').mouseover(function(){
 		$('.tur2').css({
		'opacity':'0.5'
		 });
 		$('.tur2 button').css({
 			'visibility':'visible'
 		});
 	});
 	$('.tur2').mouseleave(function(){
 		$('.tur2').css({
		'opacity':'1'
		 });
 		$('.tur2 button').css({
 			'visibility':'hidden'
 		});
 	});
 	$('.tur3').mouseover(function(){
 		$('.tur3').css({
		'opacity':'0.5'
		 });
 		$('.tur3 button').css({
 			'visibility':'visible'
 		});
 	});
 	$('.tur3').mouseleave(function(){
 		$('.tur3').css({
		'opacity':'1'
		 });
 		$('.tur3 button').css({
 			'visibility':'hidden'
 		});
 	});
 	$('.tur4').mouseover(function(){
 		$('.tur4').css({
		'opacity':'0.5'
		 });
 		$('.tur4 button').css({
 			'visibility':'visible'
 		});
 	});
 	$('.tur4').mouseleave(function(){
 		$('.tur4').css({
		'opacity':'1'
		 });
 		$('.tur4 button').css({
 			'visibility':'hidden'
 		});
 	});
 	$('.tur5').mouseover(function(){
 		$('.tur5').css({
		'opacity':'0.5'
		 });
 		$('.tur5 button').css({
 			'visibility':'visible'
 		});
 	});
 	$('.tur5').mouseleave(function(){
 		$('.tur5').css({
		'opacity':'1'
		 });
 		$('.tur5 button').css({
 			'visibility':'hidden'
 		});
 	});
 	$('.tur6').mouseover(function(){
 		$('.tur6').css({
		'opacity':'0.5'
		 });
 		$('.tur6 button').css({
 			'visibility':'visible'
 		});
 	});
 	$('.tur6').mouseleave(function(){
 		$('.tur6').css({
		'opacity':'1'
		 });
 		$('.tur6 button').css({
 			'visibility':'hidden'
 		});
 	});
 	$('.item_h1').mouseover(function(){
 		$('.item_h1 img').attr('src','assets/img/item1_h.png');
 	});
 	$('.item_h1').mouseleave(function(){
 		$('.item_h1 img').attr('src','assets/img/item1.png');
 	});
 	$('.item_h2').mouseover(function(){
 		$('.item_h2 img').attr('src','assets/img/item2_h.png');
 	});
 	$('.item_h2').mouseleave(function(){
 		$('.item_h2 img').attr('src','assets/img/item2.png');
 	});
 	$('.item_h3').mouseover(function(){
 		$('.item_h3 img').attr('src','assets/img/item3_h.png');
 	});
 	$('.item_h3').mouseleave(function(){
 		$('.item_h3 img').attr('src','assets/img/item3.png');
 	});
 	$('.item_h4').mouseover(function(){
 		$('.item_h4 img').attr('src','assets/img/item4_h.png');
 	});
 	$('.item_h4').mouseleave(function(){
 		$('.item_h4 img').attr('src','assets/img/item4.png');
 	});
 });
 function send(){
	var form = $('[data-form="send"]');
	form.ajaxForm(function() {
		//$('#dog-form').modal('hide');
		// $('#call-modal3').on('hidden.bs.modal', function (e) {
		// 	$('#thx2').modal('show');
		// });
		// //$('#call-modal').modal('hide');
		// $('#call-modal').on('hidden.bs.modal', function (e) {
		// 	$('#thx').modal('show');
		// });
		// //$('#call-modal2').modal('hide');
		// $('#call-modal2').on('hidden.bs.modal', function (e) {
		// 	$('#thx').modal('show');
		// });
		$('#call-modal').modal('hide');
		$('#call-modal2').modal('hide');
		$('#call-modal3').modal('hide');
		$('#thx').modal('show');
		$(form).resetForm();
	});
}


