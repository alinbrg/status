function heroSlider() {
	const swiper = new Swiper(".hero_swiper", {
		navigation: {
			nextEl: ".hero_slider-next",
			prevEl: ".hero_slider-prev",
		},
		slidesPerView: 1,
		spaceBetween: 10,
	});
}
heroSlider();
