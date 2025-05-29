$(document).ready(function() {
	$('.button-burger').on('click', function(){
		this.classList.toggle('active');
		$('.header-navigation').toggle('open');
	});


    $(window).resize(function() {
        width = $(window).width();
        if (width <= 1244) {
            $('.navigation .anchor-link').on('click',() => {
                $('.header-navigation').css('display', 'none');
                $('.button-burger').removeClass('active');
            });
        }
    });


	//slider menu

	$('.slick-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        // variableWidth: true,
        arrows: true,
        initialSlide: 2,
        responsive: [
            {
                breakpoint: 1245,
                settings: {
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 2

                }
            },
            {
                breakpoint: 769,
                settings: "unslick"
            }
        ]

    });


	//gallery pop-up

    $(window).resize(function() {
        width = $(window).width();
        if (width > 1244) {
            document.querySelectorAll('.gallery-list img').forEach(img =>{
                img.onclick = () => {
                    document.querySelector('.pop-up').style.display = 'block';
                    document.querySelector('.pop-up img').src = img.getAttribute('src');
                }
            });

            document.querySelector('.pop-up span').onclick = () =>{
                document.querySelector('.pop-up').style.display = 'none';
            };
        }
    });


    //mobile slider gallery

    $(window).on('resize', function(e){
        var initLib = $('.gallery-list').data('init-slider');

        if(window.innerWidth <=1244){
            if(initLib != 1){
                $('.gallery-list').slick({
                    arrows: false,
                    dots: true,
                }).data({'init-slider': 1});
            }
        }
        else {
            if(initLib == 1){
                $('.gallery-list').slick('unslick').data({'init-slider': 0});
            }
        }
    }).trigger('resize');


    //modal window

    $('.btn-modal-menu .button').on('click', () =>{
        $('.modal').css('display','block');
        $('body').css('overflow', 'hidden');
    });

    $('.modal .btn-close').on('click', () =>{
        $('.modal').css('display', 'none');
        $('body').css('overflow', 'auto');
    });


    //anchors

    $('a.anchor-link').on('click', function(event) {
        event.preventDefault();
        var sc = $(this).attr("href"),
            dn = $(sc).offset().top;

        $('html, body').animate({scrollTop: dn}, 1500);
    });


});
