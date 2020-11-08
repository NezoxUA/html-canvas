
// draw a line
var c = document.getElementById("canvas-line");
var ctx = c.getContext("2d");
ctx.moveTo(0, 0);
ctx.lineTo(200, 200);
ctx.stroke();


// draw a circle
var a = document.getElementById('canvas-circle');
var atx = a.getContext('2d');
atx.beginPath();
atx.arc(100, 100, 50, 0, 2 * Math.PI);
atx.stroke();


// draw a text
var b = document.getElementById('canvas-text');
var btx = b.getContext('2d');
btx.font = "30px Arial";
btx.fillText('Hello world', 10, 50);

// draw a gradient
var d = document.getElementById('canvas-gradient');
var dtx = d.getContext('2d');
var grd = dtx.createLinearGradient(0, 0, 100, 0);
grd.addColorStop(0, 'red');
grd.addColorStop(1, 'orange');
dtx.fillStyle = grd;
dtx.fillRect(10, 10, 150, 100);