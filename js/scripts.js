$(document).ready(function(){
	$('a[href*="#"]:not([href="#"])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html, body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }

	    }

	  });
	$('#nav-icon4').click(function(){
			$(this).toggleClass('open');
		});
	$(".fa-bars").on("click", function(){
		// console.log('fuckyou');
		$(".dropdown").toggle();
		$('.borderWhite').toggle();
		$(".fa-bars").toggleClass('fa-borderss');
		$(".headerMenu a").on("click", function(){
		// console.log('fuckyou');
		$(".headerMenu").hide();

		$("hamburger").hover(function() {
		    $(this).css("cursor", "pointer");
		}, function() {
		    $(this).css("", "");
		});

	});	
		
	});
	$(".headerMenu a").on("click", function(){
	
			$('#nav-icon4').toggleClass('open');
		setTimeout(function() {
			$(".fa-bars").removeClass('fa-borderss');
			// $(".fa-bars").addClass('hamburger');

			
		});	
		setTimeout(function(){
			$(".skillsHead img").toggleClass('spin');
			$(".aboutHead img").toggleClass('spin');
			$(".portfolioHead img").toggleClass('spin');
			$(".contactHead img").toggleClass('spin');


		}, 1000);

	});	

	$(".aboutHead").on("click", function(){
			$("body").toggleClass('bodyBlack');
			// $(".fa-bars").addClass('hamburger');
		});
			



});