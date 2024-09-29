new Swiper('.swiper-container', {
    loop: true, // Бескінечний режим
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 3, // Кількість видимих слайдів
    spaceBetween: 20, // Відстань між слайдами
    autoplay: {
        delay: 5000, // Автоматична зміна кожні 5 секунд
    },
});
