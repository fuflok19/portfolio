;(function($) {

	$(document).ready(function(){
		$('.products a').click(function(){
			$('.header__big__menu').toggle();
			$(".big_menu").hide();
		});

		$('.header__big__menu').hover(function() {
			var hash = $(this).attr('class');
			$(hash).fadeToggle();
		});

		$('.hamburger').click(function(e) {
			e.preventDefault();
			$('.header__nav__mobile').slideToggle();
		});

		function validateEmail(mail) {
	        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	        return re.test(mail);
	    }

		$(".js-form-contact input[type='submit']").click(function(){
			var mail = $("#mail").val();
			var check = $("#samsung_legal_checkbox").is(':checked');

			if(mail == '' || !validateEmail(mail)) {
				$(".mail_fail").slideDown();
			}
			else {
				$(".mail_fail").slideUp();
			}

			if(check) {
				$(".check_fail").fadeOut();
			}
			else {
				$(".check_fail").fadeIn();
			}

		});

		$(".js-form-contact").submit(function(e){
			e.preventDefault();
			$.ajax({
	            type: "POST",
	            url: "send.php",
	            data: $(this).serialize(),
	            success: function(msg)
	            {
	                if(msg == 'success'){
	                    $(".send__result").css('color','green').fadeIn().html('Wiadomość została wysłana');
			            $("#mail").val() = '';
	                return true;
	                } else {
	                    $(".send__result").css('color','red').fadeIn().html('Wypełnij poprawnie wszystkie pola');
	                }
	            }
	        });
		});

		//section brand 

		$(".section-brand").hover(function(e) {

			e.preventDefault();

  			$("div.menu-brand").slideToggle(function() {
    			$(this).addClass("active");
			});
		});

		// section menu 

		$(".header__big__menu li a").hover(function(){
			var cat = $(this).attr('class');
			$('.big_menu').hide();
			$('.big_menu.'+cat).show();
		});

		// polityka cookie sticky section 

		$( ".sticky-btns" ).click(function() {
  			$( ".sticky-section" ).slideUp();
		});

	});

})(jQuery);