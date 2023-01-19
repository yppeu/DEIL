$(function () {
  var swiper = new Swiper(".mainSwiper", {
    effect: "cube",
    grabCursor: true,
    slidesPerView: "1", //화면에 여러개 패널 보이기
    cubeEffect: {
      shadow: true, // 슬라이더 밑의 그림자 표시 여부
      slideShadows: true, // 슬라이더를 돌릴때 흐릿해 지는 그림자 표시 여부
      shadowOffset: 40, // 그림자 위치, 수치가 클수록 아래로 내려감
      shadowScale: 0.4, // 그림자 크기, 수치가 클수록 그림자 커짐
    },
  });
  var swiper = new Swiper(".bestSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
  });
  var swiper = new Swiper(".globalSwiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
  });
  var swiper = new swiper(".pop_mvSwiper", {
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
      prev: {
        shadow: true,
        translate: ["-125%", 0, -800],
        rotate: [0, 0, -90],
      },
      next: {
        shadow: true,
        translate: ["125%", 0, -800],
        rotate: [0, 0, 90],
      },
    },
  });
});
