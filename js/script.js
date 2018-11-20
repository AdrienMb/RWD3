$("#sharkId").hide();

function shark (top, left){
    $("#sharkId").animate({top: 0, left: 0});
    $("#sharkId").fadeIn().animate({top: top, left: left}).fadeOut();
}

$("#fish2Id").mouseover( function() {
    var left = Math.floor((Math.random() * ($(window).width()-$("#fish2Id").width()) + 1));
    var top = Math.floor((Math.random() * ($(window).height()-$("#fish2Id").height()) + 1));
    $("#fish2Id").animate({top: top, left: left});
    var random = Math.floor((Math.random() * 6 + 1));
    if (random==1){
        shark(top, left);
    }
})

