$(document).ready(function() {

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
