$(window).scroll(function() {
    $('.about-us__block').each(function(){
        let imagePos = $(this).offset().top;

        let topOfWindow = $(window).scrollTop();
        if(imagePos < topOfWindow+650) {
            $(this).addClass("animate__fadeInRight");
        } 
    });
});

$(window).scroll(function() {
    $('.our-services__title').each(function(){
        let imagePos = $(this).offset().top;

        let topOfWindow = $(window).scrollTop();
        if(imagePos < topOfWindow+650) {
            $(this).addClass("animate__fadeInLeft");
        } 
    });
});
