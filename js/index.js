$(function () {
  var currentScrollY = window.scrollY;

  // 목표 스크롤 위치를 1픽셀 아래로 설정합니다.
  var targetScrollY = currentScrollY + 10;

  // 스크롤을 부드럽게 이동시킵니다.
  gsap.to(window, {
    scrollTo: targetScrollY,
    duration: 1, // 부드러운 스크롤 시간 (1초)
    ease: "power1.inOut", // 이징 설정 (원하는 이징으로 변경 가능)
  });
  $(window).on("scroll", function (event) {
    var scrollTop = $(window).scrollTop();

    // 콘솔에 현재 스크롤 위치를 출력
    console.log("현재 스크롤 위치: " + scrollTop);

    var startScroll2 = 0;
    var endScroll2 = 150;
    var startOpacity2 = 1; // 시작 투명도
    var endOpacity2 = 0; // 종료 투명도

    var progressCloude =
      (scrollTop - startScroll2) / (endScroll2 - startScroll2);
    var opacityCloude =
      startOpacity2 + (endOpacity2 - startOpacity2) * progressCloude;
    // console.log("현재 구름 오퍼시티: " + opacityCloude);

    gsap.set(".main", {
      position: "fixed",
      background: "#fff",
      width: "100%",
      maxWidth: 1920 + scrollTop * 4 + "px",
      height: "100%",
      top: 0,
      left: "50%",
      x: "-50%",
    });
    if(scrollTop<1000 && scrollTop>0){
      gsap.fromTo(
        ".sky",
        { y: 0, opacity: 1 },
        { y: -scrollTop / 2,opacity: opacityCloude + 1  },
        0
      );
      gsap.fromTo(".cloud1", { y: 300 }, { y: -scrollTop * 2 }, 0);
      gsap.fromTo(
        ".cloud2",
        { y: -150, opacity: 1 },
        { y: -scrollTop * 1.5, opacity: opacityCloude + 0.2 },
        0
      );
      gsap.fromTo(".cloud3", { y: -50 }, { y: -scrollTop * 1.4 }, 0);
      gsap.fromTo(
        ".mountBg",
        { y: -30, opacity: 1 },
        { y: -scrollTop / 4, opacity: opacityCloude + 1 * 0.3 },
        0
      );
      gsap.fromTo(
        ".mountMg",
        { y: -30, opacity: 1 },
        { y: -scrollTop / 1.8, opacity: opacityCloude + 1 * 0.5 },
        0
      );
      gsap.fromTo(
        ".mountFg",
        { y: -50, opacity: 1 },
        { y: -scrollTop * 1, opacity: opacityCloude + 1 * 0.8 },
        0
      );
      gsap.fromTo(".gisang", { y: -150 }, { y: -scrollTop * 1 }, 0);
    }
    
    
    

    var startScroll = 500; // 시작 스크롤 위치
    var endScroll = 600; // 종료 스크롤 위치
    var startOpacity = 1; // 시작 투명도
    var endOpacity = 0; // 종료 투명도

    // 스크롤 위치에 따라 투명도 계산
    var progress = (scrollTop - startScroll) / (endScroll - startScroll);
    var opacity = startOpacity + (endOpacity - startOpacity) * progress;
      
    gsap.set(".main", { opacity: opacity });

    gsap.fromTo(
      ".content",
      {opacity: 0 },
      {opacity: (scrollTop - 1000) /100 *0.3 },
      0
    );

    

    

    if(scrollTop>1500 && scrollTop<2500){
      gsap.fromTo(
        ".part1",
        {opacity: 0 },
        {opacity: (scrollTop - 1500) /100 *0.4 },
        0
      );
     if(scrollTop>1800 && scrollTop<2500){
      addWidth()
     }else{
      
     }
    }else if(scrollTop>2500){
      gsap.fromTo(
        ".part1",
        {opacity: 1 },
        {opacity: (opacity +20)},
        0
      );
      removeWidth()
    }else{
      removeWidth()
    }
    const part2 = (opacity+28)*10+30 
    
    
    if(scrollTop>2500 && scrollTop<4000){
      gsap.fromTo(
        ".part2",
        {opacity: 0 },
        {opacity: (scrollTop-3000)/600},
        0
      );

      if(part2 <= 0){
        gsap.fromTo(
          ".part2",
          {top: 0 },
          {top: 0},
          0
        );
      }else{
        gsap.fromTo(
          ".part2",
          {top: 100+"%"},
          {top: part2+"%"},
          0
        );
      }
      
    }
    if(scrollTop>3000 && 6000){
      $(".part2").css({display:"block"})
    }else{
      $(".part2").css({display:"none"})
    }

    
    // const part3 = (opacity+28)*10+250 
    
    // console.log(part3)
    // if(scrollTop>5000 && scrollTop<6500){
    //   gsap.fromTo(
    //     ".part3",
    //     {opacity: 0 },
    //     {opacity: (scrollTop-5000)/500},
    //     0
    //   );

    //   if(part3 <= 0){
    //     gsap.fromTo(
    //       ".part3",
    //       {top: 0 },
    //       {top: 0},
    //       0
    //     );
    //   }else{
    //     gsap.fromTo(
    //       ".part3",
    //       {top: 100+"%"},
    //       {top: part3+"%"},
    //       0
    //     );
    //   }
      
    // }
    
    

  });

  function addWidth(){
    $('.fill95').addClass("on")
    $('.fill90').addClass("on")
    $('.fill85').addClass("on")
    $('.fill80').addClass("on")
    $('.fill55').addClass("on")
  }
  function removeWidth(){
    $('.fill95').removeClass("on")
    $('.fill90').removeClass("on")
    $('.fill85').removeClass("on")
    $('.fill80').removeClass("on")
    $('.fill55').removeClass("on")
  }
});
