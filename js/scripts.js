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
	$(".waveLeft").on("click", function(){
			$('#dropdownn').toggleClass('bodyBlackDrop');
			$("body, #dropdownn").toggleClass('bodyBlack');
			// $("h1, h2, h3, p, a").toggleClass('bodyBlackText');
		});
	$(".waveRight").on("click", function(){
			$('#dropdownn').toggleClass('bodyWhiteDrop');
			$("body, #dropdownn").toggleClass('bodyWhite');
			$("h1, h2, h3, p, a").toggleClass('bodyWhiteText');
		});

	$(".aboutHead").on("click", function(){
			$('#dropdownn').toggleClass('bodyRedDrop');
			$("body, #dropdownn").toggleClass('bodyRed');
			$("h1, h2, h3, p, a").toggleClass('bodyRedText');
		});

	$(".portfolioHead").on("click", function(){
			$('#dropdownn').toggleClass('bodyGreenDrop');
			$("body, #dropdownn").toggleClass('bodyGreen');
			$("h1, h2, h3, p, a").toggleClass('bodyGreenText');
			// $('.dropdown').css('background: #A5FFD6');

		});
	$(".skillsHead").on("click", function(){
			$('#dropdownn').toggleClass('bodyYellowDrop');
			$("body, #dropdownn").toggleClass('bodyYellow');
			$("h1, h2, h3, p, a").toggleClass('bodyYellowText');
			// $('.dropdown').css('background: #A5FFD6');

		});
	$(".contactHead").on("click", function(){
			$('#dropdownn').toggleClass('bodyAquaDrop');
			$("body, #dropdownn").toggleClass('bodyAqua');
			$("h1, h2, h3, p, a").toggleClass('bodyAquaText');
			// $('.dropdown').css('background: #A5FFD6');

		});

	$('#nav-icon4').click(function(){
			$(this).toggleClass('open');

		});
	$(".fa-bars").on("click", function(){
		$('.headerMenu').css('background', '');
		$(".dropdown").toggle();
		$('.borderWhite').toggle();
		// $(".fa-bars").toggleClass('fa-borderss');
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


			



});