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
    direction: "vertical ", // 방향 (세로)
    slidesPerView: "auto", // 슬라이드를 한번에 보여줄 갯수
    freeMode: true,
    effect: "fade", // 희미해지면서 슬라이드 전환
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    mousewheel: true,
  });
});
