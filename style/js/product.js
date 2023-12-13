
var multipleItemCarousel = document.querySelector('#carouselHotSelling');

if(window.matchMedia("(min-width:992px)").matches){
    var carousel = new bootstrap.Carousel(multipleItemCarousel, {
        interval: false
      })
      
    var carouseWidth = $('.carousel-inner-test')[0].scrollWidth;
    var cardWidth = $('.carousel-item-test').width();
    
    var scrollPosition = 0;
    $('.carousel-control-next-test').on('click', function(){
        if(scrollPosition < (carouseWidth - (cardWidth * 6))){
            console.log('next');
            scrollPosition = scrollPosition + cardWidth;
            $('.carousel-inner-test').animate({scrollLeft:scrollPosition},600);
        }
    });
    
    $('.carousel-control-prev-test').on('click', function(){
        if(scrollPosition > 0){
            console.log('prev');
            scrollPosition = scrollPosition - cardWidth;
            $('.carousel-inner-test').animate({scrollLeft:scrollPosition},600);
        }
    });
}else{
    // $(multipleItemCarousel).addClass('slide');
    var carousel = new bootstrap.Carousel(multipleItemCarousel, {
        interval: false
      })
      
    var carouseWidth = $('.carousel-inner-test')[0].scrollWidth;
    var cardWidth = $('.carousel-item-test').width();
    
    var scrollPosition = 0;
    $('.carousel-control-next-test').on('click', function(){
        if(scrollPosition < (carouseWidth - (cardWidth * 3))){
            console.log('next');
            scrollPosition = scrollPosition + cardWidth;
            $('.carousel-inner-test').animate({scrollLeft:scrollPosition},600);
        }
    });
    
    $('.carousel-control-prev-test').on('click', function(){
        if(scrollPosition > 0){
            console.log('prev');
            scrollPosition = scrollPosition - cardWidth;
            $('.carousel-inner-test').animate({scrollLeft:scrollPosition},600);
        }
    });
}

