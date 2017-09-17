$(document).ready(function() {

    $(".inline-header").click(function() {
        $(this).parent().toggleClass("inline-open");
        $('html, body').animate({
            scrollTop: $(".inline-thread").offset().top - 120
        },200);
        $(this).children(".material-icons").toggleClass("inline-arrow-spin");
    });


    var activeThread = document.getElementsByClassName("yarn-thread");
    activeThread.scrollTop = activeThread.scrollHeight;

    $(".sidebar-yarn").click(function() {
        $(this).siblings().removeClass("active-yarn");
        $(this).addClass("active-yarn");

        if($(this).hasClass("star-wars")) {
            $(".yarn-title > h1").text("Star Wars");
            $(".yarn-thread:not(.star-wars-yarn)").css("display","none");
            $(".star-wars-yarn").css("display","block");
        }

        if($(this).hasClass("graphic-design")) {
            $(".yarn-title > h1").text("Graphic Design");
            $(".yarn-thread:not(.graphic-design-yarn)").css("display","none");
            $(".graphic-design-yarn").css("display","block");
        }

        if($(this).hasClass("the-expanse")) {
            $(".yarn-title > h1").text("The Expanse");
            $(".yarn-thread:not(.the-expanse-yarn)").css("display","none");
            $(".the-expanse-yarn").css("display","block");
        }

        if($(this).hasClass("the-joy-of-painting")) {
            $(".yarn-title > h1").text("The Joy of Painting");
            $(".yarn-thread:not(.the-joy-of-painting-yarn)").css("display","none");
            $(".the-joy-of-painting-yarn").css("display","block");
        }

        if($(this).hasClass("argument-clinic")) {
            $(".yarn-title > h1").text("Argument Clinic");
            $(".yarn-thread:not(.argument-clinic-yarn)").css("display","none");
            $(".argument-clinic-yarn").css("display","block");
        }

    });

    $(".send-message").click(function() {
        $(".message-field").val("");
    });

});
