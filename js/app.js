//  Theme Name: Construx | Construction, Architecture & Building Multipurpose HTML resposive Template
//  Author: bulltheme
//  Version: 1.0.0
//  File Description: Main Js file of the template

(function ($) {
  'use strict';

  jQuery(document).ready(function ($) {
    // ==========================================
    //  Mobile Menu Collapse
    // ==========================================
    $('.navbar-nav .nav-link').on('click', function () {
      $('.navbar-collapse').removeClass('show');
    });

    // ==========================================
    //  Smooth Link
    // ==========================================
    $('.page-scroll').on('click', function (event) {
      var $anchor = $(this);
      $('html, body')
        .stop()
        .animate(
          {
            scrollTop: $($anchor.attr('href')).offset().top,
          },
          1500,
          'easeInOutExpo'
        );
      event.preventDefault();
    });

    // ==========================================
    //  Scrollspy
    // ==========================================
    $('#navbarNavDropdown').scrollspy({ offset: 0 });

    // ==========================================
    //  Scroller Animation
    // ==========================================
    reanimate();
    function reanimate() {
      $('.scroller')
        .animate(
          {
            bottom: 5,
          },
          1000
        )
        .animate(
          {
            bottom: 20,
          },
          1000,
          function () {
            setTimeout(reanimate, 100);
          }
        );
    }

    // ==========================================
    //  Vision Mission Slider
    // ==========================================
    $('.Slider_Vision_Mission').owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      dots: false,
      nav: false,
      autoplayHoverPause: true,
      animateIn: 'fadeIn',
      animateOut: 'fadeOut',
    });

    // ==========================================
    //  Team Slider
    // ==========================================
    $('.Slider_Team').owlCarousel({
      items: 4,
      loop: true,
      autoplay: true,
      dots: false,
      nav: false,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
          dots: true,
        },
        540: {
          items: 2,
        },
        720: {
          items: 2,
        },
        992: {
          items: 3,
        },
        1140: {
          items: 4,
        },
      },
    });

    // ==========================================
    //  Our Work Filter
    // ==========================================
    var $grid = $('.work-grid').imagesLoaded(function () {
      $grid.isotope({
        itemSelector: '.work-grid-item',
        layoutMode: 'fitRows',
        percentPosition: true,
        filter: '*',
      });
    });
    $('.work-button-group').on('click', 'button', function () {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });
    $('.work-button-group').each(function (i, buttonGroup) {
      var $buttonGroup = $(buttonGroup);
      $buttonGroup.on('click', 'button', function () {
        $buttonGroup.find('.is-checked').removeClass('is-checked');
        $(this).addClass('is-checked');
      });
    });

    // ==========================================
    //  Testimonial Slider
    // ==========================================
    $('.Slider_Testimonial').owlCarousel({
      items: 2,
      loop: true,
      autoplay: true,
      dots: false,
      nav: false,
      margin: 30,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
          dots: true,
        },
        540: {
          items: 1,
          dots: true,
        },
        720: {
          items: 2,
        },
        992: {
          items: 2,
        },
        1140: {
          items: 2,
        },
      },
    });

    // ==========================================
    //  Clients Slider
    // ==========================================
    $('.Slider_Clients').owlCarousel({
      items: 5,
      loop: true,
      autoplay: true,
      dots: false,
      nav: false,
      margin: 30,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
          dots: true,
        },
        540: {
          items: 2,
        },
        720: {
          items: 3,
        },
        992: {
          items: 4,
        },
        1140: {
          items: 5,
        },
      },
    });

    // ==========================================
    //  Blog Slider
    // ==========================================
    $('.Slider_Blog').owlCarousel({
      items: 3,
      loop: true,
      autoplay: true,
      dots: false,
      nav: false,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
          dots: true,
        },
        540: {
          items: 2,
        },
        720: {
          items: 2,
        },
        992: {
          items: 3,
        },
        1140: {
          items: 3,
        },
      },
    });

    // ==========================================
    //  Contact form
    // ==========================================
    $('#contact-form').validator();
    $('#contact-form').on('submit', function (e) {
      if (!e.isDefaultPrevented()) {
        var url = 'contact.php';
        $.ajax({
          type: 'POST',
          url: url,
          data: $(this).serialize(),
          success: function (data) {
            var messageAlert = 'alert-' + data.type;
            var messageText = data.message;
            var alertBox =
              '<div class="alert ' +
              messageAlert +
              ' alert-dismissible fade show" role="alert">' +
              messageText +
              '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>';
            if (messageAlert && messageText) {
              $('#contact-form')
                .find('.messages')
                .hide()
                .html(alertBox)
                .fadeIn('slow');
              $('#contact-form')[0].reset();
            }
          },
        });
        return false;
      }
    });

    // ==========================================
    //  Input Style
    // ==========================================
    $('.form-control').val('');
    $('.form-control').focusout(function () {
      if ($(this).val() != '') {
        $(this).addClass('has-content');
      } else {
        $(this).removeClass('has-content');
      }
    });
  });

  jQuery(window).on('load', function () {
    // ==========================================
    //  Pre Loader
    // ==========================================
    $('body').imagesLoaded(function () {
      $('.pre-loader').fadeOut();
    });
  });

  jQuery(window).on('scroll', function () {
    // ==========================================
    //  Header Sticky
    // ==========================================
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
      $('.sticky').addClass('header-sticky');
    } else {
      $('.sticky').removeClass('header-sticky');
    }

    // ==========================================
    //  Back to Top
    // ==========================================
    if ($(this).scrollTop() > 100) {
      $('#back-to-top').fadeIn();
    } else {
      $('#back-to-top').fadeOut();
    }
  });

  $('#back-to-top').on('click', function () {
    $('html, body').animate(
      {
        scrollTop: 0,
      },
      1000
    );
    return false;
  });
})(jQuery);
