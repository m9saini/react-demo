// Select Dropdown
$(document).ready(function() {
   $('select:not(.ignore)').niceSelect();      
});
// Navigation Slide
 
$(document).ready(function(){
    $(".cp-sidemenu a, .in-menus").click(function(){
        $(".cp_side-navigation").toggleClass("slide-menus");
    });
	
	$("#close").click(function(){
        $(".cp_side-navigation.slide-menus").removeClass("slide-menus");
    });
	$(".search-product").click(function(){
        $(".cp_side-navigation.slide-menus").removeClass("slide-menus");
    });
	
	$(".show-filter").click(function(){
        $(".searchfilter").toggleClass("full-filter");
    });
	$(".cancel-button").click(function(){
        $(".searchfilter.full-filter").removeClass("full-filter");
    });
});


// Navigation Slide
 
$(document).ready(function(){
    $(".flit-").click(function(){
        $(".search-map, .mobile-show-filter").toggleClass("show-map");
		$(".searchfilter.show-fi, .mobile-show-filter.show-fi").removeClass("show-fi");
    });
	
	$(".map-").click(function(){
		$(".search-map.show-map, .mobile-show-filter.show-map").removeClass("show-map");
        $(".searchfilter, .mobile-show-filter").toggleClass("show-fi");
    });
	
	$(".cancel-button").click(function(){
        $(".mobile-show-filter.show-fi, .searchfilter.show-fi").removeClass("show-fi");
    });
	
	$(".mobile-show-filter a").click(function(){
        $(".search-content").toggleClass("hide-bottom");
    });
	$(".cancel-button").click(function(){
        $(".search-content.hide-bottom").removeClass("hide-bottom");
    });
});


// search-menu
 
$(document).ready(function(){
    $(".show-firm-se").click(function(){
        $(".mobile-searching").toggleClass("slide-search");
    });
	
	$(".search-product").click(function(){
        $(".mobile-searching").toggleClass("slide-search");
    });
	
	$(".close-search").click(function(){
        $(".mobile-searching.slide-search").removeClass("slide-search");
    });
		
	$(".book-mobile").click(function(){ 
        $(".booking-right").toggleClass("book-search");
    });
	
	$(".close-search").click(function(){  
        $(".booking-right.book-search").removeClass("book-search");
    });
	
	$(".rook-booking-drop").click(function(){  
        $(".field-open-sec").slideToggle("");
    });
	
});

// OnScroll Header Fix
 function init() {
        window.addEventListener('scroll', function(e){
            var distanceY = window.pageYOffset || document.documentElement.scrollTop,
                shrinkOn = 80,
                header = document.querySelector("header");
            if (distanceY > shrinkOn) {
                classie.add(header,"smaller");
            } else {
                if (classie.has(header,"smaller")) {
                    classie.remove(header,"smaller");
                }
            }
        });
    }
window.onload = init();
//Hostels and Hotels 
function toggleChevron(e) {
    $(e.target)
        .prev('..locationwrap .panel-heading')
        .find('i.indicator')
        .toggleClass('glyphicon-chevron-down glyphicon-chevron-up');
}
$('#accordion').on('hidden.bs.collapse', toggleChevron);
$('#accordion').on('shown.bs.collapse', toggleChevron);
// Slide Product 

$('.banner-slide').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});


//Detail page slider

 $('.top-main-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  asNavFor: '.top-thumb-slider'
});
$('.top-thumb-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.top-main-slider',
  dots: false,
  arrows: false,
  centerMode: true,
  focusOnSelect: true
});


//Product detail

$('.search-list').slick();


//Goto
$(document).ready(function(){
    $(".scroll").click(function(event){
        //prevent the default action for the click event
        event.preventDefault();

        //get the full url - like mysitecom/index.htm#home
        var full_url = this.href;

        //split the url by # and get the anchor target name - home in mysitecom/index.htm#home
        var parts = full_url.split("#");
        var trgt = parts[1];

        //get the top offset of the target anchor
        var target_offset = $("#"+trgt).offset();
        var target_top = target_offset.top;

        //goto that anchor by setting the body scroll top to anchor top
        $('html, body').animate({scrollTop:target_top}, 500);
    });
});
//  Photo Booking Page
$('.photobooking').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
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
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
});
// On scroll js
  