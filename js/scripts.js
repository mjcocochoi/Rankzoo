/***************** Hover States ******************/

$('.btn-download').hover(
    function(){ $(this).removeClass('fadeIn delay-1s') }
)
/***************** Waypoints ******************/
$(document).ready(function() {
	$('.wp1').waypoint(function() {
        $('.wp1').addClass('animated fadeInRight');
    }, {
		offset: '75%'
	});
    $('.wp2').waypoint(function() {
		$('.wp2').addClass('animated fadeInLeft');
	}, {
		offset: '85%'
	});
    $('.wp3').waypoint(function() {
		$('.wp3').addClass('animated fadeInUp');
	}, {
		offset: '85%'
	});
		$('.wp4').waypoint(function() {
		$('.wp4').addClass('animated fadeInDown');
	}, {
		offset: '85%'
	});
    $('.wp5').waypoint(function() {
		$('.wp5').addClass('animated fadeInUp');
	}, {
		offset: '85%'
	});
    $('.wp6').waypoint(function() {
		$('.wp6').addClass('animated fadeIn');
	}, {
		offset: '85%'
	});
    $('.wp7').waypoint(function() {
		$('.wp7').addClass('animated fadeIn');
	}, {
		offset: '85%'
	});
});
/***************** Smooth Scrolling ******************/

$(function() {

	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 2000);
				return false;
			}
		}
	});

});
