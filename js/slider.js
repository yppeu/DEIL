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

// 더보기 버튼
$(function () {
  let test = $("#more_list>li").slice(0, 1).show(); // 초기갯수
  $("#more_list>li").addClass("li_bg");
  $(".li_bg").css({
    background: "rgba(0, 0, 0, 0.1)",
    "border-radius": "20px",
    "line-height": "25px",
    "text-align": "left",
    margin: "3px",
    "padding-top": "6px",
    "padding-left": "6px",
  });
  $("#more_list>li").removeClass("li_bg");
  console.log(test);
  $(".more")
    .css("cursor", "pointer")
    .click(function (e) {
      // 클릭시 more
      // e.preventDefault();
      $("#more_list>li:hidden").slice(0, 3).show(); // 클릭시 more 갯수 지저정
      if ($("#more_list>li:hidden").length < 0) {
        // 컨텐츠 남아있는지 확인
        alert("게시물의 끝입니다."); // 컨텐츠 없을시 alert 창 띄우기
      }
    });
});
