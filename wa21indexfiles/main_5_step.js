$(document).ready(function () {
	var nextBtn = $('.btn-next');
	var currentStep = 1;
	var isMobile = /Android|webOS|iPhone|iPad|iPod|pocket|psp|kindle|avantgo|blazer|midori|Tablet|Palm|maemo|plucker|phone|BlackBerry|symbian|IEMobile|mobile|ZuneWP7|Windows Phone|Opera Mini/i.test(navigator.userAgent);
	var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
	var isAndroid = /Android/i.test(navigator.userAgent);

	if($('.unsubscribe').length) {
		$('body').addClass('unsubscribe_unable');
	}

	if(isMobile) {
		$('body').addClass('isMobile');
	}
	if(isIOS) {
		$('body').addClass('iOs');
	}
	else if(isAndroid) {
		$('body').addClass('isAndroid');
	}

	function show_next(n) {
		$('#step' + currentStep).hide();
		var prevStep = currentStep;
		currentStep += n;

		$('#step' + currentStep).css("display", "flex").hide().fadeIn(500);
		$('body').removeClass('active-step-' + prevStep).addClass('active-step-' + currentStep);

		if(currentStep) {
			setTimeout(function(){
				$('.roulette-frame').addClass('roulette-animate');

				setTimeout(function(){
					$('.final-step').addClass('is--visible');
				}, 2400);
			}, 400);
		}
	};

	show_next(0);

	nextBtn.on('click', function(e) {
		e.preventDefault();
		show_next(1);

		// Set Preload Image
		var nextPreload = currentStep + 1;
		$('.preload-img'+ currentStep).next().addClass('preload-img'+ nextPreload);
	});

	// Info window height
	contentHeight();
});

function contentHeight() {
	var windowHeight = $(window).innerHeight();

	$('body').attr('data-window-height', windowHeight);
}
$(window).on('resize', function(){
	contentHeight();
});

window.gsl = {
            clickmedia:function (){
                location.href ="https://harit.trackfast.site/";
            },
};

