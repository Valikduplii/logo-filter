$(document).ready(function () {
      $(".small-img").click(function() {
         $(".big-img").attr("src", $(this).attr("src"));
      });
	$('.content-leftside-catalog__icon').click(function(event) {
		$(this).toggleClass('active');
		$('.content-leftside-catalog-block').slideToggle(200,function() {
			$(this).toggleClass('active');
			leftside();
		});
   });
   var swiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      slidesPerColumn: 2,
      spaceBetween: 10,
      simulateTouch:false,
      grabCursor: false,
      swipe: false,
      init: true,
      slidesPerColumnFill: "row",
      breakpoints: {

         229: {
            slidesPerView: 1,
            slidesPerColumn: 2,
         },
         699: {
            slidesPerView: 1,
            slidesPerColumn: 2,
         },
         700: {
            slidesPerView: 2,
            slidesPerColumn: 2,
         },
         769: {
            slidesPerView: 1,
            slidesPerColumn: 2,
         },
         971: {
            slidesPerView: 2,
            slidesPerColumn: 2,
         },
         1171: {
            slidesPerView: 3,
            slidesPerColumn: 2,
         }
      },
});
$('.header__burger').click(function (event) {
   $('.header__burger, .header').toggleClass('active');
   $('body').toggleClass('lock');
   $('.content').toggleClass('active');
});
$('.mobile-arrow').click(function (event) {
   $(this).parent().find('.mobile-sub-menu__list').toggleClass('active');
   $(this).parent().find('.mobile-arrow').toggleClass('active');
});
$('.search__left').click(function (event) {
   $('.search__text').toggleClass('active');
   $('.search__arrow').toggleClass('active');
   $('.search__list').toggleClass('active');
   $('search__list').slideDown();
});
$('.header__burger2').click(function (event) {
   $('.menu').toggleClass('close');
   $('.header__burger2').toggleClass('active');
   $('.main').toggleClass('active');
});
$('.slider-content-img').click(function (event) {
   $(this).parents('.slider-conten-item').find('.slider-content__text').addClass('active');
   $(this).parents('.slider-conten-item').find('.slider-content__price').addClass('active');
   $(this).parents('.slider-conten-item').find('.slider-info__hover').addClass('active');

   $(this).parents('.slider-conten-item.active').find('.slider-content__text').removeClass('active');
   $(this).parents('.slider-conten-item.active').find('.slider-content__price').removeClass('active');
   $(this).parents('.slider-conten-item.active').find('.slider-info__hover').removeClass('active');
});
$(".slider-info__hover").click(function (event) {
   $(".slider-info__hover").parents('.slider-conten-item').find('.slider-content__text').removeClass('active');
   $(".slider-info__hover").parents('.slider-conten-item').find('.slider-content__price').removeClass('active');
   $('.slider-info__hover').removeClass('active');
})
$('.review__read-all').click(function (evene) {
   $(this).parents('.review__text-body').find('.review__text').toggleClass('active');
})
$('.section-filter__title._spoller').click( function (event) {
   $(this).parents('._spoller').find('.section-filter__title._spoller').toggleClass('_active');
   $(this).parents('._spoller').find('.section-filter__body').toggleClass('_slide');
});
$('.view-catalog__item_grid').click( function (event) {
   $('.view-catalog__item_grid').addClass('active');
   $('.view-catalog__item_list').removeClass('active');
   $('.swiper-container.active').removeClass('active');
   $('.slider-info__main.active').removeClass('active');
   $('.slider-conten-item.active').removeClass('active');
   $('.swiper-slide.active').removeClass('active');
   $('.swiper-wrapper.active').removeClass('active');
   $('.slider-content-img.list').removeClass('list');
   $('.slider-content__text.list').removeClass('list');
   $('.slider-content__price.list').removeClass('list');
   $('.content-style__list').css('display', 'none');
   $('.slider-content__basket.list').removeClass('list');
   $('.swiper-slide-price.list').removeClass('list');
   $('.slider-content__basket_list.list').removeClass('list');

});


$('.view-catalog__item_list').click( function (event) {
   $('.view-catalog__item_list').addClass('active');
   $('.view-catalog__item_grid').removeClass('active');
   $('.swiper-container').addClass('active');
   $('.slider-info__main').addClass('active');
   $('.slider-conten-item').addClass('active');
   $('.swiper-slide').addClass('active');
   $('.swiper-wrapper').addClass('active');
   $('.slider-content-img').addClass('list');
   $('.slider-content__text').addClass('list');
   $('.slider-content__price ').addClass('list');
   $('.content-style__list').css('display', 'block');
   $('.slider-content__basket').addClass('list');
   $('.swiper-slide-price').addClass('list');
   $('.slider-content__basket_list').addClass('list');
   $('.slider-content__text').removeClass('active');
   $('.slider-content__price').removeClass('active');
   $('.slider-info__hover.active').removeClass('active');

   
   
   
});

$('.view-catalog__item_grid').click( function (event) {

});
   /*

   */



});

