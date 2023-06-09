// Using here sclick slider
$(document).ready(function(){
	$('.carousel__inner').slick({
		speed: 1200,
		prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
		responsive: [ {
			breakpoint: 992,
			settings: {
				dots: true,
				arrows: false
			}
		}]
		});
});

// Using here Tiny slider

// const slider = tns({
//     container: '.carousel__inner',
//     items: 1,
//     slideBy: 'page',
//     autoplay: false
// });
// 	// controlsText: [
// 	// 	'<img src="icons/left.svg"></img>',
// 	// 	'<img src="icons/right.svg"></img>'
// 	// ]

$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
	$(this)
	.addClass('catalog_/*  */_tab_active').siblings().removeClass('catalog__tab_active')
	.closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
});

function toggleSlide(item) {
	$(item).each(function(i) {
		$(this).on('click', function(e) {
			e.preventDefault();
			$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
			$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
		})
	});
};

toggleSlide('.catalog-item__link');
toggleSlide('.catalog-item__back');

