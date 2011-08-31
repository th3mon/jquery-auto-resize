jQuery(document).ready(initTest);

function initTest() {
    var $container = $("#container");
    var $iframe = $("#container").children(".iframe");
    timedOut(loadViaAJAX, $iframe, "test.html", 2000);
    timedOut(loadViaAJAX, $iframe, "test_1.html", 6000);
    timedOut(loadViaAJAX, $iframe, "test.html", 10000);

    $container.autoResize($iframe, {
        bouncingMode: true,
        animation: true
    });
}

var loadViaAJAX = function($container, url){
    $container.load(url);
}

var timedOut = function(f, $container, url, time) {
    t = setTimeout(function(){
        f($container, url)
    }, time);
}

