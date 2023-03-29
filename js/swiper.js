const swiper = new Swiper('.swiper', {
     // Optional parameters
     cssMode: true,
     loop: true,

     // If we need pagination
     pagination: {
          el: '.swiper-pagination',
     },

     // Navigation arrows
     navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
     },

     // And if we need scrollbar
     scrollbar: {
          el: '.swiper-scrollbar',
     },

     mousewheel: true,
     keyboard: true,

});

// var swiper = new Swiper(".mySwiper", {
//      cssMode: true,
//      navigation: {
//        nextEl: ".swiper-button-next",
//        prevEl: ".swiper-button-prev",
//      },
//      pagination: {
//        el: ".swiper-pagination",
//      },
//      mousewheel: true,
//      keyboard: true,
//  });