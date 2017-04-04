$(document).ready(function() {

    $("#menu-eng").on("click", function() {
        setLanguage("eng");
    });
    $("#menu-ptbr").on("click", function() {
        setLanguage("ptbr");
    });

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
        var mLanguage;

        //Cover
        mLanguage = activeLanguage.cover;
        $("#cover-subtitle").html(mLanguage["subtitle"]);

        //Games
        mLanguage = activeLanguage.games;
        $("#games-title").html(mLanguage["title"]);
        $("#games-subtitle").html(mLanguage["subtitle"]);

        //Rupert
        mLanguage = activeLanguage.rupert;
        $("#rupert-title").html(mLanguage["title"]);
        $("#rupert-release-date").html(mLanguage["release-date"]);
        $("#rupert-content-1").html(mLanguage["content-1"]);
        $("#rupert-content-2").html(mLanguage["content-2"]);
        $("#rupert-content-3").html(mLanguage["content-3"]);
        $("#rupert-content-4").html(mLanguage["content-4"]);
        $("#rupert-pdf").attr("href", "pdf/" + mLanguage["pdf"]);

        //SpaceJay
        mLanguage = activeLanguage.spacejay;
        $("#space-jay-title").html(mLanguage["title"]);
        $("#space-jay-release-date").html(mLanguage["release-date"]);
        $("#space-jay-content-1").html(mLanguage["content-1"]);
        $("#space-jay-content-2").html(mLanguage["content-2"]);
        $("#space-jay-content-3").html(mLanguage["content-3"]);
        $("#space-jay-content-4").html(mLanguage["content-4"]);
        $("#space-jay-pdf").attr("href", "pdf/" + mLanguage["pdf"]);

        //About us
        mLanguage = activeLanguage.about;
        $("#about-title").html(mLanguage["title"]);
        $("#about-content-1").html(mLanguage["content-1"]);
        $("#about-content-2").html(mLanguage["content-2"]);
        $("#about-content-3").html(mLanguage["content-3"]);
        $("#about-content-4").html(mLanguage["content-4"]);
        $("#about-presskit").html(mLanguage["presskit"]);

        //Contact
        mLanguage = activeLanguage.contact;
        $("#contact-title").html(mLanguage["title"]);
        $("#contact-content-1").html(mLanguage["content-1"]);
        //General
        mLanguage = activeLanguage.general;
        $(".release-date").html(mLanguage["release-date"]);
        $(".download").html(mLanguage["download"]);
    }

    translate();
    animateScrollDown();
});