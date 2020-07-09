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
    var tlportrait = new TimelineMax({ repeat: -1, repeatDelay: 1 });
    var tlhome = new TimelineMax({ repeat: -1 });

    TweenMax.set("#visage", { rotation: 5, transformOrigin: '50% 100%' })
    TweenMax.set("#hairback", { rotation: 5, transformOrigin: '50% 100%' })
    TweenMax.set("#plant1", { rotation: 5, transformOrigin: '50% 100%' })
    TweenMax.set("#plant2", { rotation: -5, transformOrigin: '50% 100%' })
    TweenMax.set("#plant5", { rotation: -5, transformOrigin: '50% 100%' })
    TweenMax.set("#plant6", { rotation: 3, transformOrigin: '50% 100%' })

    TweenMax.set("#planttop1", { rotation: 3, transformOrigin: '100% 50%' })


    tlhome
        .to("#plant1", 2, { rotation: -5 })
        .to("#plant2", 2, { rotation: 5 }, "<")
        .to("#plant5", 2, { rotation: 5 }, "<")
        .to("#planttop1", 2, { rotation: -3 }, "<")
        .to("#plant6", 2, { rotation: -3 }, "<")
        .to("#plant1", 2, { rotation: 5 })
        .to("#plant2", 2, { rotation: -5 }, "<")
        .to("#plant5", 2, { rotation: -5 }, "<")
        .to("#planttop1", 2, { rotation: 3 }, "<")
        .to("#plant6", 2, { rotation: 3 }, "<")



    tlportrait
        .to("#visage", 2, { rotation: -5 })
        .to("#hairback", 2, { rotation: -3 }, "<")
        .to("#visage", 2, { rotation: 5 })
        .to("#hairback", 2, { rotation: 5 }, "<");
});