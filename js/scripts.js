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
	$(".waveLeft img").on("click", function(){
		$('body, #dropdownn, h1, h2, h3, p, a').removeClass();
		$('#dropdownn').addClass('headerMenu headerHeaderMenu dropdown');
		$('#dropdownn').addClass('bodyBlackDrop');
		$(".home, #dropdownn").addClass('bodyBlack');
		$("h1, h2, h3, p, a").addClass('bodyBlackText');

			
			
		});
	$(".waveRight img").on("click", function(){
		$('body, #dropdownn, h1, h2, h3, p, a').removeClass();
		$('#dropdownn').addClass('headerMenu headerHeaderMenu dropdown');
			$('#dropdownn').addClass('bodyWhiteDrop');
			$("body, #dropdownn").addClass('bodyWhite');
			$("h1, h2, h3, p, a").addClass('bodyWhiteText');
		});

	$(".aboutHead img").on("click", function(){
		$('body, #dropdownn, h1, h2, h3, p, a').removeClass();
		$('#dropdownn').addClass('headerMenu headerHeaderMenu dropdown');
			$('#dropdownn').addClass('bodyRedDrop');
			$("body, #dropdownn").addClass('bodyRed');
			$("h1, h2, h3, p, a").addClass('bodyRedText');
		});

	$(".portfolioHead img").on("click", function(){
			$('body, #dropdownn, h1, h2, h3, p, a').removeClass();
			$('#dropdownn').addClass('headerMenu headerHeaderMenu dropdown');	

			$('#dropdownn').addClass('bodyGreenDrop');

			$("body, #dropdownn").addClass('bodyGreen');

			$("h1, h2, h3, p, a").addClass('bodyGreenText');
			// $('.dropdown').css('background: #A5FFD6');

		});
	$(".skillsHead img").on("click", function(){	
			$('body, #dropdownn, h1, h2, h3, p, a').removeClass();
		$('#dropdownn').addClass('headerMenu headerHeaderMenu dropdown');	
			$('#dropdownn').addClass('bodyYellowDrop');
			$("body, #dropdownn").addClass('bodyYellow');
			$("h1, h2, h3, p, a").addClass('bodyYellowText');
			// $('.dropdown').css('background: #A5FFD6');

		});
	$(".contactHead img").on("click", function(){	
			$('body, #dropdownn, h1, h2, h3, p, a').removeClass();
			$('#dropdownn').addClass('headerMenu headerHeaderMenu dropdown');
			$('#dropdownn').addClass('bodyAquaDrop');
			$("body, #dropdownn").addClass('bodyAqua');
			$("h1, h2, h3, p, a").addClass('bodyAquaText');
			// $('.dropdown').css('background: #A5FFD6');

		});

	$('.fuckyou').click(function(){
			$('#nav-icon4').toggleClass('open');
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