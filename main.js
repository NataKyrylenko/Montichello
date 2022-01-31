$(document).ready(function() {
  $('.menu__burger').click(function(event) {
      $('.menu__burger,.menu__item').toggleClass('active');
  });    
});

const transitItems = document.querySelectorAll('.banner__transit-item[data-goto], .header__link[data-goto], .banner__scroll[data-goto]');
if (transitItems.length > 0) {
  transitItems.forEach(transitItem =>{
    transitItem.addEventListener('click', onTransitItemClick);
  });

  function onTransitItemClick(e) {
    const transitItem = e.target;
    if(transitItem.dataset.goto && document.querySelector(transitItem.dataset.goto)){
      const gotoBlock = document.querySelector(transitItem.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top +pageYOffset - document.querySelector('banner');
      
      window.scrollTo({
        top:gotoBlockValue,
        behavior: "smooth"
      });
      e.preventDefault();

    }
  }
}


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
        breakpoint: 715,
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

