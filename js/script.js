
$("#fish2Id").mouseover( function() {
    var left = Math.floor((Math.random() * ($(window).width()-$("#fish2Id").width()) + 1));
    var top = Math.floor((Math.random() * ($(window).height()-$("#fish2Id").height()) + 1));
    $("#fish2Id").animate({top: top, left: left});
})

