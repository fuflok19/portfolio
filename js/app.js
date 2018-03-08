$( document ).ready(function() {

    $('.fullpage').fullpage({
    	navigation: true,
    	navigationPosition: 'left'
    });

    $('.sticky-menu #nav-icon1').click(function(){
		$(this).toggleClass('open');
		$( ".menu" ).toggleClass( "show" );
	});

	$('.start-element').hover(function(){

			$(this).fadeOut(3000);

	});

	$('.download-cv').hover(function(){
		$('.download-cv a').slideToggle('slow').stop(true, true);
	});

});