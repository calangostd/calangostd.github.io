$(document).ready(function() {
    function animateScrollDown() {
        $('#scroll-image').animate({
            'top': '10'
        }, {
            duration: '1000',
            complete: function() {
                $('#scroll-image').animate({
                    top: 0
                }, {
                    duration: 1000,
                    complete: animateScrollDown
                });
            }
        });
    }

    function translate() {
        var mLanguage = activeLanguage.spacejay;
        $("#space-jay-title").html(mLanguage["title"]);
        $("#space-jay-release-date").html(mLanguage["release-date"]);
        $("#space-jay-content-1").html(mLanguage["content-1"]);
        $("#space-jay-content-2").html(mLanguage["content-2"]);
        $("#space-jay-content-3").html(mLanguage["content-3"]);
        $("#space-jay-content-4").html(mLanguage["content-4"]);

        mLanguage = activeLanguage.general;
        $(".release-date").html(mLanguage["release-date"]);
        $(".download").html(mLanguage["download"]);
    }


    //alert("Window: " + $(window).height());
    //alert($(document).height());



    translate();
    animateScrollDown();
});