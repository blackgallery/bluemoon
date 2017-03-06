$(document).ready(function($) {

    'use strict';

    /* =======================================
           single Page Nav
       =======================================*/
    // The actual plugin
    $('.single-page-nav').singlePageNav({
        offset: $('.single-page-nav').outerHeight(),
        filter: ':not(.external)',
        updateHash: true,
    });
    /*=======================================
             Header Section
        ========================================== */
    $(document).ready(function() {
        $(".search_icon").on('click', function() {
            $(".search_icon_inr").slideToggle();
        });
        $(".shop_setting").on('click', function() {
            $(".shop_setting_inr").slideToggle();
        });
    });
    /*=======================================
       Nivo Slider 
    ======================================= */
    $('#mainslider').nivoSlider({
        directionNav: false,
        animSpeed: 500,
        effect: 'random',
        slices: 18,
        pauseTime: 10000,
        pauseOnHover: false,
        controlNav: true,
        prevText: '<i class="flaticon-left-arrow-angle"></i>',
        nextText: '<i class="flaticon-right-arrow-angle"></i>'
    });

    /*=======================================
           Menu Modal
       =======================================*/
    if ($(".menuButon").length > 0) {
        $("#openMenu").animatedModal({
            modalTarget: 'menuModal',
            animatedIn: 'bounceInDown',
            animatedOut: 'bounceOutUp',
            color: '#3498db'
        });
    }

    /*=======================================
          Load More                
    ======================================= */
    $(document).on('click', '#test2', function() {
        $("#demo2").slideToggle(500);
        $("#demo3").slideToggle(500);
    });

    /*=======================================
         TESTIMONIAL CAROUSE                 
    ======================================= */
    $('#testimonial').owlCarousel({
        loop: true,
        center: true,
        stagePadding: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: true
            },
            767: {
                items: 3,
                dots: false,
                nav: true,
                navText: [" <i class='arrow_carrot-left'></i> ", " <i class='arrow_carrot-right'></i> "]
            }
        }
    });

 
	
	/*=======================================
		Client Section  
	=======================================*/
    $("#client").owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 6 seconds
        autoplay: true,
        smartSpeed: 1000, // Default is 250
        items: 5,
        loop: true,
        touchDrag: true,
        mouseDrag: true,
        pagination: true,
        dots: false,
        nav: true,
		navText: ['<i class="arrow_carrot-left"></i>', '<i class="arrow_carrot-right"></i>'],
    });
	
    /*=======================================
         PRELOADER                     
    ======================================= */
	$(window).on('load', function() {
        $('#preloader').fadeOut('slow', function() {
            $(this).remove();
        });
    });

    /*==========================================
         Skill BAR
    ============================================*/
    $('.skillbar').each(function() {
        $(this).find('.skillbar-bar').animate({
            width: $(this).attr('data-percent')
        }, 6000);
    });

    /* =======================================
    		WOW ANIMATION
    ======================================= */
    var wow = new WOW({
        mobile: false
    });
    wow.init();


    /* =======================================
            collapse the navbar on scroll
        =======================================*/
    // jQuery to collapse the navbar on scroll
    $(window).on('scroll', function() {
        if ($(".navbar").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }
    });

    /*=======================================
        Scroll Top
    =======================================*/
    $("#scrollup").on('click', function() {
        $('html,body').animate({
            'scrollTop': '0'
        }, 4000);
        return false;
    });


    /*=======================
			PRODUCT MODAL 
		=========================*/
    $('[data-remodal-id=productModal]').remodal({});

    /* =======================================
          Gallery Section : mixItUp jQuery 
    =======================================*/
    $('.project-list').mixItUp({
        animation: {
            effects: 'fade stagger(50ms)',
            reverseOut: true,
            staggerSequence: function(i) {
                return (2 * i) - (5 * ((i / 3) - ((1 / 3) * (i % 3))));
            }
        }
    });


});