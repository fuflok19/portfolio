$( document ).ready(function() {

    $('.fullpage').fullpage({
    	navigation: true,
    	navigationPosition: 'left',
    	responsiveWidth: 1200,
    	fixedElements: '.sticky-menu, .menu, .show'
    });


    $('.sticky-menu #nav-icon1').click(function(){
		$(this).toggleClass('open');

			$( ".menu" ).toggleClass( "show" );

	});

	$('.start-element').hover(function(){

			$(this).fadeOut(3000);

	});

});