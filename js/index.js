var filter = "win16|win32|win64|mac|macintel";
var mobileIs = false;

if(navigator.platform){
	if(filter.indexOf(navigator.platform.toLowerCase()) < 0){
		mobileIs = true;
	}
}

$(window).on("load",function(){

	//메인 적용
	
});


$(document).ready(function(){	

});

$(function(){
  // rollSwiper 
  var swiper = new Swiper(".rollSwiper", {
      centeredSlides: true,
      autoplay: {
      delay: 0,
      disableOnInteraction: false,
      },
      slidesPerView: "auto",
      loop: true,
      spaceBetween: 0,
      speed: 2000,
  });

 

  // overview swiper -Slides per group skip
  var swiper = new Swiper(".overviewSwiper", {
    slidesPerView: 1,
    centeredSlides: false,
    slidesPerGroupSkip: 1,
    grabCursor: true,
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      769: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
    },
    scrollbar: {
      el: ".overviewSwiper .swiper-scrollbar",
    },
  });


}); //end 
