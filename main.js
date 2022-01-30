$(document).ready(function() {
  $('.menu__burger').click(function(event) {
      $('.menu__burger,.menu__item').toggleClass('active');
  });    
});



$(document).ready(function(){
    $('.slick-slider').slick({
    infinite:true,  
    arrows: true,
    dots:true,
    autoplay:true,
    autoplaySpeed: 3000,
    slidesToShow: 3, 
    slidesToScroll: 1,
    prevArrow: '<span class="priv_arrow"><i class="fas fa-angle-left"></i></span>',
    nextArrow: '<span class="next_arrow"><i class="fas fa-angle-right"></i></span>',
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 775,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
})
});


let map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 40.6690343, lng: -73.8691217 },
    zoom: 12,
  });
}

