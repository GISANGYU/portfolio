$(function () {
  var currentScrollY = window.scrollY;

  var targetScrollY = currentScrollY + 10;
  var windowWidth = $(window).width();
  if (windowWidth >= 1800) {
    var currentScrollY = window.scrollY;

    gsap.to(window, {
      scrollTo: targetScrollY,
      duration: 1, // 부드러운 스크롤 시간 (1초)
      ease: "power1.inOut", // 이징 설정 (원하는 이징으로 변경 가능)
    });
    $(window).on("scroll", function (event) {
      
      var scrollTop = $(window).scrollTop();
      var windowheight = window.innerHeight

      let realScroll = scrollTop / windowheight *100
      console.log(windowheight)
      console.log("반응형높이"+realScroll)
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
        maxWidth: 1920,
        height: "100%",
        top: 0,
        left: "50%",
        x: "-50%",
      });
      if (scrollTop < 1000 && scrollTop > 0) {
        gsap.to(".sky", { y: -scrollTop / 2, opacity: opacityCloude + 1 }, 0);
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

        { opacity: ((scrollTop - 300) / 100) * 0.3 },
        0
      );

      if (scrollTop > 700 && scrollTop < 1500) {
        gsap.to(
          ".part1",

          { opacity: ((scrollTop - 700) / 100) * 0.4 },
          0
        );
        if (scrollTop > 1000 && scrollTop < 1500) {
          addWidth();
        } else {
        }
      } else if (scrollTop > 1500) {
        gsap.to(
          ".part1",

          { opacity: (opacity + 13) * 0.3 },
          0
        );
        if (scrollTop > 1700) {
          removeWidth();
        }
      } else if (scrollTop < 1300) {
        removeWidth();
      }
      const part2 = (opacity + 28) * 10 - 100;
      // console.log(part2)

      if (scrollTop > 1750 && scrollTop < 3000) {
        gsap.to(
          ".part2",

          { opacity: (scrollTop - 1750) / 800 },
          0
        );

        if (part2 <= 0) {
          gsap.to(
            ".part2",

            { top: 0 + "%" },
            0
          );
        } else {
          gsap.to(
            ".part2",

            { top: part2 + "%" },
            0
          );
        }
      }
      if (scrollTop > 1500 && scrollTop < 5000) {
        $(".part2").css({ display: "block" });
      } else {
        $(".part2").css({ display: "none" });
      }
      // part3
      if (scrollTop > 3200 && scrollTop < 4700) {
        gsap.to(
          ".part3",

          { opacity: (scrollTop - 3100) / 800 },
          0
        );
        gsap.to(
          ".part2",

          { opacity: (opacity + 32) * 0.3 },
          0
        );
        // console.log(opacity)
        const part3 = part2 + 200;
        if (part3 <= 0) {
          gsap.to(
            ".part3",

            { top: 0 + "%" },
            0
          );
        } else {
          gsap.to(
            ".part3",

            { top: part3 + "%" },
            0
          );
        }
      }

      // console.log(part2)
      const part4 = part2 + 380;
      if (part4 <= 0) {
        gsap.to(
          ".part4",

          { top: 0 + "%" },
          0
        );
      } else {
        gsap.to(
          ".part4",

          { top: part4 + "%" },
          0
        );
      }

      if (scrollTop > 3000 && scrollTop < 6500) {
        $(".part3").css({ display: "block" });
      } else {
        $(".part3").css({ display: "none" });
      }

      if (scrollTop > 5000 && scrollTop < 6500) {
        gsap.to(
          ".part4",

          { opacity: (scrollTop - 5000) / 800 },
          0
        );
        gsap.to(
          ".part3",

          { opacity: (opacity + 51) * 0.3 },
          0
        );
      }

      const dark = (scrollTop - 7700) / 5000;
      // console.log(dark);
      if (scrollTop > 7700 && scrollTop < 11000) {
        if (dark > 0.9) {
          gsap.to(
            ".bg",

            { opacity: 0.9 },
            0
          );
        } else {
          gsap.to(
            ".bg",

            { opacity: dark },
            0
          );
        }
      }
      const scrollCon2Top = (scrollTop - 8200) * 0.7;
      const scrollCon2Bottom = (scrollTop - 8200) * 0.67;
      //con2 scroll box
      if (scrollTop > 8200 && scrollTop < 10500) {
        if (scrollCon2Top > 10 && scrollCon2Top < 1280) {
          gsap.to(
            ".con2_top",

            { left: -scrollCon2Top },
            0
          );
        } else if (scrollCon2Top > 1280) {
          gsap.to(
            ".con2_top",

            { left: -1280 + "px" },
            0
          );
        } else if (scrollCon2Top < 0) {
          gsap.to(
            ".con2_top",

            { left: 0 + "px" },
            0
          );
        }

        if (scrollCon2Bottom > 10 && scrollCon2Bottom < 1240) {
          gsap.to(
            ".con2_bottom",

            { left: -scrollCon2Bottom },
            0
          );
        } else if (scrollCon2Bottom > 1240) {
          gsap.to(
            ".con2_bottom",

            { left: -1240 + "px" },
            0
          );
        } else if (scrollCon2Bottom < 0) {
          gsap.to(
            ".con2_bottom",

            { left: 0 + "px" },
            0
          );
        }
      } else if (scrollTop < 8200) {
        gsap.to(
          ".con2_top",

          { left: 0 + "px" },
          0
        );
        gsap.to(
          ".con2_bottom",

          { left: 0 + "px" },
          0
        );
      } else {
        gsap.to(
          ".con2_top",

          { left: -1280 + "px" },
          0
        );
        gsap.to(
          ".con2_bottom",

          { left: -1240 + "px" },
          0
        );
      }
    });

    function addWidth() {
      $(".fill95").addClass("on");
      $(".fill90").addClass("on");
      $(".fill85").addClass("on");
      $(".fill80").addClass("on");
      $(".fill55").addClass("on");
    }
    function removeWidth() {
      $(".fill95").removeClass("on");
      $(".fill90").removeClass("on");
      $(".fill85").removeClass("on");
      $(".fill80").removeClass("on");
      $(".fill55").removeClass("on");
    }
  } else if (windowWidth <= 600) {
    $(".after").text("Node");
    $(".highSchool").eq(0).text("인천디자인고등학교");
    $(".highSchool").eq(0).css({ fontSize: "14px" });
    $(".highSchool").eq(1).text("시각디자인과 졸업");
    $(".ezen").eq(0).text("이젠아카데미");
    $(".ezen").eq(1).text("웹프레임워크 개발과정");
    $(".ezen").eq(1).css({ fontSize: "12px" });
    $(".javaScript").text("JS");
    $(".ps").text("PS");
    $(".ai").text("AI");
    $(".cer_com").text("컴퓨터그래픽스 기능사");
    setTimeout(function () {
      for (let i = 0; i < 9; i++) {
        setTimeout(function () {
          $(".innerWrap h2 span").eq(i).addClass("on");
        }, i * 50);
        setTimeout(function () {
          $(".innerWrap h2 span").eq(i).addClass("onS");
        }, i * 50 + 300);
      }
    }, 500);
    setTimeout(function () {
      $(".myName h3").addClass("on");
    }, 1500);
  } else {
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
        maxWidth: 1920,
        height: "100%",
        top: 0,
        left: "50%",
        x: "-50%",
      });
      if (scrollTop < 1000 && scrollTop > 0) {
        gsap.to(".sky", { y: -scrollTop / 2, opacity: opacityCloude + 1 }, 0);
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
    });
  }
});
