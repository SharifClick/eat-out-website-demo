$(document).ready(function (){
	$(window).scroll(function () {
		if ($(this).scrollTop() == 0) {
			$('.nav-inner').css('transform', 'translate3d(0,-20vh,0)');
			$('.back-to-top').fadeOut();
		} else {
			$('.nav-inner').css('transform', 'translate3d(0,0,0)');
			$('.back-to-top').fadeIn();
		}
	});

	$('#menu-btn, #menu-btn-two, #close-btn').click(function(){
		$('.nav-bar').toggleClass('nav-bar-enter');
		$('.main_wrapper').toggleClass('bg-behaviour-on');
		$('.main-menu').toggleClass('on');
		if ($('#menu-btn').hasClass('fa-bars')) {
				$('#menu-btn').removeClass('fa-bars').addClass('fa-times');
			} else {
				$('#menu-btn').removeClass('fa-times').addClass('fa-bars');
			}
	});

	$('.main-menu').click(function(){
		$(this).find('.sub-menu').slideToggle('fast');
	});

	$('.back-to-top').click(function(){
		$('html, body').animate({scrollTop:0}, 500);
	});

	
});

