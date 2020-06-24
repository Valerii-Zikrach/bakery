$(function () {
	$('.bread-line__slider').slick({
		dots: true,
		arrows: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 2000,
		slidesToShow: 4,
		slidesToScroll: 3,
		responsive: [{
				breakpoint: 850,
				settings: {
					arrows: false,
					slidesToShow: 4,
					slidesToScroll: 3
				}
			},
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					slidesToShow: 3,
					slidesToScroll: 3
				}
			},
			{
				breakpoint: 580,
				settings: {
					arrows: false,
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 350,
				settings: {
					arrows: false,
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	$('.header-btn').on('click', function () {
		$(this).toggleClass('active');
	});
	$('.header-btn').on('click', function () {
		$('.menu').slideToggle();
	});
	
	new WOW().init();
});