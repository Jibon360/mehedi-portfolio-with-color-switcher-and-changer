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


  


    // client/testimonial owl carousel
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })


    // color switcher

    $(".color-switchericon").on('click', function () {
        $(".color-swithcer").toggleClass("themeswithcershow");
    })


    $(".colorbtn").each(function (param) {
        $(this).on('click', function (param) {
            let colors = $(this).attr('data-color');
            document.documentElement.style.setProperty('--theme-color', colors);
        })
    })



    $(".linebox").on('click',function(){
       $(".line").toggleClass("closebox");
    })





})




function myFunction(x) {
    x.classList.toggle("change");
  }