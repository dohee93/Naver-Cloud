var isMobile;
$(document).ready(function(){
    // MOBILE DETECT
    isMobile = false;
    (function(a){(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);
    isMobile = jQuery.browser.mobile;
    if(isMobile == false){
      $(".wrap.pc.cloud").load('cloud_pc.html', function(){
        $(".wrap.mo.cloud").load('cloud_mo.html', function(){
          myFullpageCTL = false;
          actionJquery();
        });
      });
    }else{
      $(".wrap.mo.cloud").load('cloud_mo.html', function(){
        actionJquery();
      });
    }
  function actionJquery(){
    var scrollTop = $(window).scrollTop();
    var winWidth = window.innerWidth;
    var moWidth = window.innerWidth;
    function cloudEvents() {
      var innerH = $('.wrap.mo.cloud .m_cloud_wrap').innerHeight();
      var contH = $('.wrap.mo.cloud #cloud_tit').innerHeight();
      var headH = $('.wrap.mo.cloud .fix_media_header').innerHeight();
      var headH2 = innerH - contH;
      var target = headH2 + headH * 3.5;

      var innerHe = $('.wrap.pc.cloud header .header_container').innerHeight();
      var contHe = $('.wrap.pc.cloud .container #title01').innerHeight();
      // var headHe = $('.wrap.pc.cloud .sub_header').innerHeight();
      var headH2e = innerHe + contHe;
      var targete = headH2e - 61;
      var targete2 = headH2e - 61;

      var moWidth = window.innerWidth;
      var scrollTop = $(window).scrollTop();

      if (moWidth < 1281) {
        // 헤더
        if(scrollTop >= targete){
            $('.pc.cloud .top_line').css({'opacity' : '1', 'top' : '61px', 'position': 'fixed'});
            $('.pc.cloud .sub_header.cloud-pc').css({'opacity' : '1', 'top' : '61px', 'position': 'fixed'});
        }else{
            $('.pc.cloud .top_line').css({'opacity' : '1', 'top' : '-30px', 'position': 'absolute'});
            $('.pc.cloud .sub_header.cloud-pc').css({'opacity' : '1', 'top' : '312px', 'position': 'absolute'});
        }
        if(myFullpageCTL == true){
          if(scrollTop > $('#title_img01').offset().top) {
            $('#top-btn.tab').fadeIn();
          } else {
            $('#top-btn.tab').fadeOut();
          }
        }

        $('#top-btn.tab').on('click', function() {
          $('html, body').stop().animate({scrollTop: 0}, 600);
        })

        $("#subBtnNextOne_two").click(function(event){
            event.preventDefault();
            $('html,body').stop().animate({scrollTop:$('.pc.cloud #content01').offset().top - 133}, 600);
        });

        $("#subBtnNextTwo_two").click(function(event){
            event.preventDefault();
            $('html,body').stop().animate({scrollTop:$('.pc.cloud #content02').offset().top - 133}, 600);
        });

        $("#subBtnNextThree_two").click(function(event){
            event.preventDefault();
            $('html,body').stop().animate({scrollTop:$('.pc.cloud #content03').offset().top - 132}, 600);
        });

        $(".sub_header ul li a.btn01.mo").on('click', function() {
          event.preventDefault();
          $('html,body').stop().animate({scrollTop:$('.pc.cloud #title_img01').offset().top - 133}, 600);
        })

        $(".sub_header ul li a.btn02.mo").on('click', function() {
          event.preventDefault();
          $('html,body').stop().animate({scrollTop:$('.pc.cloud #title02').offset().top - 133}, 600);
        })

        $(".sub_header ul li a.btn03.mo").on('click', function() {
          event.preventDefault();
          $('html,body').stop().animate({scrollTop:$('.pc.cloud #title03').offset().top - 133}, 600);
        })

        $(".pc.cloud .small-nav.inner.visible ol li a.btn10").on('click', function() {
          event.preventDefault();
          $('html,body').stop().animate({scrollTop:$('.pc.cloud #s-section-01-box').offset().top - 133}, 600);
        })
        $(".pc.cloud .small-nav.inner.visible ol li a.btn11").on('click', function() {
          event.preventDefault();
          $('html,body').stop().animate({scrollTop:$('.pc.cloud #s-section-02-box').offset().top - 133}, 600);
        })
        $(".pc.cloud .small-nav.inner.visible ol li a.btn12").on('click', function() {
          event.preventDefault();
          $('html,body').stop().animate({scrollTop:$('.pc.cloud #s-section-03-box').offset().top - 133}, 600);
        })
        $(".pc.cloud .small-nav.inner.visible ol li a.btn13").on('click', function() {
          event.preventDefault();
          $('html,body').stop().animate({scrollTop:$('.pc.cloud #s-section-04-box').offset().top - 133}, 600);
        })
        $(".pc.cloud .small-nav.inner.visible ol li a.btn14").on('click', function() {
          event.preventDefault();
          $('html,body').stop().animate({scrollTop:$('.pc.cloud #s-section-05-box').offset().top - 133}, 600);
        })
      }

      if (moWidth <= 1281 && moWidth >= 768) {
        var onePlay = true;
        var flipAni = $('.pc.cloud #content03').offset().top;

        if(scrollTop >= flipAni){
            if(onePlay == true) {
                effectList();
                onePlay = false;
            }
        } else {
          $('.pc.cloud #content03').find('.service_cont .card_box ul li').css('opacity', '0');
          $('.pc.cloud #content03').find('.service_cont .card_box ul li').css('top', '25px');
          onePlay = true;
        }
        if($(".wrap.pc #s-section-05-box").hasClass("visible")){
            $(".counter1").animateNumbers(7400, true, 2000, "swing");
            $(".counter2").animateNumbers(2846, true, 2000, "swing");
            $(".counter3").animateNumbers(477, true, 2000, "swing");
            $(".counter4").animateNumbers(2, true, 2000, "swing");
        };

        // if($(".wrap.pc #content03").hasClass("visible")){
        //     effectList();
        // }
        var controller = new ScrollMagic.Controller();

        var scene1_1 = new ScrollMagic.Scene({
            triggerElement: ".pc.cloud #section01-box .txt-box", //트리거 설정
            triggerHook: 0.8
        })
        .setClassToggle(".pc.cloud #section01-box .txt-box, #section01-box .bottom_btn", "visible")
        .addTo(controller)

        var scene1_2 = new ScrollMagic.Scene({
            triggerElement: ".pc.cloud #section02-1-box", //트리거 설정
            triggerHook: 0.8
        })
        .setClassToggle(".pc.cloud #section02-1-box .txt-box, #section02-1-box .bottom_btn", "visible")
        .addTo(controller)

        var scene1_3 = new ScrollMagic.Scene({
            triggerElement: ".pc.cloud #section03-box", //트리거 설정
            triggerHook: 0.8
        })
        .setClassToggle(".pc.cloud #section03-box .txt-box, #section03-box .bottom_btn", "visible")
        .addTo(controller)

        var scrollD = true;
        function smallNavCtnlr(scrollTop){
          if(scrollTop >= $('.pc.cloud .skill_cont').offset().top){
              if(scrollD == true){
                if(scrollTop > $('.pc.cloud #s-section-01-box').offset().top - 134 && scrollTop < $('.pc.cloud #s-section-02-box').offset().top - 134){
                    $('.pc.cloud .small-nav.inner.visible ol li a').removeClass('active');
                    $('.pc.cloud .small-nav.inner.visible').removeClass('on');
                    $('.pc.cloud .small-nav.inner.visible ol li a.btn10').addClass('active');
                    $('.pc.cloud .small-nav.inner.visible').addClass('on');
                } else if(scrollTop > $('.pc.cloud #s-section-02-box').offset().top - 134 && scrollTop < $('.pc.cloud #s-section-03-box').offset().top - 134){
                    $('.pc.cloud .small-nav.inner.visible ol li a').removeClass('active');
                    $('.pc.cloud .small-nav.inner.visible').removeClass('on');
                    $('.pc.cloud .small-nav.inner.visible ol li a.btn11').addClass('active');
                    $('.pc.cloud .small-nav.inner.visible').addClass('on');
                }else if(scrollTop > $('.pc.cloud #s-section-03-box').offset().top - 134 && scrollTop < $('.pc.cloud #s-section-04-box').offset().top - 134){
                    $('.pc.cloud .small-nav.inner.visible ol li a').removeClass('active');
                    $('.pc.cloud .small-nav.inner.visible').removeClass('on');
                    $('.pc.cloud .small-nav.inner.visible ol li a.btn12').addClass('active');
                    $('.pc.cloud .small-nav.inner.visible').addClass('on');
                }else if(scrollTop > $('.pc.cloud #s-section-04-box').offset().top - 134 && scrollTop < $('.pc.cloud #s-section-05-box').offset().top - 134){
                    $('.pc.cloud .small-nav.inner.visible ol li a').removeClass('active');
                    $('.pc.cloud .small-nav.inner.visible').removeClass('on');
                    $('.pc.cloud .small-nav.inner.visible ol li a.btn13').addClass('active');
                    $('.pc.cloud .small-nav.inner.visible').addClass('on');
                }else if(scrollTop > $('.pc.cloud #s-section-05-box').offset().top - 134 && scrollTop <= $('.pc.cloud #title03').offset().top - 134){
                    $('.pc.cloud .small-nav.inner.visible ol li a').removeClass('active');
                    $('.pc.cloud .small-nav.inner.visible').removeClass('on');
                    $('.pc.cloud .small-nav.inner.visible ol li a.btn14').addClass('active');
                    $('.pc.cloud .small-nav.inner.visible').addClass('on');
                    $('.pc.cloud .small-nav.inner.visible').addClass('remove');
                }
            } else {
              $('.pc.cloud .small-nav.inner.visible').removeClass('on');
              $('.pc.cloud .small-nav.inner.visible').removeClass('remove');
            }
          } else if (scrollTop <= $('.pc.cloud .s-section').offset().top) {
            $('.pc.cloud .small-nav.inner.visible').removeClass('on');
            $('.pc.cloud .small-nav.inner.visible').removeClass('remove');
          }
          if(scrollTop > $('.pc.cloud #s-section-05-box').offset().top){
            $('.pc.cloud .small-nav.inner.visible').removeClass('on');
          }
        }
        function subHeaderPc(scrollTop){
            if(scrollTop >= $('.pc.cloud .section').offset().top){
                if(scrollD == true){
                    if(scrollTop <= ($('.pc.cloud #title_img01').height() + $('.pc.cloud #content01').height())){
                        $('.sub_header.cloud-pc ul li a.mo').removeClass('active');
                        $('.sub_header.cloud-pc ul li a.mo.btn01').addClass('active');
                    }else if(scrollTop <= ($('.pc.cloud #title02').height() + $('.pc.cloud #title_img02').offset().top + $('.pc.cloud #content02').height())){
                        $('.sub_header.cloud-pc ul li a.mo').removeClass('active');
                        $('.sub_header.cloud-pc ul li a.mo.btn02').addClass('active');
                    }else if(scrollTop <= ($('.pc.cloud #title03').height() + $('.pc.cloud #title_img03').offset().top  +  $('.pc.cloud #content03').height())){
                        $('.sub_header.cloud-pc ul li a.mo').removeClass('active');
                        $('.sub_header.cloud-pc ul li a.mo.btn03').addClass('active');
                    }
                }
            }
        }
        subHeaderPc(scrollTop);
        smallNavCtnlr(scrollTop);

      }

      if (moWidth < 1025) {
        if(scrollTop >= targete2){
            $('.pc.cloud .top_line').css({'opacity' : '1', 'top' : '61px', 'position': 'fixed'});
            $('.pc.cloud .sub_header.cloud-pc').css({'opacity' : '1', 'top' : '61px', 'position': 'fixed'});
        }else{
            $('.pc.cloud .top_line').css({'opacity' : '0', 'top' : '0', 'position': 'absolute'});
            $('.pc.cloud .sub_header.cloud-pc').css({'opacity' : '1', 'top' : '248px', 'position': 'absolute'});
        }
      }

      if (moWidth < 768) {
        if(scrollTop >= target){
            $('.mo.cloud .top_line').css({'opacity' : '1', 'top' : '61px', 'position': 'fixed'});
            $('.mo.cloud .sub_header.cloud-mo').css({'opacity' : '1', 'top' : '61px', 'position': 'fixed'});
        }else{
            $('.mo.cloud .top_line').css({'opacity' : '0', 'top' : '0', 'position': 'fixed'});
            $('.mo.cloud .sub_header.cloud-mo').css({'opacity' : '1', 'top' : '276px', 'position': 'absolute'});
        }

        var controller = new ScrollMagic.Controller();

        var mobile1 = new ScrollMagic.Scene({
            triggerElement: ".wrap.mo #visual .txt-box", //트리거 설정
            reverse: false,
            triggerHook: 0.8
        })
        .setClassToggle(".wrap.mo #visual .txt-box", "visible")
        .addTo(controller)

        var mobile2 = new ScrollMagic.Scene({
            triggerElement: ".wrap.mo #content01", //트리거 설정
            reverse: false,
            triggerHook: 0.8
        })
        .setClassToggle(".wrap.mo #content01", "visible")
        .addTo(controller)

        var mobile3 = new ScrollMagic.Scene({
            triggerElement: ".wrap.mo .section.technology_tit", //트리거 설정
            reverse: false,
            triggerHook: 0.8
        })
        .setClassToggle(".section.technology_tit", "visible")
        .addTo(controller)

        var mobile4 = new ScrollMagic.Scene({
            triggerElement: ".wrap.mo #visual2 .txt-box", //트리거 설정
            reverse: false,
            triggerHook: 0.8
        })
        .setClassToggle(".wrap.mo #visual2 .txt-box", "visible")
        .addTo(controller)

        var mobile5 = new ScrollMagic.Scene({
            triggerElement: ".wrap.mo #s-section-01-box", //트리거 설정
            reverse: false,
            triggerHook: 0.8
        })
        .setClassToggle(".wrap.mo #s-section-01-box", "visible")
        .addTo(controller)

        var mobile6 = new ScrollMagic.Scene({
            triggerElement: ".wrap.mo #s-section-02-box", //트리거 설정
            reverse: false,
            triggerHook: 0.8
        })
        .setClassToggle(".wrap.mo #s-section-02-box", "visible")
        .addTo(controller)

        var mobile7 = new ScrollMagic.Scene({
            triggerElement: ".wrap.mo #s-section-03-box", //트리거 설정
            reverse: false,
            triggerHook: 0.8
        })
        .setClassToggle(".wrap.mo #s-section-03-box", "visible")
        .addTo(controller)

        var mobile8 = new ScrollMagic.Scene({
            triggerElement: ".wrap.mo #s-section-04-box", //트리거 설정
            reverse: false,
            triggerHook: 0.8
        })
        .setClassToggle(".wrap.mo #s-section-04-box", "visible")
        .addTo(controller)

        var mobile9 = new ScrollMagic.Scene({
            triggerElement: ".wrap.mo #s-section-05-box", //트리거 설정
            reverse: false,
            triggerHook: 0.8
        })
        .setClassToggle(".wrap.mo #s-section-05-box", "visible")
        .addTo(controller)

        var mobile10 = new ScrollMagic.Scene({
            triggerElement: ".wrap.mo .section.service_tit", //트리거 설정
            reverse: false,
            triggerHook: 0.8
        })
        .setClassToggle(".section.service_tit", "visible")
        .addTo(controller)

        var mobile11 = new ScrollMagic.Scene({
            triggerElement: ".wrap.mo #visual3 .txt-box", //트리거 설정
            reverse: false,
            triggerHook: 0.8
        })
        .setClassToggle(".wrap.mo #visual3 .txt-box", "visible")
        .addTo(controller)

        var mobile12 = new ScrollMagic.Scene({
            triggerElement: ".wrap.mo #content03 .service_cont .tit_box", //트리거 설정
            reverse: false,
            triggerHook: 0.8
        })
        .setClassToggle(".wrap.mo #content03 .service_cont .tit_box", "visible")
        .addTo(controller)

        var mobile13 = new ScrollMagic.Scene({
            triggerElement: ".wrap.mo #content03 .service_cont .card_box", //트리거 설정
            reverse: false,
            triggerHook: 0.8
        })
        .setClassToggle(".wrap.mo #content03 .service_cont .card_box", "visible")
        .addTo(controller)

        var mobile14 = new ScrollMagic.Scene({
            triggerElement: ".wrap.mo #content03 .banner_cont", //트리거 설정
            reverse: false,
            triggerHook: 0.8
        })
        .setClassToggle(".wrap.mo #content03 .banner_cont", "visible")
        .addTo(controller)

        if($(".wrap.mo #s-section-05-box").hasClass("visible")){
            $(".counter1").animateNumbers(7400, true, 2000, "swing");
            $(".counter2").animateNumbers(2846, true, 2000, "swing");
            $(".counter3").animateNumbers(477, true, 2000, "swing");
            $(".counter4").animateNumbers(2, true, 2000, "swing");
        };
        var scrollD = true;
        function navCTL(scrollTop){
            if(scrollTop >= $('.wrap.mo .section').offset().top){
                if(scrollD == true){
                    if(scrollTop > $('.wrap.mo #visual').offset().top - 123 && scrollTop <= $('.wrap.mo .technology_tit').offset().top - $('.wrap.mo #visual').height()){
                        $('.sub_header.cloud-mo ul li a').removeClass('active');
                        $('.sub_header.cloud-mo ul li a.btn01').addClass('active');
                    }else if(scrollTop > $('.wrap.mo .technology_tit').offset().top - 123 && scrollTop <= $('.wrap.mo .service_tit').offset().top - $('.wrap.mo .technology_tit').height()){
                        $('.sub_header.cloud-mo ul li a').removeClass('active');
                        $('.sub_header.cloud-mo ul li a.btn02').addClass('active');
                    }else if(scrollTop > $('.wrap.mo .service_tit').offset().top - 123){
                        $('.sub_header.cloud-mo ul li a').removeClass('active');
                        $('.sub_header.cloud-mo ul li a.btn03').addClass('active');
                    }
                }
            }
        }
        navCTL(scrollTop);

        if(scrollTop > $('.mo.cloud #visual').offset().top) {
          $('.mo.cloud #top-btn.mo').fadeIn();
        } else {
          $('.mo.cloud #top-btn.mo').fadeOut();
        }
        $('.mo.cloud #top-btn.mo').on('click', function() {
          $('html, body').stop().animate({scrollTop: 0}, 600);
        })

        if(scrollTop > $('.wrap.mo #visual').offset().top) {
          $('.wrap.mo #top-btn.mo').fadeIn();
        } else {
          $('.wrap.mo #top-btn.mo').fadeOut();
        }
        $('.wrap.mo #top-btn.mo').on('click', function() {
          $('html, body').stop().animate({scrollTop: 0}, 600);
        })


      }
    }

    $(window).resize(function(){
      cloudEvents();
      if (winWidth > 1280) {
        headerWrap.removeClass('active');
        mNav.removeClass('active');
        mNavDim.removeClass('on');
        htmlBody.removeClass('fixed');
      }
      if (winWidth > 1024) {
        jQuery('header .header_container').css({'z-index': '100'});
      }
      winWidth = window.innerWidth;
      if(winWidth < 1281){
        if(myFullpageCTL == true){
          $.fn.fullpage.destroy('all');
          $('html, body').stop().animate({scrollTo:0});
          $('.pc.cloud .header_wrap').css({'top' : '0'});
          $('.pc.cloud .top_line').css({'opacity' : '0', 'top' : '0', 'position': 'absolute'});
          if (winWidth < 1025) {
            $('.pc.cloud .sub_header.cloud-pc').css({'opacity' : '1', 'top' : '248px', 'position': 'absolute'});
            $('.pc.cloud .sub_header.cloud-pc ul li a').removeClass('active');
            $('.pc.cloud .sub_header.cloud-pc ul li a.btn01').addClass('active');
            $('.mo.cloud header .header_wrap').css({'top' : '0'});
            $('.mo.cloud .top_line').css({'opacity' : '0', 'top' : '0', 'position': 'fixed'});
            $('.mo.cloud .sub_header.cloud-mo').css({'opacity' : '1', 'top' : '276px', 'position': 'absolute'});
            $('.mo.cloud .sub_header.cloud-mo ul li a').removeClass('active');
            $('.mo.cloud .sub_header.cloud-mo ul li a.btn01').addClass('active');
          }
          myFullpageCTL = false;
        }
      }else{
        if(myFullpageCTL == false){
          makeFullPage();
          myFullpageCTL = true;
        }
      }
    });
    if(myFullpageCTL == false){
      makeFullPage();
      myFullpageCTL = true;
    }

      var myFullpageCTL;
      var iscrollEnded = false;
      var iscrollTimeout;
      var winWidth = window.innerWidth;
      if(winWidth < 1281){
        if(myFullpageCTL == true){
          $.fn.fullpage.destroy('all');
          myFullpageCTL = false;
        }
        $('html, body').stop().animate({scrollTo:0});
        $('.pc.cloud .header_wrap').css({'top' : '0'});
        $('.pc.cloud .top_line').css({'opacity' : '0', 'top' : '0', 'position': 'absolute'});
        if (winWidth < 1025) {
          $('.pc.cloud .sub_header.cloud-pc').css({'opacity' : '1', 'top' : '248px', 'position': 'absolute'});
          $('.pc.info .sub_header.info-pc ul li a').removeClass('active');
          $('.pc.info .sub_header.info-pc ul li a.btn01').addClass('active');
          $('.mo.cloud header .header_wrap').css({'top' : '0'});
          $('.mo.cloud .top_line').css({'opacity' : '0', 'top' : '0', 'position': 'fixed'});
          $('.mo.cloud .sub_header.cloud-mo').css({'opacity' : '1', 'top' : '276px', 'position': 'absolute', 'transition-duration': '0ms'});
          $('.mo.cloud .sub_header.cloud-mo ul li a').removeClass('active');
          $('.mo.cloud .sub_header.cloud-mo ul li a.btn01').addClass('active');
        }
      }else{
        makeFullPage();
        myFullpageCTL = true;
      }
      var offsetY = -72;

      function makeFullPage(){
          $('.wrap.pc .container').fullpage({
          anchors: ['', 'Cloud-title', 'Cloud-content', 'Technology-title', 'Technology-visual', 'Technology-content', 'Service-title', 'Service-visual', 'Service-content'],
          // STAMP
          // offsetSectionsKey: 'c3RhbS1wLmNvbV96OEFiMlptYzJWMFUyVmpkR2x2Ym5NPXR4UQ==',
          // NAVER CLOUD CORP
          offsetSectionsKey: 'bmF2ZXJjbG91ZGNvcnAuY29tXzRRN2IyWm1jMlYwVTJWamRHbHZibk09R1NV',
          licenseKey:"9680D241-C8F542C1-A83107A4-8E33A65C",
          offsetSections: true,
          scrollOverflow: true,
          v2compatible: true,
          easing: 'easeInOutCubic',
          scrollingSpeed: 700,
          scrollOverflowOptions: {
            disablePointer: false,
            scrollbars: false,
            probeType: 3,
            useTransition: false
          },
          afterRender: function(){
            $.fn.fullpage.silentMoveTo(1);
            $('.pc.cloud .top_line').css({'opacity' : '1', 'top' : '-30px', 'position': 'absolute'});
            $('.pc.cloud .sub_header.cloud-pc').css({'opacity' : '1', 'top' : '392px', 'position': 'absolute'});
            $('.pc.cloud .sub_header.cloud-pc ul li a').removeClass('active');
            $('.pc.cloud .sub_header.cloud-pc ul li a.btn01').addClass('active');
            $('.mo.cloud header .header_wrap').css({'top' : '0'});
            $('.mo.cloud .top_line').css({'opacity' : '0', 'top' : '0', 'position': 'fixed'});
            $('.mo.cloud .sub_header.cloud-mo').css({'opacity' : '1', 'top' : '276px', 'position': 'absolute'});
          },
          afterLoad: function(anchorLink, index){
                  iscrollEnded = true;
                  clearTimeout(iscrollTimeout);
                  var iscroll = $('.fp-section.active').find('.fp-scrollable');
                  if(iscroll.length == 1){
                      iscrollEnded = false;
                      iscroll[0].fp_iscrollInstance.on('scroll', function(){
                          if((this.y == 0 && this.directionY !== 1) || (this.y == this.maxScrollY && this.directionY !== -1)){
                              iscrollTimeout = setTimeout(function(){
                                  iscrollEnded = true;
                              }, 700)
                          }
                          if(this.directionY == 1 && this.y !== 0 && this.y !== this.maxScrollY){navCTLstatus = false;navCTL('down');}else if(this.directionY == -1 && this.y !== 0 && this.y !== this.maxScrollY){navCTLstatus = false;navCTL('up');}
                          $.fn.fullpage.setAllowScrolling(iscrollEnded);
                      })
                  }else{
                      // console.log(iscroll.length, 'length');
                      // console.log($.fn.fullpage, 'full');
                      $.fn.fullpage.setAllowScrolling(true);
                  }
                  if(index == 6){var winHeight = $(window).height();var skillContItem01 = $('#s-section-01-box').innerHeight();var skillContItem02 = $('#s-section-02-box').innerHeight();var skillContItem03 = $('#s-section-03-box').innerHeight();var skillContItem04 = $('#s-section-04-box').innerHeight();var skillContItem05 = $('#s-section-05-box').innerHeight();var top01 = skillContItem01 + skillContItem02;var top02 = top01 + skillContItem03;var top03 = top02 + skillContItem04;var top04 = top02 + skillContItem04 - (winHeight - 144 - skillContItem05);var iscroll = $('.fp-section.active').find('.fp-scrollable');$.fn.fullpage.reBuild();$('.small-nav ol li:nth-child(1) a').unbind('click');$('.small-nav ol li:nth-child(2) a').unbind('click');$('.small-nav ol li:nth-child(3) a').unbind('click');$('.small-nav ol li:nth-child(4) a').unbind('click');$('.small-nav ol li:nth-child(5) a').unbind('click');$('.small-nav ol li:nth-child(1) a').click(function(){iscroll[0].fp_iscrollInstance.scrollToElement('#s-section-01-box', 1000, 0, offsetY);});$('.small-nav ol li:nth-child(2) a').click(function(){iscroll[0].fp_iscrollInstance.scrollToElement('#s-section-02-box', 1000, 0, offsetY);});$('.small-nav ol li:nth-child(3) a').click(function(){iscroll[0].fp_iscrollInstance.scrollToElement('#s-section-03-box', 1000, 0, offsetY);});$('.small-nav ol li:nth-child(4) a').click(function(){iscroll[0].fp_iscrollInstance.scrollToElement('#s-section-04-box', 1000, 0, offsetY);});$('.small-nav ol li:nth-child(5) a').click(function(){iscroll[0].fp_iscrollInstance.scrollToElement('#s-section-05-box', 1000, 0, offsetY);});if(Math.round(iscroll[0].fp_iscrollInstance.y) <= 0){$('.small-nav ol li a').removeClass('active');$('.small-nav ol li:nth-child(1) a').addClass('active');};if(Math.round(iscroll[0].fp_iscrollInstance.y) <= - skillContItem01 - offsetY){$('.small-nav ol li a').removeClass('active');$('.small-nav ol li:nth-child(2) a').addClass('active');};if(Math.round(iscroll[0].fp_iscrollInstance.y) <= - top01 - offsetY){$('.small-nav ol li a').removeClass('active');$('.small-nav ol li:nth-child(3) a').addClass('active');};if(Math.round(iscroll[0].fp_iscrollInstance.y) <= - top02 - offsetY){$('.small-nav ol li a').removeClass('active');$('.small-nav ol li:nth-child(4) a').addClass('active');};if(winHeight < skillContItem05){if(Math.round(iscroll[0].fp_iscrollInstance.y) <= - top03 - offsetY){$('.small-nav ol li a').removeClass('active');$('.small-nav ol li:nth-child(5) a').addClass('active');}}else{if(Math.round(iscroll[0].fp_iscrollInstance.y) <= - top04 - offsetY){$('.small-nav ol li a').removeClass('active');$('.small-nav ol li:nth-child(5) a').addClass('active');}};iscroll[0].fp_iscrollInstance.on('scroll', function(){if($("#s-section-05-box").hasClass("visible")){$(".counter1").animateNumbers(7400, true, 2000, "swing");$(".counter2").animateNumbers(2846, true, 2000, "swing");$(".counter3").animateNumbers(477, true, 2000, "swing");$(".counter4").animateNumbers(2, true, 2000, "swing");};if(Math.round(this.y) <= 0){$('.small-nav ol li a').removeClass('active');$('.small-nav ol li:nth-child(1) a').addClass('active');};if(Math.round(this.y) <= - skillContItem01 - offsetY){$('.small-nav ol li a').removeClass('active');$('.small-nav ol li:nth-child(2) a').addClass('active');};if(Math.round(this.y) <= - top01 - offsetY){$('.small-nav ol li a').removeClass('active');$('.small-nav ol li:nth-child(3) a').addClass('active');};if(Math.round(this.y) <= - top02 - offsetY){$('.small-nav ol li a').removeClass('active');$('.small-nav ol li:nth-child(4) a').addClass('active');};if(winHeight < skillContItem05){if(Math.round(this.y) <= - top03 - offsetY){$('.small-nav ol li a').removeClass('active');$('.small-nav ol li:nth-child(5) a').addClass('active');}}else{if(Math.round(this.y) <= - top04 - offsetY){$('.small-nav ol li a').removeClass('active');$('.small-nav ol li:nth-child(5) a').addClass('active');}};});}
                  if(index == 9){effectList();}
              },
              onLeave: function(index, nextIndex, direction){
                  //ISCROLL Detect, Init
                  // if(nextIndex == 1){var iscrollDetect = $('#title01').find('.fp-scrollable');};if(nextIndex == 2){var iscrollDetect = $('#title_img01').find('.fp-scrollable');};if(nextIndex == 3){var iscrollDetect = $('#content01').find('.fp-scrollable');};if(nextIndex == 4){var iscrollDetect = $('#title02').find('.fp-scrollable');};if(nextIndex == 5){var iscrollDetect = $('#title_img02').find('.fp-scrollable');};if(nextIndex == 6){var iscrollDetect = $('#content02').find('.fp-scrollable');};if(nextIndex == 7){var iscrollDetect = $('#title03').find('.fp-scrollable');};if(nextIndex == 8){var iscrollDetect = $('#title_img03').find('.fp-scrollable');};if(nextIndex == 9){var iscrollDetect = $('#content03').find('.fp-scrollable');};if(iscrollDetect.length > 0){iscrollDetect[0].fp_iscrollInstance.scrollTo(0, 0, 0);};
                  //VISUAL TEXT, BUTTON ON,OFF
                  $('#section01-box .txt-box, #section01-box .bottom_btn').removeClass('visible');
                  if(nextIndex == 2){$('#section01-box .txt-box, #section01-box .bottom_btn').addClass('visible');}
                  $('#section02-1-box .txt-box, #section02-1-box .bottom_btn').removeClass('visible');
                  if(nextIndex == 5){$('#section02-1-box .txt-box, #section02-1-box .bottom_btn').addClass('visible');}
                  $('#section03-box .txt-box, #section03-box .bottom_btn').removeClass('visible');
                  if(nextIndex == 8){$('#section03-box .txt-box, #section03-box .bottom_btn').addClass('visible');}
                  //ANCHOR ON,OFF
                  $('.pagemove').removeClass('active');
                  if(nextIndex == 1 || nextIndex == 2 || nextIndex == 3){$('.pagemove.btn01').addClass('active');}
                  if(nextIndex == 4 || nextIndex == 5 || nextIndex == 6){$('.pagemove.btn02').addClass('active');}
                  if(nextIndex == 7 || nextIndex == 8 || nextIndex == 9){$('.pagemove.btn03').addClass('active');}
                  //SMALL-NAV
                  $('.small-nav').removeClass('visible');
                  //PAGE DOWN, UP
                  if(direction == 'down'){
                      if(index - nextIndex <= -1){
                          $('.header_wrap').css({'top':'-80px'});
                          $('.sub_header').css({'top':'0'});
                          $('.sub_header').delay(650).css({'z-index':101});
                          $('.top_line').css({'top':'-82px', 'opacity': '0'});
                          $('#top-btn.pc').fadeIn();
                      }
                      if(nextIndex == 3){
                          var iscroll = $('#content01').find('.fp-scrollable');
                          console.log(iscroll);
                          iscroll[0].fp_iscrollInstance.scrollTo(0, 0, 0);
                      }
                      if(nextIndex == 6){
                          var iscroll = $('#content02').find('.fp-scrollable');
                          iscroll[0].fp_iscrollInstance.scrollTo(0, 0, 0);
                          $('.small-nav').addClass('visible');
                          $('.small-nav ol li a').removeClass('active');
                          $('.small-nav ol li:nth-child(1) a').addClass('active');
                          $('.small-nav').removeClass('pd_top');
                          $('.skill_cont').css('padding-top', '72px');
                          offsetY = -72;
                      }
                  }
                  if(direction == 'up'){
                      if(index - nextIndex == 1){
                          if(index == 2 && nextIndex == 1 && direction == 'up'){
                              var status1 = $('.header_wrap').css('top');
                              var status2 = $('.sub_header').css('top');
                              if(status1 == '0px' && status2 == '80px'){
                                  $('.header_wrap').css({'top':'0'});
                                  $('.sub_header').css({'top':'0'});
                                  setTimeout( function(){$('.sub_header').css({'top':'464px', 'z-index':1, 'transition-duration':'0ms'});},700);
                                  setTimeout( function(){$('.sub_header').css({'top':'392px', 'transition-duration':'650ms'});},800);
                                  setTimeout( function(){$('.sub_header').css({'z-index':29});},1600);
                                  $('.top_line').css({'top':'0', 'opacity': '1'});
                              }else{
                                  $('.header_wrap').css({'top':'0'});
                                  $('.sub_header').css({'top':'392px'});
                                  $('.top_line').css({'top':'0', 'opacity': '1'});
                              }
                              $('#top-btn.pc').fadeOut();
                          }else{
                              $('.header_wrap').css({'top':'0'});
                              $('.sub_header').css({'top':'80px'});
                              setTimeout( function(){$('.sub_header').css({'z-index':29});},700);
                              $('.top_line').css({'top':'82px', 'opacity': '1'});
                          }
                      }
                      if(index - nextIndex > 1){
                          $('.header_wrap').css({'top':'0'});
                          $('.sub_header').css({'top':'80px'});
                          setTimeout( function(){$('.sub_header').css({'z-index':29});},700);
                          $('.top_line').css({'top':'82px', 'opacity': '1'});
                      }
                      if(nextIndex == 1 && index > 2){
                          $('#top-btn.pc').fadeOut();
                          $('.header_wrap').css({'top':'0'});
                          $('.sub_header').css({'top':'-72px'});
                          setTimeout( function(){$('.sub_header').css({'top':'464px', 'z-index':1, 'transition-duration':'0ms'});},700);
                          setTimeout( function(){$('.sub_header').css({'top':'392px', 'transition-duration':'650ms'});},800);
                          setTimeout( function(){$('.sub_header').css({'z-index':29});},1600);
                          $('.top_line').css({'top':'0', 'opacity': '0'});
                      }
                      if(nextIndex == 6){
                          $('.small-nav').addClass('visible');
                          $('.small-nav ol li a').removeClass('active');
                          $('.small-nav ol li:nth-child(1) a').addClass('active');
                          $('.small-nav').addClass('visible pd_top');
                          $('.skill_cont').css('padding-top', '152px');
                          offsetY = -152;
                      }
                  }
              },
          });
      }
  //SWIPER - 데이터센터
      var swiperHist = new Swiper('#skill_slide', {navigation: {nextEl: '.swiper-button-next',prevEl: '.swiper-button-prev',}, effect: 'fade', speed : 800, pagination: {el: '.swiper-pagination',type: 'fraction',}});
  //SCROLLMAGIC
  if(winWidth > 767){
      var controller = new ScrollMagic.Controller();
      var motion01 = new ScrollMagic.Scene({triggerElement: ".wrap.pc #content01",triggerHook: 0.8}).setClassToggle(".wrap.pc .cloud_cont h2", "visible").addTo(controller);
      var motion02 = new ScrollMagic.Scene({triggerElement: ".wrap.pc #content01 .cloud_cont ul li:nth-child(1)",triggerHook: 0.8}).setClassToggle(".wrap.pc .cloud_cont ul li:nth-child(1)", "visible").addTo(controller);
      var motion03 = new ScrollMagic.Scene({triggerElement: ".wrap.pc #content01 .cloud_cont ul li:nth-child(2)",triggerHook: 0.8}).setClassToggle(".wrap.pc .cloud_cont ul li:nth-child(2)", "visible").addTo(controller);
      var motion04 = new ScrollMagic.Scene({triggerElement: ".wrap.pc #content01 .cloud_cont ul li:nth-child(3)",triggerHook: 0.8}).setClassToggle(".wrap.pc .cloud_cont ul li:nth-child(3)", "visible").addTo(controller);
      var motion05 = new ScrollMagic.Scene({triggerElement: ".wrap.pc #content01 .cloud_cont ul li:nth-child(4)",triggerHook: 0.8}).setClassToggle(".wrap.pc .cloud_cont ul li:nth-child(4)", "visible").addTo(controller);
      var motion06 = new ScrollMagic.Scene({triggerElement: ".wrap.pc #content01 .cloud_cont ul li:nth-child(5)",triggerHook: 0.8}).setClassToggle(".wrap.pc .cloud_cont ul li:nth-child(5)", "visible").addTo(controller);
      var motion07 = new ScrollMagic.Scene({triggerElement: ".wrap.pc #content01 .cloud_cont ul li:nth-child(6)",triggerHook: 0.8}).setClassToggle(".wrap.pc .cloud_cont ul li:nth-child(6)", "visible").addTo(controller);
      var motion02_1 = new ScrollMagic.Scene({triggerElement: ".wrap.pc #title02",triggerHook: 0.8}).setClassToggle(".wrap.pc #title02", "visible").addTo(controller);
      var motion02_2 = new ScrollMagic.Scene({triggerElement: ".wrap.pc #s-section-01-box",triggerHook: 0.8}).setClassToggle(".wrap.pc #s-section-01-box .tit_box", "visible").addTo(controller);

      var motion02_3 = new ScrollMagic.Scene({
        triggerElement: ".wrap.pc .section-01-cont ul:nth-child(1) li:nth-child(1)",
        triggerHook: 0.8}).setClassToggle(".wrap.pc .section-01-cont ul:nth-child(1) li:nth-child(1)", "visible").addTo(controller);

      var motion02_4 = new ScrollMagic.Scene({
        triggerElement: ".wrap.pc .section-01-cont ul:nth-child(1) li:nth-child(1)",
        triggerHook: 0.6}).setClassToggle(".wrap.pc .section-01-cont ul:nth-child(1) li:nth-child(2)", "visible").addTo(controller);

      var motion02_5 = new ScrollMagic.Scene({
        triggerElement: ".wrap.pc .section-01-cont ul:nth-child(1) li:nth-child(2)",
        triggerHook: 0.8}).setClassToggle(".wrap.pc .section-01-cont ul:nth-child(2) li:nth-child(1)", "visible").addTo(controller);

      var motion02_6 = new ScrollMagic.Scene({
        triggerElement: ".wrap.pc .section-01-cont ul:nth-child(2) li:nth-child(1)",
        triggerHook: 0.8}).setClassToggle(".wrap.pc .section-01-cont ul:nth-child(2) li:nth-child(2)", "visible").addTo(controller);

      var motion02_7 = new ScrollMagic.Scene({
        triggerElement: ".wrap.pc .section-01-cont ul:nth-child(2) li:nth-child(2)",
        triggerHook: 0.8}).setClassToggle(".wrap.pc .section-01-cont ul:nth-child(3) li:nth-child(1)", "visible").addTo(controller);

      var motion02_8 = new ScrollMagic.Scene({triggerElement: ".wrap.pc #s-section-02-box",triggerHook: 0.8}).setClassToggle(".wrap.pc #s-section-02-box .tit_box", "visible").addTo(controller);
      var motion02_9 = new ScrollMagic.Scene({triggerElement: ".wrap.pc #s-section-02-box .section-02-cont",triggerHook: 0.8}).setClassToggle(".wrap.pc #s-section-02-box .section-02-cont, .wrap.pc #s-section-02-box .section-02-cont-txt", "visible").addTo(controller);
      var motion02_10 = new ScrollMagic.Scene({triggerElement: ".wrap.pc #s-section-03-box",triggerHook: 0.8}).setClassToggle(".wrap.pc #s-section-03-box .tit_box", "visible").addTo(controller);
      var motion02_11 = new ScrollMagic.Scene({triggerElement: ".wrap.pc #s-section-03-box .section-03-cont",triggerHook: 0.8}).setClassToggle(".wrap.pc #s-section-03-box .section-03-cont", "visible").addTo(controller);
      var motion02_12 = new ScrollMagic.Scene({triggerElement: ".wrap.pc #s-section-04-box",triggerHook: 0.8}).setClassToggle(".wrap.pc #s-section-04-box .tit_box", "visible").addTo(controller);
      var motion02_13 = new ScrollMagic.Scene({triggerElement: ".wrap.pc #s-section-04-box",triggerHook: 0.8}).setClassToggle(".wrap.pc #s-section-04-box .section-04-cont", "visible").addTo(controller);
      var motion02_14 = new ScrollMagic.Scene({triggerElement: ".wrap.pc #s-section-05-box",triggerHook: 0.8}).setClassToggle(".wrap.pc #s-section-05-box, #s-section-05-box .tit_box", "visible").addTo(controller);
      var motion02_15 = new ScrollMagic.Scene({triggerElement: ".wrap.pc #s-section-05-box",triggerHook: 0.8}).setClassToggle(".wrap.pc #s-section-05-box .section-05-cont, .wrap.pc #s-section-05-box .section-05-cont-txt", "visible").addTo(controller);
      var motion03_1 = new ScrollMagic.Scene({triggerElement: ".wrap.pc #title03",triggerHook: 0.8}).setClassToggle(".wrap.pc #title03", "visible").addTo(controller);
      var motion03_2 = new ScrollMagic.Scene({triggerElement: ".wrap.pc #content03",triggerHook: 0.8}).setClassToggle(".wrap.pc #content03", "visible").addTo(controller);
      var mobile03_3 = new ScrollMagic.Scene({triggerElement: ".wrap.pc #content03 .service_cont .tablet_card_box",triggerHook: 0.8}).setClassToggle(".wrap.pc #content03 .service_cont .tablet_card_box", "visible").addTo(controller);
  }
  //BUTTON
      //ARROW DOWN
      $("#subBtnNextOne").on("click", function() {$.fn.fullpage.moveTo(3);})
      $("#subBtnNextTwo").on("click", function() {$.fn.fullpage.moveTo(6);})
      $("#subBtnNextThree").on("click", function() {$.fn.fullpage.moveTo(9);})
      //TOP
      $('#top-btn.pc').on('click', function() {$.fn.fullpage.moveTo(1);});
      //LANGUAGE
      $(".lang_cont .lang_btn").on("click", function() {if(jQuery(this).parent('.lang_cont').hasClass('active')) {jQuery(this).parent('.lang_cont').removeClass('active');jQuery(this).next('ul').stop().slideUp(300);} else {jQuery(this).parent('.lang_cont').addClass('active');jQuery(this).next('ul').stop().slideDown(300);}})
      $(document).click(function(e){if (!$(e.target).is('.lang_cont .lang_btn')) {$('.lang_cont').removeClass('active');$('.lang_cont').find('ul').stop().slideUp(300);}});
      //FAMILYSITE
      var familySiteListWrap = jQuery('.family_site');var familySiteListBtn = jQuery('#family_list_btn');familySiteListBtn.on('click', function() {jQuery(this).parent(familySiteListWrap).toggleClass('on');jQuery(this).next().slideToggle(300);})
  //ADD-ON
      //SOLUTION MOUSE ENTER, LEAVE
      var hoverArea = jQuery('.pc.cloud .service_cont .card_box ul li');
      var hoverBox = jQuery('.pc.cloud .service_cont .card_box ul li .info');
      function findHover(ele) {return jQuery(ele).find(hoverBox).stop();}
      hoverArea.on({mouseenter: function() {findHover(this).css({visibility: 'visible', opacity: 1});jQuery(this).addClass('hover');},mouseleave: function() {findHover(this).css({visibility: 'hidden', opacity: 0});jQuery(this).removeClass('hover');}});
      //FULLPAGE ISCROLL UP/DOWN nav CONTROL
      var navCTLstatus = false;
      function navCTL(how){if(navCTLstatus == false){navCTLstatus = true;if(how == 'down'){$('.header_wrap').css({'top':'-80px'});$('.sub_header').css({'top':'0'});$('.sub_header').delay(650).css({'z-index':101});$('.top_line').css({'top':'-82px', 'opacity': '0'});$('.small-nav').removeClass('pd_top');if($('.small-nav').hasClass('visible')){$('.skill_cont').css('padding-top', '72px');offsetY = -72;}navCTLstatus = false;}else{$('.header_wrap').css({'top':'0'});$('.sub_header').css({'top':'80px'});setTimeout( function(){$('.sub_header').css({'z-index':29});},700);$('.top_line').css({'top':'82px', 'opacity': '1'});$('.small-nav').addClass('pd_top');if($('.small-nav').hasClass('visible')){$('.skill_cont').css('padding-top', '152px');offsetY = -152;}navCTLstatus = false;}}};
      //SOLUTION Show
      function effectList(){$('.pc.cloud #content03').find('.service_cont .card_box ul li').css('opacity', 0);$('.pc.cloud #content03.visible .service_cont .card_box ul').children().each(function(i, e){var $el = $(e);TweenLite.set($el,{css:{'autoAlpha':0, y:25}});TweenLite.to($el, 0.3,{ease: Power2.easeInOut, css:{'autoAlpha':1, y:0}, delay:0.1 + 0.2 * i});});}

      // if(winWidth >= 1281) {
      //   if(scrollTop > $('#title_img01').offset().top) {
      //     $('#top-btn.pc').fadeIn();
      //   } else {
      //     $('#top-btn.pc').fadeOut();
      //   }
      // }
      if(winWidth < 1281) {
        if(myFullpageCTL == true){
          if(scrollTop > $('#title_img01').offset().top) {
            $('#top-btn.tab').fadeIn();
          } else {
            $('#top-btn.tab').fadeOut();
          }
        }

      }

      if(winWidth < 767) {
        $(".sub_header.cloud-mo ul li a").click(function(){
            $('html,body').animate({scrollTop:$(this.hash).offset().top - 120}, 400);
        });

        // // PC fullpage scrollmotion
        // var controller = new ScrollMagic.Controller();
        //
        // var scene1 = new ScrollMagic.Scene({
        //     triggerElement: ".wrap.pc #content01", //트리거 설정
        //     triggerHook: 0.8
        // })
        // .setClassToggle(".wrap.pc #content01", "visible")
        // .addTo(controller)
        //
        // var scene2 = new ScrollMagic.Scene({
        //     triggerElement: ".wrap.pc #title02", //트리거 설정
        //     triggerHook: 0.8
        // })
        // .setClassToggle(".wrap.pc #title02", "visible")
        // .addTo(controller)
        //
        // var scene3 = new ScrollMagic.Scene({
        //     triggerElement: ".wrap.pc #title_img02", //트리거 설정
        //     triggerHook: 0.8
        // })
        // .setClassToggle(".wrap.pc #title_img02", "visible")
        // .addTo(controller)
        //
        // var scene4 = new ScrollMagic.Scene({
        //     triggerElement: ".wrap.pc #content02", //트리거 설정
        //     triggerHook: 0.8
        // })
        // .setClassToggle(".wrap.pc #content02", "visible")
        // .addTo(controller)
        //
        // var scene5 = new ScrollMagic.Scene({
        //     triggerElement: ".wrap.pc #title03", //트리거 설정
        //     triggerHook: 0.8
        // })
        // .setClassToggle(".wrap.pc #title03", "visible")
        // .addTo(controller)
        //
        // var scene6 = new ScrollMagic.Scene({
        //     triggerElement: ".wrap.pc #title_img03", //트리거 설정
        //     triggerHook: 0.8
        // })
        // .setClassToggle(".wrap.pc #title_img03", "visible")
        // .addTo(controller)
        //
        // var scene7 = new ScrollMagic.Scene({
        //     triggerElement: ".wrap.pc #content03", //트리거 설정
        //     triggerHook: 0.8
        // })
        // .setClassToggle(".wrap.pc #content03", "visible")
        // .addTo(controller)
      }

      // Device Header
      $(window).scroll(function () {
        cloudEvents();
      });




      var fsListe = jQuery('.wrap.mo.cloud #content03 .footer_cont.mo-foot .family_site');
      var fsListBtne = jQuery('.wrap.mo.cloud #content03 .footer_cont.mo-foot #subOpenFam');
      fsListBtne.on('click', function() {
          jQuery(this).parent(fsListe).toggleClass('on');
          jQuery(this).next().slideToggle(300);
      });

      var hamburger = jQuery('header .header_wrap .m_menu');
      var mNav = jQuery('header .header_wrap .m-nav');
      var mNavDim = jQuery('header .header_wrap .dim');
      var mNavClose = jQuery('header .header_wrap .m-nav .top a.close-btn');
      var htmlBody = jQuery('html');
      var headerWrap = jQuery('header .header_wrap .header_nav');

      hamburger.on('click', subNavCTL);

      mNavClose.on('click', function() {
          headerWrap.removeClass('active');
          mNav.removeClass('active');
          mNavDim.removeClass('on');
          htmlBody.removeClass('fixed');
      })

      function subNavCTL(){
          if(jQuery(this).hasClass('active')){
              headerWrap.removeClass('active');
              mNav.removeClass('active');
              mNavDim.removeClass('on');
              htmlBody.removeClass('fixed');
              jQuery('header .header_container').css({'z-index': '100'});

          }else{
              headerWrap.addClass('active');
              mNav.addClass('active');
              mNavDim.addClass('on');
              htmlBody.addClass('fixed');
              jQuery('header .header_container').css({'z-index': '102'});
          }
      }

      // MOBILE
      // Mslide
      var swiperCloud01 = new Swiper('#cloud_slide01', {
          speed : 800,
          pagination: {
              el: '.swiper-pagination',
          },
          slidesPerView: 1.2,
          spaceBetween: 24,
          slidesOffsetAfter:24,
      });

      var swiperCloud02 = new Swiper('#cloud_slide02', {
          speed : 800,
          pagination: {
              el: '.swiper-pagination',
          },
          slidesPerView: 1.2,
          spaceBetween: 24,
          slidesOffsetAfter:24,
      });

      var swiperCloud03 = new Swiper('#cloud_slide03', {
          slidesPerView: 1,
          spaceBetween: 24,
          speed : 800,
          pagination: {
              el: '.swiper-pagination',
          },
      });

      $(".sub_header ul li a.btn01.mo").on('click', function(event) {
        event.preventDefault();
        $('html,body').stop().animate({scrollTop:$('.pc.cloud #title_img01').offset().top - 133}, 600);
      })

      $(".sub_header ul li a.btn02.mo").on('click', function(event) {
        event.preventDefault();
        $('html,body').stop().animate({scrollTop:$('.pc.cloud #title02').offset().top - 133}, 600);
      })

      $(".sub_header ul li a.btn03.mo").on('click', function(event) {
        event.preventDefault();
        $('html,body').stop().animate({scrollTop:$('.pc.cloud #title03').offset().top - 133}, 600);
      })

      $(".pc.cloud .small-nav.inner.visible ol li a.btn10").on('click', function(event) {
        event.preventDefault();
        $('html,body').stop().animate({scrollTop:$('.pc.cloud #s-section-01-box').offset().top - 133}, 600);
      })
      $(".pc.cloud .small-nav.inner.visible ol li a.btn11").on('click', function(event) {
        event.preventDefault();
        $('html,body').stop().animate({scrollTop:$('.pc.cloud #s-section-02-box').offset().top - 133}, 600);
      })
      $(".pc.cloud .small-nav.inner.visible ol li a.btn12").on('click', function(event) {
        event.preventDefault();
        $('html,body').stop().animate({scrollTop:$('.pc.cloud #s-section-03-box').offset().top - 133}, 600);
      })
      $(".pc.cloud .small-nav.inner.visible ol li a.btn13").on('click', function(event) {
        event.preventDefault();
        $('html,body').stop().animate({scrollTop:$('.pc.cloud #s-section-04-box').offset().top - 133}, 600);
      })
      $(".pc.cloud .small-nav.inner.visible ol li a.btn14").on('click', function(event) {
        event.preventDefault();
        $('html,body').stop().animate({scrollTop:$('.pc.cloud #s-section-05-box').offset().top - 133}, 600);
      })

      // Mfaq
      $('.wrap.mo.cloud .card_box ul li strong').each(function(){
          $(this).on('click', function(){
              $('.wrap.mo.cloud .card_box ul li strong').removeClass('open');
              $(this).addClass('open');
              if($('.wrap.mo.cloud .card_box ul li .info').is(':visible')){
                  $('.wrap.mo.cloud .card_box ul li .info').slideUp('400');
                  $(' .wrap.mo.cloud.card_box ul li strong').removeClass('open');
              }
              if($(this).next('.info').is(':visible')){
                  $(this).next('.info').slideUp('400');
                  $(this).removeClass('open');
                  $('.wrap.mo.cloud .card_box ul li strong').removeClass('open');
              }else{
                  $(this).addClass('open');
                  $(this).next('.info').slideDown('400');
              }

          });
      });

      // Mcount
      if($(".wrap.mo.cloud #s-section-05-box").hasClass("visible")){
          $(".counter1").animateNumbers(7400, true, 2000, "swing");
          $(".counter2").animateNumbers(2846, true, 2000, "swing");
          $(".counter3").animateNumbers(477, true, 2000, "swing");
          $(".counter4").animateNumbers(2, true, 2000, "swing");
      }
  }
});