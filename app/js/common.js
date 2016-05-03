 $(function() {
// 
// var hidden_elements = '.slider__description, .slider__link, .slider__img';
//
 	// $('.zoom-out').on('click', function(){
 	// 	if ($(hidden_elements).hasClass('hidden')) {
 	// 		$(hidden_elements).removeClass('hidden');
 	// 	} else $(hidden_elements).addClass('hidden');
 	// 	$(hidden_elements).fadeToggle(100);
 	// 	$('.slider--full').addClass('hidden');
 	// 	$('.slider--mini').removeClass('hidden');

 	// });
 	// $('.slider--mini').on('click', function(){
 	// 	$('.slider--full').removeClass('hidden');
 	// 	$('.slider--mini').addClass('hidden');
 	// }) 
	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
// Slick слайдер
	$('.single-item').slick({
		// arrows: false,
		dots: true,

	});	

// -----------------------------------------
// TODO: remove old code
// получение значения текущего слайда 
	// var slick_value = $(this).parent().attr("data-slick-index");
	// $('.new-slider-nav').slick('slickFilter', '[data-slick-index =' + slick_value + ']');
	$('.new-slider-full').slick({
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.new-slider-nav'
	});	
	$('.new-slider-nav').slick({
		asNavFor: '.new-slider-full',
		arrows: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		focusOnSelect: true,
		// centerMode: true
		
	});
// Минин версия слайда:
$('.zoom-out').on('click', function() {
	// переключает на отображение мини версии слайда
	$('.new-slide--full').addClass('hidden');
	$('.new-slide--mini').removeClass('hidden');
	// уменьшает навигацию по слайдам до 1
	$('.new-slider-nav').slick('slickSetOption', 'slidesToShow', '1', true);
});
// Полная версия слайда:
$('.new-slide--mini, .new-slider-nav .new-slide').on('click', function() {
	// переключает на отображение полной версии слайда
	$('.new-slide--full').removeClass('hidden');
	$('.new-slide--mini').addClass('hidden');
	// возвращает навигацию до 5 слайдов
	$('.new-slider-nav').slick('slickSetOption', 'slidesToShow', '5', true);
});


// ---------------------------------------------
	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});
