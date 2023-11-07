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
      gsap.to(
        ".sky",
        { y: -scrollTop / 2,opacity: opacityCloude + 1  },
        0
      );
      gsap.to(".cloud1", { y: -scrollTop * 2 }, 0);
      gsap.to(
        ".cloud2",
        { y: -scrollTop * 1.5, opacity: opacityCloude + 0.2 },
        0
      );
      gsap.to(".cloud3", { y: -scrollTop * 1.4 }, 0);
      gsap.to(
        ".mountBg",
        { y: -scrollTop / 4, opacity: opacityCloude + 1 * 0.3 },
        0
      );
      gsap.to(
        ".mountMg",
        { y: -scrollTop / 1.8, opacity: opacityCloude + 1 * 0.5 },
        0
      );
      gsap.to(
        ".mountFg",
        { y: -scrollTop * 1, opacity: opacityCloude + 1 * 0.8 },
        0
      );
      gsap.to(".gisang", { y: -scrollTop * 1 }, 0);
    }
    
    
    

    var startScroll = 500; // 시작 스크롤 위치
    var endScroll = 600; // 종료 스크롤 위치
    var startOpacity = 1; // 시작 투명도
    var endOpacity = 0; // 종료 투명도

    // 스크롤 위치에 따라 투명도 계산
    var progress = (scrollTop - startScroll) / (endScroll - startScroll);
    var opacity = startOpacity + (endOpacity - startOpacity) * progress;
      
    gsap.set(".main", { opacity: opacity });

    gsap.to(
      ".content",
      
      {opacity: (scrollTop - 300) /100 *0.3 },
      0
    );

    

    

    if(scrollTop>700 && scrollTop<1500){
      gsap.to(
        ".part1",
        
        {opacity: (scrollTop - 700) /100 *0.4 },
        0
      );
     if(scrollTop>1000 && scrollTop<1500){
      addWidth()
     }else{
      
     }
    }else if(scrollTop>1500){
      gsap.to(
        ".part1",
        
        {opacity: ((opacity +13)*0.3)},
        0
      );
      if (scrollTop>1600){
        removeWidth()
      }
      
    }else{
      removeWidth()
    }
    const part2 = (opacity+28)*10-100 
    console.log(part2)
    
    if(scrollTop>1750 && scrollTop<3000){
      gsap.to(
        ".part2",
        
        {opacity: (scrollTop-1750)/800},
        0
      );

      if(part2<=0){
        gsap.to(
          ".part2",
          
          {top: 0+"%"},
          0
        );
      }else{
        gsap.to(
          ".part2",
          
          {top: part2+"%"},
          0
        );
      }
        
      
      
    }
    if(scrollTop>1500 && 4000){
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
