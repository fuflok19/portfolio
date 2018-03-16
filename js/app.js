$( document ).ready(function() {

    $('.fullpage').fullpage({
    	navigation: true,
    	navigationPosition: 'left',
    	responsiveWidth: 1200,
    	fixedElements: '.sticky-menu, .menu, .show',
    	verticalCentered: true
    });


    $('.sticky-menu #nav-icon1').click(function(){
		$(this).toggleClass('open');

			$( ".menu" ).toggleClass('show');

	});

	// $('.start-element').hover(function(){

	// 		$(this).fadeOut(3000);

	// });

	setTimeout(function(){
		$('.start-element').fadeOut(3000);
	}, 1000);

	$('.box-1').hover(function(){

			$('.box-1 img').toggleClass('anim');
			$('.box-1 figcaption').stop().slideToggle('slow');
			$('.box-1 .label').stop().fadeToggle(500);
			$('.left-text').toggleClass('anim-1');

	});

	$('.box-2').hover(function(){

			$('.box-2 img').toggleClass('anim');
			$('.box-2 figcaption').stop().slideToggle('slow');
			$('.box-2 .label').stop().fadeToggle(500);
			$('.right-text').toggleClass('anim-2');
	});

});