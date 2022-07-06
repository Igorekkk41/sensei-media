$(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 2,
        responsive: [
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 1, 
                }
            }
        ]
    });
});
