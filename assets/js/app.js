$(() => {

    // on scroll effect / sticky navbar
    $(window).on('scroll', () => {
        var scroll = $(window).scrollTop();
        if (scroll >= 100) {
            $(".navbar").addClass("navbg");
        } else {
            $(".navbar").removeClass("navbg");

        }
    })


    // type js banner/slider typing js text
    var typed = new Typed('.bannertext', {
        strings: ['MEHEDI HASSAN JIBON', 'WEB DESIGNER', 'WEB DEVELOPER', 'GRAPHICS DESIGNER', 'UI/UX EXPERT'],
        smartBackspace: true, // Default value
        typeSpeed: 100,
        startDelay: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true,
        loopCount: Infinity,
    });


    // client/testimonial owl carousel
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

})