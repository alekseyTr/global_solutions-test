 $(function() {
// -----------------------------------------
// Модуль отображения слайдера
// -----------------------------------------
var first_enter = localStorage.first_enter;

	$('.slider').slick({
		asNavFor: '.slider-nav',
		arrows: false,
		swipe: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		speed: 300
	});	
	$('.slider-nav').slick({
		asNavFor: '.slider',
		arrows: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		focusOnSelect: true,
		// centerMode: true
		
	});
// Минин версия слайда:
$('.zoom-out').on('click', function() {
	
	// переключает на отображение мини версии слайда
	$('.slide--full').addClass('hidden');
	$('.slide--mini').removeClass('hidden');
	// уменьшает размер слайда
	$('.slider-nav').addClass('slide--single');
	// уменьшает навигацию по слайдам до 1
	$('.slider-nav').slick('slickSetOption', 'slidesToShow', '1', true);

});
// Полная версия слайда:
$('.slide--mini, .slider-nav .slide').on('click', function() {
	// переключает на отображение полной версии слайда
	$('.slide--full').removeClass('hidden');
	$('.slide--mini').addClass('hidden');
	// возвращает размер слайда навигацию до 5 слайдов
	$('.slider-nav').removeClass('slide--single');
	$('.slider-nav').slick('slickSetOption', 'slidesToShow', '5', true);
});
// Обработчик события "добавить новый слайд"
// $('.add-slide').on('click', function() {

// }

// ---------------------------------------------
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

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});
