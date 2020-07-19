$(document).ready(function() {

   AOS.init({
      duration: 1200
   });

   /*-- NAVIGRATION --*/
   $("#hamburger").click(function() {
      $(this).toggleClass("active");
   })

   $(".nav-link").click(function(){
      $(".navbar-collapse").collapse("hide");
      $("#hamburger").removeClass("active");
   });

   $(".nav-item > a").click(function() {
      $(".nav-item > a").removeClass("active");
      $(this).addClass("active");
   });

   $(window).scroll(function() {
      var st = $(this).scrollTop();
      if( st > 10 ) {
         $(".navbar").css({
            background: "linear-gradient(90deg, #2f32d4 0%,#7142f7 100% )"
         });
         $(".collapse").css({
            background: "none"
         });
      } else {
         $(".navbar").css({
            background: "none"
         });
         $("#hamburger").click(function() {
            $(".navbar").css({
               background: "linear-gradient(90deg, #2f32d4 0%,#7142f7 100% )"
            });
         })
      }
   });

  /*-- HOME SECTION TYPED PLUGIN --*/
  var typed = new Typed(".type", {
     strings: ["greater then before"],
     typeSpeed: 60,
     backSpeed: 60,
     loop: true
  });

  /*-- SERVICES SECTION COUNTERUP PLUGIN --*/
  $(".counter").counterUp({
     delay: 10,
     time: 2000
  });

  /*-- PORTFOLIO SECTION MIXITUP PLUGIN --*/
  var mixer = mixitup('#portfolio');

     /*-- TESTIMONIAL SECTION OWL CAROUSEL PLUGIN --*/
    $('#testimonialSection .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        autoplay: true,
        responsive: {
           0: {
              items:1
           }
        }
    });

   /*-- FAQ SECTION OWL CAROUSEL PLUGIN --*/
   $('#faqSection .owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      autoplay: true,
      responsive: {
         0: {
            items:2
         },
         552: {
            items:3
         },
         768: {
            items:4
         }
      }
   });

   /*-- PRICING SECTION --*/
   $("#pricingSection .year").hide();

   $("#pricingSection .btn-box .monthly").click(function() {
      $(this).addClass("active");
      $(".yearly").removeClass("active");
   });
   $("#pricingSection .btn-box .yearly").click(function() {
      $(this).addClass("active");
      $(".monthly").removeClass("active");
      $("#pricingSection .year").show();
   });

   /*-- FAQ SECTION --*/
   $(".faq-body2").slideUp();
   $(".faq-body3").slideUp();

   $(".faq-header1").click(function() {
      $(".faq-header1 .fa").toggleClass("active");
      $(".faq-header2 .fa").removeClass("active");
      $(".faq-header3 .fa").removeClass("active");
      $(".faq-body1").slideToggle();
      $(".faq-body2, .faq-body3").slideUp();
   });
   $(".faq-header2").click(function() {
      $(".faq-header2 .fa").toggleClass("active");
      $(".faq-header1 .fa").removeClass("active");
      $(".faq-header3 .fa").removeClass("active");
      $(".faq-body2").slideToggle();
      $(".faq-body1, .faq-body3").slideUp();
   });
   $(".faq-header3").click(function() {
      $(".faq-header3 .fa").toggleClass("active");
      $(".faq-header1 .fa").removeClass("active");
      $(".faq-header2 .fa").removeClass("active");
      $(".faq-body3").slideToggle();
      $(".faq-body1, .faq-body2").slideUp();
   });

   /*-- SCROLL UP --*/
   $(window).scroll(function() {
      if ( $(this).scrollTop()>100 ) {
         $(".scroll-up").fadeIn();
      } else {
         $(".scroll-up").fadeOut();
      };
   });

   $(".scroll-up").click(function() {
      $("html").animate({scrollTop: 0}, 1000);
      return false;
   });

})
