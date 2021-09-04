/*Event Carousel*/
$(document).ready(function(){
    $(window).on("scroll",function(){
        if ($(this).scrollTop() > 90) {
            $(".navbar").addClass("sticky");
        }else{
            $(".navbar").removeClass("sticky");
        }
    });

    $(window).bind('DOMContentLoaded load resize', function() {
        // pengecekan ukuran width window, bila widthnya lebih kecil atau sama dengan 500
        if($(window).innerWidth() <= 500) {
           // Kita remove class navbar-fixed
           $('#particles-js').removeClass('particles-js');
        }else{
           // diluar dari kondisi diatas kita akan add class navbar-fixed
           $('#particles-js').addClass('particles-js');
        }
     });

    $('.events-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    });

    $('.member-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:5,
            }
        }
    });
})
