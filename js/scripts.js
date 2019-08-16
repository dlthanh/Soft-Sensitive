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

        if(scrollTop >= $('video').offset().top - 300) {
            $('video')[0].play();
        }
		
		if(scrollTop >= $('video').offset().top + $('video').height()) {
            $('video')[0].pause();
        }
    })

    $('.nav-link').click(function () {
        $('.nav-link').parent().removeClass('active');
        $(this).parent().addClass('active');

        var data = $(this).attr('data-id'),
            offset = $('div[data-scroll="'+data+'"]').offset().top;

        $('html, body').animate({
            scrollTop: offset - 100
        }, 600)
    })

    if($(window).width() > 560) {
        $('.sensi-seventhSection-main .item').hover(function() {
            $('.sensi-seventhSection-main .item-text').removeClass('show');
            $(this).next().addClass('show');
        }, function() {
            $(this).next().removeClass('show');
        })
    } else {
        $('.sensi-seventhSection-main .item').click(function() {
            $('.sensi-seventhSection-main .item-text').removeClass('show');
            $(this).next().addClass('show');
        })
    }
	
	var url = 'https://docs.google.com/forms/u/1/d/e/1FAIpQLScWpGTj67LQ9bX-fpBI9d3XvcR6hWDoAAFclyxexgTph9CoQA/formResponse';
    url = btoa(url);
    $('.sensi-guide .sensi-btn, .btn-primary').click(function(e) {
        e.preventDefault();
        var name = $(this).parents('[data-contact]').find('#name').val(),
            phone = $(this).parents('[data-contact]').find('#phone').val(),
            email = $(this).parents('[data-contact]').find('#email').val();
            message = $(this).parents('[data-contact]').find('#message').val();
        $.ajax({
            url: atob(url),
            type: 'POST',
            dataType: "xml",
            data: {
                'entry.703132407': name,
                'entry.1887691035': phone,
                'entry.266763285': email,
				'entry.1388027430': message
            }
        });
        setTimeout(function() {
            alert('Gửi thông tin thành công.\nChúng tôi sẽ liên hệ với bạn sớm nhất.');
        }, 1000)
    });
})
