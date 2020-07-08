var myFullpage = new fullpage('#fullpage', {
    anchors: ['home', 'about', 'cv', 'projects', 'contact'],
    slidesNavigation: true,
    scrollBar: true,
});

$(window).on('hashchange', function (e) {
    var hash = window.location.hash;
    console.log("window.location.hash : ", hash)

    // if (hash == '#about') {
    //     $('#portrait').css("background-color", "blue");
    // }
    // else {
    //     $('#portrait').css("background-color", "pink");

    // }
});
$(document).ready(function () {
    $('.tooltipped').tooltip();

    // gsap.to("h1", {
    //     duration: 4,
    //     x: 750,
    //     rotation: 360,
    //     ease: "none",
    // });

});




