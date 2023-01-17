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
  });
  var swiper = new Swiper(".bestSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  var swiper = new Swiper(".globalSwiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
  });
  var swiper = new Swiper(".popSwiper", {
    direction: "vertical",
    slidesPerView: "auto", // 한 슬라이드에 보여줄 갯수
    freeMode: true, //슬라이드 넘길 때 위치 고정 여부
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    mousewheel: true,
  });
});
