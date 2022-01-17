$(function() {
        $('.animate-rotate-1').animatedHeadline({
            animationType: 'rotate-1'
        });

        $('.animate-type').animatedHeadline({
            animationType: 'type'
        });

        $('.animate-rotate-2').animatedHeadline({
            animationType: 'rotate-2'
        });

        $('.animate-loading-bar').animatedHeadline({
            animationType: 'loading-bar'
        });

        $('.animate-slide').animatedHeadline({
            animationType: 'slide'
        });

        $('.animate-clip').animatedHeadline({
            animationType: 'clip'
        });

        $('.animate-zoom').animatedHeadline({
            animationType: 'zoom'
        });

        $('.animate-rotate-3').animatedHeadline({
            animationType: 'rotate-3'
        });

        $('.animate-scale').animatedHeadline({
            animationType: 'scale'
        });

        $('.animate-push').animatedHeadline({
            animationType: 'push'
        });
    });


    $(".slider1").slick({
        fade:true,
        asNavFor:'.slider_side',
         arrows:false,
         asNavFor:".slider2",
         
    });
    $(".slider2").slick({
        slidesToShow: 3,
        prevArrow: '<i class="fas fa-chevron-left prev"></i>',
        nextArrow: '<i class="fas fa-chevron-right next"></i>',
        asNavFor:".slider1",
        centerMode:true,
        centerPadding:"0px"
    })

     
    
     
// ============ Level 1 ==============

 
$('.item22').mouseenter(function(){
    $('.item22 .round1').css('box-shadow','0px 0px 0px 10px #5f24ef ');
    $('.item22 .round1').css('opacity','.5');

    // ======
    $('.item6 .round1').css('transform','scale(1.4)')
    $('.line2').css('width','37%')
    
    $('.item2 .two').css('color','#5f24ef')
})

$('.item22').mouseleave(function(){
    $('.item22 .round1').css('box-shadow','0px 0px 0px 0px #5f24ef');
    $('.item22 .round1').css('opacity','.5');

    // =======
    $('.item6 .round1').css('transform','scale(.7)');
    $('.line2').css('width','12%')
    $('.item2 .two').css('color','#1c0e3e')
    
})


// ============ Level 2 ==============

 
$('.item3').mouseenter(function(){
    $('.item22 .round1').css('box-shadow','0px 0px 0px 10px #5f24ef ');
    $('.item22 .round1').css('opacity','.5');
    $('.item3 .round1').css('box-shadow','0px 0px 0px 10px #5f24ef ');
    $('.item3 .round1').css('opacity','.5');

    // ======
    $('.item6 .round1').css('transform','scale(1.4)')
    $('.item7 .round1').css('transform','scale(1.4)')
    $('.line2').css('width','63%')

    $('.item2 .two').css('color','#5f24ef')
    $('.item2 .three').css('color','#5f24ef')
})

$('.item3').mouseleave(function(){
    $('.item22 .round1').css('box-shadow','0px 0px 0px 0px #5f24ef');
    $('.item22 .round1').css('opacity','.5');
    $('.item3 .round1').css('box-shadow','0px 0px 0px 0px #5f24ef ');
    $('.item3 .round1').css('opacity','.5');

    // =======
    $('.item6 .round1').css('transform','scale(.7)');
    $('.item7 .round1').css('transform','scale(.7)')
    $('.line2').css('width','12%')

    $('.item2 .two').css('color','#1c0e3e')
    $('.item2 .three').css('color','#1c0e3e')
    
})

 

 


// ============ Level 3 ==============

 
$('.item4').mouseenter(function(){
    $('.item22 .round1').css('box-shadow','0px 0px 0px 10px #5f24ef ');
    $('.item22 .round1').css('opacity','.5');
    $('.item3 .round1').css('box-shadow','0px 0px 0px 10px #5f24ef ');
    $('.item3 .round1').css('opacity','.5');
    $('.item4 .round1').css('box-shadow','0px 0px 0px 10px #5f24ef ');
    $('.item4 .round1').css('opacity','.5');


    // ======
    $('.item6 .round1').css('transform','scale(1.4)')
    $('.item7 .round1').css('transform','scale(1.4)')
    $('.item8 .round1').css('transform','scale(1.4)')
    $('.line2').css('width','100%')

    $('.item2 .two').css('color','#5f24ef')
    $('.item2 .three').css('color','#5f24ef')
    $('.item2 .four').css('color','#5f24ef')
})

$('.item4').mouseleave(function(){
    $('.item22 .round1').css('box-shadow','0px 0px 0px 0px #5f24ef');
    $('.item22 .round1').css('opacity','.5');
    $('.item3 .round1').css('box-shadow','0px 0px 0px 0px #5f24ef ');
    $('.item3 .round1').css('opacity','.5');
    $('.item4 .round1').css('box-shadow','0px 0px 0px 0px #5f24ef ');
    $('.item4 .round1').css('opacity','.5');

    // =======
    $('.item6 .round1').css('transform','scale(.7)');
    $('.item7 .round1').css('transform','scale(.7)');
    $('.item8 .round1').css('transform','scale(.7)');
    $('.line2').css('width','12%');

    $('.item2 .two').css('color','#1c0e3e');
    $('.item2 .three').css('color','#1c0e3e');
    $('.item2 .four').css('color','#1c0e3e');
    
})



$('.testi-slider').slick({
    fade:true,
    arrows:false,
    asNavFor:'.testi-slider2',
    
     
});
$('.testi-slider2').slick({
    slidesToShow:5,
    asNavFor:'.testi-slider',
    centerMode:true,
    centerPadding:true,
    prevArrow:"<i class='fas fa-chevron-left prev'></i>",
    nextArrow:"<i class='fas fa-chevron-right next'></i>",
    focusOnSelect: true,
    
    
     
});

$('#bar1').barfiller({
    animateOnResize: true,
});
$('#bar2').barfiller();
$('#bar3').barfiller();
$('#bar4').barfiller();
$('#bar5').barfiller();
$('#bar6').barfiller();



// setTimeout(function(){
//     $('.preloader').fadeOut()
// },4000)

  AOS.init();

 






   

    

     