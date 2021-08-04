var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;


 var width = screen.width;
newwidth = screen.width - 70;
newheight = screen.height - 300;

if(width<992){
    document.getElementById("myCanvas").width=newwidth;
    document.getElementById("myCanvas").height=newheight;
    document.body.style.overflow="hidden";
}

canvas.addEventListener("touchstart", TouchStart);
function TouchStart(e){
    console.log("touchstart");
    last_position_of_x = e.touches[0].clientX-canvas.offsetLeft;
    last_position_of_y = e.touches[0].clientY-canvas.offsetTop;
}
canvas.addEventListener("touchmove",TouchMove);
function TouchMove(e){
    console.log("touchmove");
    currentTouchX = e.touches[0].clientX-canvas.offsetLeft;
    currentTouchY = e.touches[0].clientY-canvas.offsetTop;
    
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;

    console.log("Last position of x and y coordinates = ");
    console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
    ctx.moveTo(last_position_of_x, last_position_of_y);

    console.log("Current position of x and y coordinates = ");
    console.log("x  = " + currentTouchX + "y = " + currentTouchY);
    ctx.lineTo(currentTouchX, currentTouchY);
    ctx.stroke(); 
    last_position_of_x  = currentTouchX;
    last_position_of_y = currentTouchY;
}