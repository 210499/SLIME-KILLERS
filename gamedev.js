$( document ).ready(function(){
//declare variable
var score=0;
$(".b").hide();
$(".c").hide();
$(".d").hide();


var mouseX = 0, mouseY = 0, limitX = 1305.450-15, limitY = 200-15;
$(window).mousemove(function(e){
  var offset = $('.container').offset();
   mouseX = Math.min(e.pageX - offset.left, limitX);
   mouseY = Math.min(e.pageY - offset.top, limitY);
   if (mouseX < 0) mouseX = 0;
   if (mouseY < 0) mouseY = 0;
});

// cache the selector
var follower = $("#follower");
var xp = 0, yp = 0;
var loop = setInterval(function(){
    // change 12 to alter damping higher is slower
    xp += (mouseX - xp) / 12;
    yp += (mouseY - yp) / 12;
    follower.css({left:xp, top:yp});
    
}, 30);

animateDiv("#slime");
animateDiv(".b");
animateDiv(".c");
animateDiv(".d");

function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

function animateDiv(myclass){
    var newq = makeNewPosition();
    $(myclass).animate({ top: newq[0], left: newq[1] }, 1000,   function(){
      animateDiv(myclass);        
    });
    
};
$("#slime").click(function() {
$("#slime").hide().delay(1500).fadeIn();

score++;
$( "#scoreboard" ).html(score);
if (score === 3) {
	$(".b").show();
};
});

<<<<<<< Updated upstream

=======
 var obj = document.createElement("audio");
        obj.src="sound/awp.mp3";
        obj.volume=0.10;
        obj.autoPlay=false;
        obj.preLoad=true;       
 
        $( document ).click(function() {
            obj.play();
        });
>>>>>>> Stashed changes
});//closes doc