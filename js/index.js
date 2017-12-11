var navNeedFade=false;
$(document).ready(function () {
    $("#navmain").removeClass("bg-white");
    $("#navmain").removeClass("navbar-light");
    $("#navmain").addClass("bg-transparent");
    $("#navmain").addClass("navbar-dark");
    $(window).scroll(function () {
        //console.log($(window).scrollTop());
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
    setTimeout(function () {
        $(window).scroll();
    },1000);

    $(".mouseover-border").mouseenter(function () {
        var no=$(this).attr("no");
        var jb2=$("#jb2");
        jb2.addClass("bgi"+no);
    })
    $(".mouseover-border").mouseleave(function () {
        var no=$(this).attr("no");
        var jb2=$("#jb2");
        jb2.removeClass("bgi"+no);
    })

});
