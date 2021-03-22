(function ($) {
  var main = {
    init: function () {
      // Enable Sliders
      enableSliders.init();

      // Enable Navigation
      navigation.init();

      // Enable Masonry Gallery
      masonryGrid.init();
    },
  };

  /*
   * Navigation
   */

  var navigation = {
    navSelector: "#navigation",
    openNavSelector: "button.open",
    closeNavSelector: "button.close",

    init: function () {
      $(this.openNavSelector).click(() => {
        $(this.navSelector).addClass("open");
      });
      $(this.closeNavSelector).click(() => {
        $(this.navSelector).removeClass("open");
      });
    },
  };

  /*
   * Enable Sliders
   */

  var enableSliders = {
    sliderCooperationSelector: ".js-slider-cooperation",
    sliderCooperationBreakpoint: 768,
    sliderCooperation: [],
    sliderBlogSelector: ".js-slider-blog",
    sliderBlogBreakpoint: 768,
    sliderBlog: [],

    init: function () {
      var _self = this;

      // toggle slider cooperation
      this.toggleSliderCooperation();

      // toggle slider blog
      this.toggleSliderBlog();

      // toggle sliders on window resize
      var resizeTimeout = null;
      $(window).resize(function () {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function () {
          _self.toggleSliderCooperation();
          _self.toggleSliderBlog();
        }, 100);
      });
    },

    toggleSliderCooperation: function () {
      var _self = this;

      if ($(window).width() < this.sliderCooperationBreakpoint) {
        if (
          this.sliderCooperation.length == 0 &&
          $(this.sliderCooperationSelector).length
        ) {
          var sliderCooperationOptions = {
            pager: false,
            maxSlides: 4,
            slideWidth: 260,
            moveSlides: 1,
            controls: false,
            adaptiveHeight: true,
            slideMargin: 25,
          };
          $(this.sliderCooperationSelector).each(function () {
            _self.sliderCooperation.push(
              $(this).bxSlider(sliderCooperationOptions)
            );
          });
        }
      } else {
        if (this.sliderCooperation.length) {
          for (var i in this.sliderCooperation) {
            this.sliderCooperation[i].destroySlider();
          }

          this.sliderCooperation = [];
        }
      }
    },

    toggleSliderBlog: function () {
      var _self = this;

      if ($(window).width() < this.sliderBlogBreakpoint) {
        if (this.sliderBlog.length == 0 && $(this.sliderBlogSelector).length) {
          var sliderBlogOptions = {
            pager: false,
            maxSlides: 4,
            slideWidth: 260,
            moveSlides: 1,
            controls: false,
            adaptiveHeight: true,
            slideMargin: 25,
          };
          $(this.sliderBlogSelector).each(function () {
            _self.sliderBlog.push($(this).bxSlider(sliderBlogOptions));
          });
        }
      } else {
        if (this.sliderBlog.length) {
          for (var i in this.sliderBlog) {
            this.sliderBlog[i].destroySlider();
          }

          this.sliderBlog = [];
        }
      }
    },
  };

  /*
   * Masonry Grid
   */

  var masonryGrid = {
    init: function () {
      if($('.mansory-grid').length){
        $('.masonry-grid').masonryGrid();
      }
    }
  };

  $(function () {
    main.init();
  });
})(jQuery);
