$(document).ready(function() {

    var $poster = $('.login-container'),
        $shine = $('.shine'),
        $layer = $('div[class*="layer-"]'),
        w = $(window).width(), //window width
        h = $(window).height(); //window height

    $(window).on('mousemove', function(e) {
      var offsetX = 0.5 - e.pageX / w, //cursor position X
        offsetY = 0.5 - e.pageY / h, //cursor position Y
        dy = e.pageY - h / 2, //@h/2 = center of poster
        dx = e.pageX - w / 2, //@w/2 = center of poster
        theta = Math.atan2(dy, dx), //angle between cursor and center of poster in RAD
        angle = theta * 180 / Math.PI - 90, //convert rad in degrees
        offsetPoster = $poster.data('offset'),
        transformPoster = 'translateY(' + -offsetX * offsetPoster + 'px) rotateX(' + (-offsetY * offsetPoster) + 'deg) rotateY(' + (offsetX * (offsetPoster * 2)) + 'deg)';

      //get angle between 0-360
      if (angle < 0) {
        angle = angle + 360;
      }

      $poster.css('transform', transformPoster);

  //parallax foreach layer
    $layer.each(function() {
        var $this = $(this),
        offsetLayer = $this.data('offset') || 0,
        transformLayer = 'translateX(' + offsetX * offsetLayer + 'px) translateY(' + offsetY * offsetLayer + 'px)';

      $this.css('transform', transformLayer);
    });
    });

    $(".login-button").click(function() {
        $(".unavailable").css({'height':'170px','padding':'15px','border':'solid 1px rgb(255,72,0)'});
    });

    $(".inline-header").click(function() {
        $(this).parent().toggleClass("inline-open");
        $('html, body').animate({
            scrollTop: $(".inline-thread").offset().top - 120
        },200);
        $(this).children(".material-icons").toggleClass("inline-arrow-spin");
    });

    $(".sidebar-yarn").click(function() {
        $(this).siblings().removeClass("active-yarn");
        $(this).addClass("active-yarn");

        if($(this).hasClass("star-wars")) {
            $(".yarn-title > h1").text("Star Wars");
            $(".yarn-thread:not(.star-wars-yarn)").css("display","none");
            $(".star-wars-yarn").css("display","block");
            $(".star-wars-yarn").addClass("active-thread");
        }

        if($(this).hasClass("graphic-design")) {
            $(".yarn-title > h1").text("Graphic Design");
            $(".yarn-thread:not(.graphic-design-yarn)").css("display","none");
            $(".graphic-design-yarn").css("display","block");
            $(".graphic-design-yarn").addClass("active-thread");
        }

        if($(this).hasClass("the-expanse")) {
            $(".yarn-title > h1").text("The Expanse");
            $(".yarn-thread:not(.the-expanse-yarn)").css("display","none");
            $(".the-expanse-yarn").css("display","block");
            $(".the-expanse-yarn").addClass("active-thread");
        }

        if($(this).hasClass("the-joy-of-painting")) {
            $(".yarn-title > h1").text("The Joy of Painting");
            $(".yarn-thread:not(.the-joy-of-painting-yarn)").css("display","none");
            $(".the-joy-of-painting-yarn").css("display","block");
            $(".the-joy-of-painting-yarn").addClass("active-thread");
        }

        if($(this).hasClass("argument-clinic")) {
            $(".yarn-title > h1").text("Argument Clinic");
            $(".yarn-thread:not(.argument-clinic-yarn)").css("display","none");
            $(".argument-clinic-yarn").css("display","block");
            $(".argument-clinic-yarn").addClass("active-thread");
        }
        $(".sidebar").click(function() {
            $(".active-thread").animate({
                scrollTop: $('.active-thread')[0].scrollHeight - $('.active-thread')[0].clientHeight
            }, 1000);
        });

    });

    // $(".send-message").click(function() {
    //     $(".message-field").val("");
    //     $(".sign-in-error").css("bottom","50px");
    // });
    // $(".sign-in-error > h5").click(function() {
    //     $(".sign-in-error").css("bottom","-100px");
    // });

    $(".send-message").click(function() {
        var newMsg = $(".message-field").val();
        $(".active-thread").append("<p class='sent-message'>" + newMsg + "</p>");
        $(".message-field").val("");
    });

});
