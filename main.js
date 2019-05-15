$(document).ready(() => {
    $('#menubutton').on('mouseenter', () => {
    
        $('.menubutton').addClass('active');
        
    });
    
    $('.menubutton').on('click', () => {
     $('.nav').toggleClass('hide');
    }); 

    $('#menubutton').on('mouseleave', () => {
    
        $('.menubutton').removeClass('active');
        
    });
    $('.button1').on('mouseenter', () => {
     $('.button1').addClass('active')
    });
    $('.button1').on('mouseleave', () => {
        $('.button1').removeClass('active')
    });
    $('.button2').on('mouseenter', () => {
        $('.button2').addClass('active')
       });
       $('.button2').on('mouseleave', () => {
           $('.button2').removeClass('active')
       });
       $('.button3').on('mouseenter', () => {
        $('.button3').addClass('active')
       });
       $('.button3').on('mouseleave', () => {
           $('.button3').removeClass('active')
       });
       $('.button4').on('mouseenter', () => {
        $('.button4').addClass('active')
       });
       $('.button4').on('mouseleave', () => {
           $('.button4').removeClass('active')
       });
     $('.button5').on('mouseenter', () => {
        $('.button5').addClass('active')
       });
       $('.button5').on('mouseleave', () => {
           $('.button5').removeClass('active')
       });
       
       
       
    
        
    
       $(function(){
        var currentSlide = 1
        setInterval(function() {
            $('.slides').animate({marginTop: '-=100%'}, 1000, function()
            {currentSlide++;
            if (currentSlide === $('.slide').length) {
               currentSlide = 1;
                $('.slides').css(marginTop, '0%');
            }
                });
    }, 3000);
    }); 

});



/* $(function(){
    var currentSlide = 1
    setInterval(function() {
        $('.slides').animate({marginTop: '-=46%'}, 1000);}, 3000);
}); */
