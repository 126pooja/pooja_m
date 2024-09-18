var c = document.getElementById("mycanvas")
var ctx = c.getContext("2d");
// tx.moveTo(0,0)
// ctx.lineTo(400,300)
// ctx.moveTo(0,0)
// ctx.moveTo(500,400)
ctx.fillStyle = "orange"
ctx.fillRect (0,0,150,75);

ctx.fillStyle = "white"
ctx.fillRect (0,75,150,75);

ctx.fillStyle = "green"
ctx.fillRect (0,150,150,75);

ctx.beginPath ();
ctx.arc(75,112.5,40,0,2*Math.PI)
ctx.stroke();

ctx.fillStyle = "gray"
ctx.fillStyle (0,0,10,300);

ctx.strokeStyle = "red";
ctx.lineWidth = 5;
ctx.strokeRect(300,10, 100,100);

var c = document.getElementById("myCanvas")
var ctx = c.getContext("2d");

// ctx.fillStyle = "black"
// ctx.fillRect(10,0,10,400)

ctx.moveTo(100,100)
ctx.lineTo(0,100)
ctx.lineTo(50,0)
ctx.lineTo(100,100)
ctx.stroke()