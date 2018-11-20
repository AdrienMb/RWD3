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

$("#fish1Id").dblclick(function(){
    
    $(this).stop().animate({width : 400, height : 400}).delay(2000);
    $(this).attr("src", "images/piratefish.png");
    $(this).animate({width : 250, height : 250});
});

$("*").click(function(event){
    $("#fish1Id").stop();
    var x = event.pageX;
    var y = event.pageY;
    $("#fish1Id").animate({left: x-125, top: y-125}, 1500, "swing");
});

