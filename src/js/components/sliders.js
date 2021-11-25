const swiper = new Swiper('.portfolio-section__items', {
    // Optional parameters
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
  
    // // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },
  
    // Navigation arrows
    navigation: {
      nextEl: '.portfolio__next',
      prevEl: '.portfolio__prev',
    },
  
    // // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });

  const partnerSwiper = new Swiper('.partners-review__slider', {
    // Optional parameters
    slidesPerView: 1,
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.partners__next',
      prevEl: '.partners__prev',
    },

  });