const initCarousel = () => {
    $('.single-carousel').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
    });
    
    $('.responsive-carousel').slick({
        autoplay: false,
        autoplaySpeed: 3000,
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 6,
        slidesToScroll: 6,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: false
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ],
        prevArrow: '<button class= "slick-prev"><i class=" fa fa-angle-left"></i></button>',
        nextArrow: '<button class= "slick-next"><i class=" fa fa-angle-right"></i></button>'
    });
}