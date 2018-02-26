$( document ).ready(function() {

    $('.fullpage').fullpage();

    $('.sticky-menu #nav-icon1').click(function(){
		$(this).toggleClass('open');
		$( ".menu" ).toggleClass( "show" );
	});

});