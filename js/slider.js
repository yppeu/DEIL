$(function () {
  var swiper = new Swiper(".mainSwiper", {
    effect: "cube",
    grabCursor: true,
    slidesPerView: "1", //화면에 여러개 패널 보이기
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    // pagination: {
    //   el: ".swiper-pagination",
    // },
  });
  var swiper = new Swiper(".bestSwiper", {
    watchSlidesProgress: true,
    slidesPerView: 1,
  });
});
