$(function(){

  //메뉴//
  $(".nav>ul>li").mouseover(function(){
    $(this).find(".sub").stop().slideDown()
  })
  $(".nav>ul>li").mouseout(function(){
    $(this).find(".sub").stop().slideUp()
  })


  //슬라이드//
  var i = 0

  function slide(){
    if(i<2){
      i++
    }else{
      i=0
    }

  $(".slider ul li").stop(true, true).fadeOut()
  $(".slider ul li").eq(i).stop(true, true).fadeIn()
  }
  
  setInterval(slide,2000)


  //팝업//
  $("button").click(function(){
    $(".popup").hide()
  })

  
  //스크롤//
  $(window).on('scroll', function () {
    $('.scroll-target').each(function () {
      var $el = $(this);
      var scrollTop = $(window).scrollTop();
      var windowHeight = $(window).height();
      var offsetTop = $el.offset().top;

      if (scrollTop + windowHeight > offsetTop + 50) {
        if (!$el.hasClass('show')) {
          $el.addClass('show');
        }
      }
    });
  });

})