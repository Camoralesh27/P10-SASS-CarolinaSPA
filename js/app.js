window.swiper = new Swiper({
    el: '.slider__contenedor',
    slideClass: 'slider__slide',
    createElements: true,
    autoplay: {
        delay: 3000 /* timer */
    },
    loop: true, /* acabandoce vuelve al inicio */
    /* spaceBetween: 20 */ /* agrega espacio entre sliders */
    pagination: true,
    navigation: true
});