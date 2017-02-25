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
		event.preventDefault();
			$('body, #dropdownn').removeClass('bodyYellow' , 'bodyGreen' , 'bodyRed'  , 'bodyAqua' , 'bodyWhite');
			$("h1, h2, h3, p, a").removeClass('bodyAquaText' , 'bodyWhiteText' , 'bodyRedText' , 'bodyGreenText' , 'bodyYellowText');
			$('#dropdownn').removeClass('bodyAquaDrop' , 'bodyWhiteDrop' , 'bodyGreenDrop' , 'bodyRedDrop' , 'bodyYellowDrop');
			$('#dropdownn').toggleClass('bodyBlackDrop');
			$("body, #dropdownn").toggleClass('bodyBlack');
			// $("h1, h2, h3, p, a").toggleClass('bodyBlackText');
		});
	$(".waveRight img").on("click", function(){
		event.preventDefault();
			$('body, #dropdownn').removeClass('bodyYellow' , 'bodyGreen' , 'bodyRed'  , 'bodyBlack' , 'bodyAqua');
			$("h1, h2, h3, p, a").removeClass('bodyBlackText' , 'bodyAquaText' , 'bodyRedText' , 'bodyGreenText' , 'bodyYellowText');
			$('#dropdownn').removeClass('bodyBlackDrop' , 'bodyAquaDrop' , 'bodyGreenDrop' , 'bodyRedDrop' , 'bodyYellowDrop');
			$('#dropdownn').toggleClass('bodyWhiteDrop');
			$("body, #dropdownn").toggleClass('bodyWhite');
			$("h1, h2, h3, p, a").toggleClass('bodyWhiteText');
		});

	$(".aboutHead img").on("click", function(){
		event.preventDefault();
			$('body, #dropdownn').removeClass('bodyYellow' , 'bodyGreen' , 'bodyAqua'  , 'bodyBlack' , 'bodyWhite');
			$("h1, h2, h3, p, a").removeClass('bodyBlackText' , 'bodyWhiteText' , 'bodyAquaText' , 'bodyGreenText' , 'bodyYellowText');
			$('#dropdownn').removeClass('bodyBlackDrop' , 'bodyWhiteDrop' , 'bodyGreenDrop' , 'bodyAquaDrop' , 'bodyYellowDrop');
			$('#dropdownn').toggleClass('bodyRedDrop');
			$("body, #dropdownn").toggleClass('bodyRed');
			$("h1, h2, h3, p, a").toggleClass('bodyRedText');
		});

	$(".portfolioHead img").on("click", function(){
		event.preventDefault();
			
			
			$('#dropdownn').removeClass('bodyBlackDrop' , 'bodyWhiteDrop' , 'bodyAquaDrop' , 'bodyRedDrop' , 'bodyYellowDrop');

			$('#dropdownn').toggleClass('bodyGreenDrop');
			
			$('body, #dropdownn').removeClass('bodyYellow' , 'bodyAqua' , 'bodyRed'  , 'bodyBlack' , 'bodyWhite');

			$("body, #dropdownn").toggleClass('bodyGreen');

			$("h1, h2, h3, p, a").removeClass('bodyBlackText' , 'bodyWhiteText' , 'bodyRedText' , 'bodyAquaText' , 'bodyYellowText');

			$("h1, h2, h3, p, a").toggleClass('bodyGreenText');
			// $('.dropdown').css('background: #A5FFD6');

		});
	$(".skillsHead img").on("click", function(){
	event.preventDefault();			
			$('#dropdownn').removeClass('bodyBlackDrop' , 'bodyWhiteDrop' , 'bodyGreenDrop' , 'bodyRedDrop' , 'bodyAquaDrop');
			$('#dropdownn').addClass('bodyYellowDrop');
			$('body, #dropdownn').removeClass('bodyAqua' , 'bodyGreen' , 'bodyRed'  , 'bodyBlack' , 'bodyWhite');
			$("body, #dropdownn").addClass('bodyYellow');
			$("h1, h2, h3, p, a").removeClass('bodyAquaText', 'bodyBlackText' , 'bodyWhiteText' , 'bodyRedText' , 'bodyGreenText');
			$("h1, h2, h3, p, a").addClass('bodyYellowText');
			// $('.dropdown').css('background: #A5FFD6');

		});
	$(".contactHead img").on("click", function(){	
		event.preventDefault();
			$('#dropdownn').removeClass('bodyBlackDrop' , 'bodyWhiteDrop' , 'bodyGreenDrop' , 'bodyRedDrop' , 'bodyYellowDrop');
			$('#dropdownn').addClass('bodyAquaDrop');
			$('body, #dropdownn').removeClass('bodyYellow' , 'bodyGreen' , 'bodyRed'  , 'bodyBlack' , 'bodyWhite');
			$("body, #dropdownn").addClass('bodyAqua');
			$("h1, h2, h3, p, a").removeClass('bodyBlackText' , 'bodyWhiteText' , 'bodyRedText' , 'bodyGreenText' , 'bodyYellowText');
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