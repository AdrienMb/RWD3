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

function main(){
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

main();

/*
Bubbles END
*/
