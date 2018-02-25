$( document ).ready(function() {

    $('.fullpage').fullpage();

    $('.menu #nav-icon1').click(function(){
		$(this).toggleClass('open');
		$( ".show" ).slideToggle( "slow" );
	});

});