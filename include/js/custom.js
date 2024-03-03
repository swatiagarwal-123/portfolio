jQuery(document).ready(function($){


/*==========================*/  
/* sidebar */  
/*==========================*/
$('.menu-btn').on('click', function() {
    $('body').toggleClass('show-menu');    
});

$('.overlay-bg , .close-menu,.js-scroll-trigger').on('click', function() {
    $('body').removeClass('show-menu');
});



/*==========================*/  
/* Scroll on animate */  
/*==========================*/
function onScrollInit( items, trigger ) {
  items.each( function() {
    var osElement = $(this),
        osAnimationClass = osElement.attr('data-os-animation'),
        osAnimationDelay = osElement.attr('data-os-animation-delay');
      
        osElement.css({
          '-webkit-animation-delay':  osAnimationDelay,
          '-moz-animation-delay':     osAnimationDelay,
          'animation-delay':          osAnimationDelay
        });

        var osTrigger = ( trigger ) ? trigger : osElement;
        
        osTrigger.waypoint(function() {
          osElement.addClass('animated').addClass(osAnimationClass);
          },{
              triggerOnce: true,
              offset: '92%',
        });
 
  
  });

}

 onScrollInit( $('.os-animation') );
 onScrollInit( $('.staggered-animation'), $('.staggered-animation-container') );




/*==========================*/  
/* work slider */  
/*==========================*/
$('.testimonial-box').owlCarousel({
    loop:true,
    autoWidth:false,
    nav:false,
    dots:false,
    autoPlay : 500, 
    autoplay: true,
    items: 1,
    animateOut: 'fadeOut',
    itemsscroll:1,
    responsive:{
        0:{
            items:1,
            nav:false,
            dots:true
        },
        600:{
            items:1,
            nav:false,
            dots:false
        },
        1000:{
            items:1,
            nav:false,
            dots:false
        }     
    }
});




/*==========================*/  
/* section */  
/*==========================*/
$('.js-scroll-trigger:not(:first)').addClass('inactive');
    $('section').hide();
    $('section:first').show();        
    $('.js-scroll-trigger').click(function(){
      if($(this).hasClass('inactive')){
        $('.js-scroll-trigger').addClass('inactive');           
        $(this).removeClass('inactive');        
        $('section').hide();
        $('#'+ $(this).attr('id') + 'C').fadeIn('slow');
     }
     
    });


/*==========================*/  
/* Lighbox */ 
/*==========================*/  
$('.project-list').magnificPopup({
  delegate: '.zoom-icon', // child items selector, by clicking on it popup will open
  type: 'image',
  // other options
  gallery: {
  enabled: true,
  preload: [0,2], 
  removalDelay: 300,
  navigateByImgClick: true,
  titleSrc: 'title', 
  arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button

  tPrev: 'Previous (Left arrow key)', // title for left button
  tNext: 'Next (Right arrow key)', // title for right button
  tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
}
});



  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });

  
/*==========================*/ 
/* Popup with video  */ 
/*==========================*/

  $('.play-btn').magnificPopup({
    type : 'iframe',
    iframe: {
  markup: '<div class="mfp-iframe-scaler">'+
            '<div class="mfp-close"></div>'+
            '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
          '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button

  patterns: {
    youtube: {
      index: 'youtube.com/', 

      id: 'v=', 

      src: 'https://www.youtube.com/embed/%id%?autoplay=1' 
    },
    vimeo: {
      index: 'vimeo.com/',
      id: '/',
      src: '//player.vimeo.com/video/%id%?autoplay=1'
    },
    gmaps: {
      index: '//maps.google.',
      src: '%id%&output=embed'
    }

  },

  srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
}
});
 

/*==========================*/  
/* Skill Bar Animate */  
/*==========================*/
jQuery('.skillbar').each(function(){
    jQuery(this).find('.skillbar-bar').animate({
        width:jQuery(this).attr('data-percent')
    },4000);
});


  
/*==========================*/  
/* Google Map */  
/*==========================*/
  if($('#map-canvas').length != 0){
    var map;
    function initialize() {
      var mapOptions = {
        zoom: 18,
        scrollwheel: false,
        center: new google.maps.LatLng(25.931743, 83.567199),
        styles: [
              {"stylers": [{ hue: "#00bcb4" },
              { saturation: 0 },
              { lightness: 0 }]},
              {
                "featureType": "road",
                "elementType": "labels",
                "stylers": [{"visibility": "off"}]
              },
              {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [{"lightness": 100},
                      {"visibility": "simplified"}]
              }
        ]
      };
      map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
      var image = 'include/images/map-marker.png';
      var myLatLng = new google.maps.LatLng(25.931743, 83.567199);
      var beachMarker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: image
       });
    }

    google.maps.event.addDomListener(window, 'load', initialize);
  }



/*==========================*/  
/* Form Validation */ 
/*==========================*/

        $("#messageForm").validate({
      
       submitHandler: function(form) {
                $(form).ajaxSubmit({
                    type: "POST",
                    data: $(form).serialize(),
                    url: "mail.php",
                    success: function() {
                        $('#messageForm').addClass('hide');
                        $('#messageForm').slideUp("slow", function() {
                            $('#success').slideDown();
               
                        });
                    },
                    error: function() {
            $('#messageForm').addClass('hide');
                        $('#messageForm').slideUp("slow", function() {
                            $('#error').slideDown();
               
                        });
                    }
                });
            } 
    });



  /*==========================*/ 
/*scroll top */  
/*==========================*/
if ($('.scroll-top-arrow').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('.scroll-top-arrow').addClass('show');
            } else {
                $('.scroll-top-arrow').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('.arrow-up').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}





/*==========================*/
/* Header fix */
/*==========================*/
var scroll = $(window).scrollTop();

    if (scroll >= 60) {
        $("body").addClass("fixed");
    } else {
        $("body").removeClass("fixed");
    }

});



$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 60) {
        $("body").addClass("fixed");
    } else {
        $("body").removeClass("fixed");
    }


});
