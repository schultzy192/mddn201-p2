$(document).ready(function() {

    $(".inline-header").click(function() {
        $(this).parent().toggleClass("inline-open");
        $(this).children(".material-icons").toggleClass("inline-arrow-spin");
    });

    var activeThread = document.getElementsByClassName("yarn-thread");
    activeThread.scrollTop = activeThread.scrollHeight;

    $(".sidebar-yarn").click(function() {
        $(this).siblings().removeClass("active-yarn");
        $(this).addClass("active-yarn");

        if((this).hasClass("graphic-design")) {
            $(".active-yarn").removeClass();
            $(".active-yarn").addClass("graphic-design");
        }

        // if((this).hasClass("nsfw-flag")) {
        //     $(".nsfw-warning").css("display","block");
        // }
    });

});
