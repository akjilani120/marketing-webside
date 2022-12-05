$(document).ready(function(){
    $("#exzoom").exzoom({
    "navWidth": 60,
    "navHeight": 60,
    "navItemNum": 1,
    "navItemMargin": 1,
    "navBorder": 1,   

});

$('.click-button').click(function(){
    $('.navbar-nav').css('left','-20%')
  })
  $('.click-button').click(function(){
    $('.close-button').show()
  })
  $('.click-button').click(function(){
    $('.click-button').hide()
  })
  $('.close-button').click(function(){
    $('.click-button').show()
  })
  $('.close-button').click(function(){
    $('.close-button').hide()
  })
  $('.close-button').click(function(){
    $('.navbar-nav').css('left','-88%')
  })
  $('.pro-title').click(function(){
    $('.use-code').slideToggle()
  })

  $('.slider3').slick({
    dots: false,
    infinite: true,
    speed: 300,
    fade: true,
    cssEase: 'linear',
     autoplay:false,
       speed:200
  
  });
})

