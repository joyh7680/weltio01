// header footer btn popup 


$(function(){

    // lang tab hover ani 
    $('header .gnb_area .lang').mouseover(function(e){
        e.preventDefault();
        $('header .gnb_area .lang_tab .lang_arrow').addClass('on');
        $('header .gnb_area .lang .lang_toggle').addClass('on');
    })
    $('header .gnb_area .lang').mouseout(function(e){
        e.preventDefault();
        $('header .gnb_area .lang_tab .lang_arrow').removeClass('on');
        $('header .gnb_area .lang .lang_toggle').removeClass('on');
    })

    // 다운로드 버튼 누르면 
    $('header .gnb_area .btn_download').click(function(e){
        e.preventDefault();
        $('.popUp_download').addClass('on');
        $('.popUp_download .popUp_bg').addClass('on');
        $('.popUp_download .popUp_box').addClass('on');
        $('.popUp_download .popUp_box .btn_close_wrap').addClass('on');
    });
    // 큐알코드 닫기 버튼 누르면 
    $('.popUp_download .popUp_box .btn_close_wrap').click(function(e){
        $('.popUp_download').removeClass('on');
        $('.popUp_download .popUp_bg').removeClass('on');
        $('.popUp_download .popUp_box').removeClass('on');
        $('.popUp_download .popUp_box .btn_close_wrap').removeClass('on');
    });

    // btn link wrap 
    // 애플 링크 호버시 에니메이션 
    $('main .link_wrap .link.apple').mouseover(function(e){
        e.preventDefault();
        $('main  .link_wrap  .link .icon_apple').addClass('on');
    });
    $('main .link_wrap .link.apple').mouseout(function(e){
        e.preventDefault();
        $('main  .link_wrap  .link .icon_apple').removeClass('on');
    });

    // 구글 링크 호버시 에니메이션 
    $('main .link_wrap .link.google').mouseover(function(e){
        e.preventDefault();
        $('main .link_wrap .link .icon_google').addClass('on');
    });
    $('main .link_wrap .link.google').mouseout(function(e){
        e.preventDefault();
        $('main .link_wrap .link .icon_google').removeClass('on');
    });


     // <!-- featureSwiper Swiper -->
     var swiper = new Swiper(".pagesSwiper", {
        direction: "vertical",
        slidesPerView: 1,
        spaceBetween: 30,
        mousewheel: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
          },
        },
      });


    // sns hover 
    $('footer .sns_wrap .sns.facebook').mouseover(function(e){
        e.preventDefault();
        $('footer .sns_wrap .sns .logo_facebook').addClass('on');
    });
    $('footer .sns_wrap .sns.facebook').mouseout(function(e){
        e.preventDefault();
        $('footer .sns_wrap .sns .logo_facebook').removeClass('on');
    });

    $('footer .sns_wrap .sns.instagram').mouseover(function(e){
        e.preventDefault();
        $('footer .sns_wrap .sns .logo_instagram').addClass('on');
    });
    $('footer .sns_wrap .sns.instagram').mouseout(function(e){
        e.preventDefault();
        $('footer .sns_wrap .sns .logo_instagram').removeClass('on');
    });

    $('footer .sns_wrap .sns.linkedin').mouseover(function(e){
        e.preventDefault();
        $('footer .sns_wrap .sns .logo_linkedin').addClass('on');
    });
    $('footer .sns_wrap .sns.linkedin').mouseout(function(e){
        e.preventDefault();
        $('footer .sns_wrap .sns .logo_linkedin').removeClass('on');
    });




  }); //end