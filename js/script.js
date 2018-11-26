/*
Bubbles START
*/

let minSpeed = 4000;
let maxSpeedIncrement = 4000;

let bubbles = [$('#bubble1Id'), $('#bubble2Id'), $('#bubble3Id')];


function findXPosition(object){
    let xRange = $(window).width() - object.width();
    let xPos = Math.floor(Math.random() * xRange);
    return xPos;
}

function getSpeed(){
    let speed = Math.random() * maxSpeedIncrement;
    speed = Math.floor(speed) + minSpeed;
    return speed;
}

function startInitiateBubble(bubble){
    let yValue = $(window).height();
    let xValue = findXPosition(bubble);
    bubble.fadeIn();
    bubble.css({top: yValue, left: xValue});
    bubble.click(function(){
        bubble.stop(true);
        bubble.fadeOut(function(){
            goUp(bubble);
        });
    });
}

function goUp(bubble){
    startInitiateBubble(bubble);
    let height = $(window).height() + bubble.height();
    let animationValue = '-=' + height;
    let speed = getSpeed();
    bubble.animate({top: animationValue}, 
                   speed, 
                   "linear", 
                   function(){ goUp(bubble); });

}

function mainBubbles(){
    for(let i = 0; i < bubbles.length; i++){    
        startInitiateBubble(bubbles[i]);
        let height = $(window).height() + bubbles[i].height();
        let animationValue = '-=' + height;
        let speed = getSpeed();
        bubbles[i].animate({top: animationValue}, 
                           speed, 
                           "linear", 
                           function(){ goUp(bubbles[i]); });
    }    
}

mainBubbles();

/*
Bubbles END
*/

$("#sharkId").hide();

function shark (top, left){
    $("#sharkId").animate({top: 0, left: 0});
    $("#sharkId").fadeIn().animate({top: top, left: left}).fadeOut();
}

$("#fish2Id").mouseover( function() {
    
    $("#fish2Id").stop(true);
    var left = Math.floor((Math.random() * ($(window).width()-$("#fish2Id").width()) + 1));
    var top = Math.floor((Math.random() * ($(window).height()-$("#fish2Id").height()) + 1));
    $("#fish2Id").animate({top: top, left: left});
    var random = Math.floor((Math.random() * 6 + 1));
    if (random==1){
        shark(top, left);
    }
    myLoopedFunction("#fish2Id");
})

$("#fish1Id").dblclick(function(){    
    $(this).stop(true);
    $(this).animate({width : 400, height : 400}, 100).delay(1000).attr("src", "images/piratefish.png").animate({width : 250, height : 250}, 100);
    myLoopedFunction("#fish1Id");
});

$("*").click(function(event){
    $("#fish1Id").stop(true);
    var x = event.pageX;
    var y = event.pageY;
    $("#fish1Id").animate({left: x-125, top: y-125}, 1500, "swing");
    myLoopedFunction("#fish1Id");
});

myLoopedFunction("#fish1Id");
myLoopedFunction("#fish2Id");

function myLoopedFunction(fishId) 
{   var left = Math.floor((Math.random() * ($(window).width()-$(fishId).width()) +1));
    var top = Math.floor((Math.random()  * ($(window).height()-$(fishId).height()) +1));
    $(fishId).animate({left:(left), top:(top)}, 3000,
    function(){ myLoopedFunction(fishId); });
}
