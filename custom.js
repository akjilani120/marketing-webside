$(document).ready(function(){
    $('.sub-categori ul li').mouseenter(function(){
        $('.rotate i').css('transform', 'rotate(180deg)')
    })
    $('.sub-categori ul li').mouseleave(function(){
        $('.rotate i').css('transform', 'rotate(0deg)')
    })
    $('.slider3').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
         autoplay:true,
           speed:200
      
      });
      $('#getcountdown').countdown('2021/05/01', function(event) {
  

        $(this).html(event.strftime('<div class="single-counter">%D<span></span></div>  <p>:</p> <div class="single-counter">%H<span></span></div> <p>:</p> <div class="single-counter">%M<span></span></div>  <p>:</p><div class="single-counter">%S<span></span></div>'));
      });
      $('.mes-text').click(function(){
        $('.mes').addClass('addclass')
      })
      $('.mes-text').click(function(){
        $('.mes-text2').css('display','block')
      })
      $('.mes-text').click(function(){
        $('.silver').css('display','block')
      })
      $('.mes-text').click(function(){
        $(this).addClass('mes-text-add')
      })
      $('.click-close').click(function(){
        $('.mes').removeClass('addclass')
      })
      $('.click-close').click(function(){
        $('.mes-text2').css('display','none')
      })
      $('.click-close').click(function(){
        $('.mes-text').addClass('mes-text')
      })

      $('.speical-menu-all').waypoint(function(direction){
        if(direction=='down'){
         $('.nav-special').addClass('sticky')
        }else{
         $('.nav-special').removeClass('sticky')
        }
      })

      $('.speical-menu-all').waypoint(function(direction){
        if(direction=='down'){
         $('.header-up').addClass('sticky2')
        }else{
         $('.header-up').removeClass('sticky2')
        }
      })

      $(window).scroll(function(){
        if($(this).scrollTop() > 450){
            $('#up-to-go').fadeIn()

        }else{
           $('#up-to-go').fadeOut()
        }
    })
   $("#up-to-go").click(function(){
       $('html, body').animate({
           scrollTop:0
       },1000)
   })

   $('.just-part').waypoint(function(direction){
    if(direction=='down'){
     $('.sub-just-part').addClass('sticky3')
    }else{
     $('.sub-just-part').removeClass('sticky3')
    }
  })
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
  
  $('.click-button').click(function(){
    $('.just-sub').hide()
  })
  $('.close-button').click(function(){
    $('.just-sub').show(2000)
  })

  
})