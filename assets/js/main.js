(function ($) {
    "use strict";

    /*===============================
    =         Wow Active            =
    ================================*/

    new WOW().init();

    /*=============================================
    =            search overlay active            =
    =============================================*/
    
    $("#modal-overlay-trigger").on('click', function(){
        $("#modal-overlay").addClass("active");
    });
    
    $("#modal-close-trigger").on('click', function(){
        $("#modal-overlay").removeClass("active");
    });
    
    
    $("#modal-overlay-trigger").on('click', function(){
        $("#bg-images").addClass("active");
    });
    
    $("#modal-close-trigger").on('click', function(){
        $("#bg-images").removeClass("active");
    });
    
    
    
    /*======================================
    =       Countdown Activation          =     
    ======================================*/
	$('[data-countdown]').each(function () {
		var $this = $(this),
			finalDate = $(this).data('countdown');
		$this.countdown(finalDate, function (event) {
			$this.html(event.strftime('<div class="single-countdown"><span class="single-countdown__time">%D</span><span class="single-countdown__text">Days</span></div><div class="single-countdown"><span class="single-countdown__time">%H</span><span class="single-countdown__text">Hours</span></div><div class="single-countdown"><span class="single-countdown__time">%M</span><span class="single-countdown__text">Mints</span></div><div class="single-countdown"><span class="single-countdown__time">%S</span><span class="single-countdown__text">Secs</span></div>'));
		});
	});
    

    

})(jQuery);
