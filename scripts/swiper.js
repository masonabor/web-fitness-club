new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 1, // Show one slide fully
    spaceBetween: 850, // Add space between slides
    navigation: {
        nextEl: '.swiper-button-next', // Ensure buttons are linked correctly
        prevEl: '.swiper-button-prev',
    },
    initialSlide: 0, // Start with the first slide (adjust if needed)
});