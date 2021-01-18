$(document).ready(function(){
    //slider height
    $('.owl-carousel .item').height($(window).height())
    $(window).resize(function(){
        $('.owl-carousel .item').height($(window).height())

    })


    //owl carsousel
    $('.header .owl-carousel').owlCarousel({
        loop:true,
        items: 1,
        autoplay:true,
        fadeout: true,
        smartspeed: 450,
    })
    //owl carsousel
    $('.brands .owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        responsive:{0: {items:2}, 768 :{items:4}, 992 :{items:6}},
    })
    //sidemenu
    $('.menu').on('click',function(){
        $('.side-menu').toggleClass('open')
    })
    $('.fa-times').on('click',function(){
        $('.side-menu').removeClass('open')
    })
    //toggle navs
    $(window).scroll(function(){
        if($(this).scrollTop()>= 30){
            $('.nav-left').fadeOut(500);
            $('.nav-right').fadeOut(500);
            $('.nav-top').fadeIn(500);
        }
        else{
            $('.nav-left').fadeIn(500);
            $('.nav-right').fadeIn(500);
            $('.nav-top').fadeOut(500);
        }
        //button-up
        if($(window).scrollTop()>= 1000){
            $('.up').fadeIn(500);
        }
        else{
            $('.up').fadeOut(500);
        }
    })

    //button-up scroll
    $('.up').on('click', function(){

        $('body,html').animate({

            scrollTop: 0

        },500)
    })

    //couner up
    const counters = document.querySelectorAll('.about .num');
    const delay =112;

    counters.forEach(counter => {
        const updatecount = () => {
            const target = counter.getAttribute('data-target');
            const count =+ counter.innerHTML;
            const speed = target/delay;

           if(count < target)
           {
            counter.innerHTML = Math.floor(count + speed);
            setTimeout(updatecount,1);
           }
           else
           {
               counter.innerHTML = target;
           }
            

        }

        updatecount();
    })

    //countdown
    var content = $('.count-down').html();
    console.log(content);

    $('.count-down').countdown('2021/01/01', function(event) {
        $(this).html(event.strftime('content'));
      });


})
//animation
VanillaTilt.init(document.querySelectorAll(".box-cart"), {
    max: 25,
    speed: 400
});