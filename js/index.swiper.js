$(function() {
    var myswiper = new Swiper('.swiper-container-2', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        slidesPerView: 1,
        autoplayDisableOnInteraction: false,
        loop: true,
        autoplay: 2000,
        observer: true,
        observeParents: true,
        preloadImages: true,
        setWrapperSize: true

    });
    // 鼠标经过事件
    $(".swiper-wrapper").hover(function() {
        myswiper.stopAutoplay();
    }, function() {
        myswiper.startAutoplay();
    });

});
