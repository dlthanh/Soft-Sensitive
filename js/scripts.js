$(document).ready(function() {
    new WOW().init();

    var text = 'Dịu dàng cho nàng sảng khoái';
    for(var i in text) { 
        if(text[i] === " ") {
            $('.sensi-fifthSection-title').append( $("<span>").html("&nbsp;") ); 
        } else {  
            $('.sensi-fifthSection-title').append( $("<span>").text(text[i]) ); 
        }
      }
    
    var slider = new Swiper('.sensi-slider', {
        speed: 600,
        slidesPerView: 'auto',
        centeredSlides: true,
        // width: 950,
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            425: {
                spaceBetween: 0
                // width: 300,
                // slidesPerView: 'auto',
                // centeredSlides: false
            }
        }
    })

    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
        if(scrollTop > 0) {
            $('header').addClass('fixed');            
        } else {
            $('header').removeClass('fixed'); 
        }
    })
})