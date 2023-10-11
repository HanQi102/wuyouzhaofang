var mySwiper = new Swiper('.swiper', {
    direction: 'horizontal', // 切换选项水平horizontal  垂直vertical 
    loop: true, // 循环模式选项 true 允许循环

    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        // type: 'custom',
        type: 'fraction',



    },



    autoplay: {
        delay: 2000,
        stopOnLastSlide: true,
        disableOnInteraction: false,
    },

})

