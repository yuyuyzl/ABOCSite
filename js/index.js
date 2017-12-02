var navNeedFade=false;
$(document).ready(function () {
    $("#hero").height($("herovideo").height());
    $(window).scroll(function () {
        if(($(window).scrollTop()>$("#hero").innerHeight())!=navNeedFade) {
            navNeedFade=($(window).scrollTop()>$("#hero").innerHeight());
            if ($(window).scrollTop() > $("#hero").innerHeight()) {
                $("#navmain").hide();
                $("#navmain").removeClass("bg-transparent");
                $("#navmain").removeClass("navbar-dark");
                $("#navmain").addClass("bg-white");
                $("#navmain").addClass("navbar-light");
                $("#navmain").fadeIn("fast");
            } else {
                $("#navmain").fadeOut("fast",function () {
                    $("#navmain").removeClass("bg-white");
                    $("#navmain").removeClass("navbar-light");
                    $("#navmain").addClass("bg-transparent");
                    $("#navmain").addClass("navbar-dark");
                    $("#navmain").show();
                });
            }
        }
    });

});
