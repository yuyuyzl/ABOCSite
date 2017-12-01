$(document).ready(function () {
    $(window).scroll(function () {
        console.log($(window).scrollTop());
        if($(window).scrollTop()>300){
            $("#navmain").addClass("bg-dark");
            $("#navmain").removeClass("bg-transparent");
        }else{
            $("#navmain").addClass("bg-transparent");
            $("#navmain").removeClass("bg-dark");
        }

    });
});
