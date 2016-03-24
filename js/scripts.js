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
	$(".fa-bars").on("click", function(){
		// console.log('fuckyou');
		$(".dropdown").toggle();
		$('.borderWhite').toggle();
		$(".fa-bars").toggleClass('fa-borderss');
		$(".headerMenu a").on("click", function(){
		// console.log('fuckyou');
		$(".headerMenu").hide();

		// $(".skillsHead img").removeClass('spin');
		// $(".skillsHead img").addClass('spin');
		// $(".aboutHead img").removeClass('spin');
		// $(".aboutHead img").addClass('spin');
		// $(".portfolioHead img").removeClass('spin');
		// $(".portfolioHead img").addClass('spin');
		// $(".contactHead img").removeClass('spin');
		// $(".contactHead img").addClass('spin');

	});	
		
	});
	$(".headerMenu a").on("click", function(){
		setTimeout(function() {
			$(".fa-bars").removeClass('fa-borderss');
			
		});	
		setTimeout(function(){
			$(".skillsHead img").toggleClass('spin');
			// $(".skillsHead img").addClass('spin');
			$(".aboutHead img").toggleClass('spin');
			// $(".aboutHead img").addClass('spin');
			$(".portfolioHead img").toggleClass('spin');
			// $(".portfolioHead img").addClass('spin');
			$(".contactHead img").toggleClass('spin');
			// $(".contactHead img").addClass('spin');

		}, 1000);

	});	


});