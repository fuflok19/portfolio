$( document ).ready(function() {
    $('#fullpage').fullpage();

    // $("a[href^='#']").on('click', function(e) {

    //    // prevent default anchor click behavior
    //    e.preventDefault();

    //    // animate
    //    $('html, body').animate({
    //        scrollTop: $(this.hash).offset().top 
    //      }, 500, function(){
   
    //        // when done, add hash to url
    //        // (default click behaviour)
    //        window.location.hash = this.hash;
    //      });

    // });
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
});