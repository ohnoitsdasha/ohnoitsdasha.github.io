$(document).ready(function(){

  $(window).on('load', function () {
    $preloader = $('#loader'),
      $loader = $preloader.find('.loader');
    $loader.fadeOut();
    $preloader.delay(350).fadeOut('slow');
  });
 
  //This one for desktop-menu smooth and fixed color
    $("#menu").on("click", ".menu-item", function(){
      $("#menu .menu-item").removeClass("active");
      $(this).addClass("active");
  });
    $("#menu").on("click", "a", function (event) {
      event.preventDefault();
      var id = $(this).attr('href'),
      top = $(id).offset().top;
    $ ('body, html').animate({scrollTop: top}, 1300);
  });

  //this one for mobile-menu hamburger
    $(function() {
      function slideMenu() {
      var activeState = $("#mobile-menu-container .menu-list").hasClass("active");
      $("#mobile-menu-container .menu-list").animate({left: activeState ? "0%" : "-100%"}, 400);
    }
    $("#menu-wrapper").click(function(event) {
      event.stopPropagation();
      $("#hamburger-menu").toggleClass("open");
      $("#mobile-menu-container .menu-list").toggleClass("active");
      slideMenu();
  
      $("body").toggleClass("overflow-hidden");
    });
  
    $(".menu-list").find(".accordion-toggle").click(function() {
      $(this).next().toggleClass("open").slideToggle("fast");
      $(this).toggleClass("active-tab").find(".menu-link").toggleClass("active");
      $(".menu-list .accordion-content").not($(this).next()).slideUp("fast").removeClass("open");
      $(".menu-list .accordion-toggle").not(jQuery(this)).removeClass("active-tab").find(".menu-link").removeClass("active");
    });
  }); 

    // this one for header slider
    $(".slider").owlCarousel({
      items: 1,
      loop: true,
      dots: true,
      autoplay: true,
      autoplayTimeout: 8000,
      smartSpeed: 3500,
      autoplayHoverPause: true,
      responsive: {
        0: {
            touchDrag: false,
        },
        320: {
          touchDrag: false,     
        },
        950: {
          touchDrag: true,         
        }
      }  
  });


   //this one for synced slider of our-barbers
    var sync1 = $("#selected-barber");
    var sync2 = $("#selected-barber-nav");
    var slidesPerPage = 4; //globaly define number of elements per page
    var syncedSecondary = true;
  
    sync1.owlCarousel({
      items : 1,
      mouseDrag: false,
      touchDrag: false,
      slideSpeed : 2000,
      nav: false,
      autoplay: false,
      dots: false,
      loop: true,
      responsiveRefreshRate : 200,
      animateOut: 'fadeOut',
      smartSpeed: 1,
      
      
    }).on('changed.owl.carousel', syncPosition);
  
    sync2
      .on('initialized.owl.carousel', function () {
        sync2.find(".owl-item").eq(0).addClass("current");
      })
      .owlCarousel({
      items : slidesPerPage,
      mouseDrag: false,
      touchDrag: false,
      dots: false,
      nav: true,
      navText: ['<i class="fas fa-chevron-left icon-prev"></i>','<i class="fas fa-chevron-right icon-next"></i>'],
      smartSpeed: 1000,
      slideSpeed : 500,
      slideBy: slidesPerPage, 
      responsiveRefreshRate : 100,
      paginationSpeed: 1000,
      responsive: {
          0: {
              items: 1,
              nav: true
          },
          320: {
              items: 2,
              nav: true
          },
          850: {
              items: 4,
              nav: false
          }
      }
    }).on('changed.owl.carousel', syncPosition2);
  
    function syncPosition(el) {
      //if false,  restore line
     //var current = el.item.index;
      
   
      var count = el.item.count-1;
      var current = Math.round(el.item.index - (el.item.count/2) - .5);
      
      if(current < 0) {
        current = count;
      }
      if(current > count) {
        current = 0;
      }
    
      sync2
        .find(".owl-item")
        .removeClass("current")
        .eq(current)
        .addClass("current");
      var onscreen = sync2.find('.owl-item.active').length - 1;
      var start = sync2.find('.owl-item.active').first().index();
      var end = sync2.find('.owl-item.active').last().index();
      
      if (current > end) {
        sync2.data('owl.carousel').to(current, 100, true);
      }
      if (current < start) {
        sync2.data('owl.carousel').to(current - onscreen, 100, true);
      }
    }
    
    function syncPosition2(el) {
      if(syncedSecondary) {
        var number = el.item.index;
        sync1.data('owl.carousel').to(number, 100, true);
      }
    }
    
    sync2.on("click", ".owl-item", function(e){
      e.preventDefault();
      var number = $(this).index();
      sync1.data('owl.carousel').to(number, 300, true);
    });
  });

    //this one for map


  var map = L.map('map')
  .setView([50.452606, 30.517355], 19);

L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var franklinicon = L.icon({
    iconUrl: 'f_map.png',
    iconSize:     [20, 30], // size of the icon
});




L.marker([50.452606, 30.517355], {icon: franklinicon}).addTo(map);