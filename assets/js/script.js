var draw = document.getElementById('carCanvas');
var ctx = draw.getContext('2d');
//Rectangle du haut
ctx.fillStyle = '#00A551';
ctx.fillRect(100, 110, 210, 60);
//Rectangle du bas
ctx.fillStyle = '#00A551';
ctx.fillRect(55, 160, 300, 60);
//Roue gauche
ctx.beginPath();
ctx.arc(95,255,35,0,Math.PI*2,true);
ctx.strokeStyle = "#9E9E9E";
ctx.fillStyle = '#CDCDCD'
ctx.fill();
ctx.stroke();
//Roue droite
ctx.beginPath();
ctx.arc(315,255,35,0,Math.PI*2,true);
ctx.strokeStyle = "#9E9E9E";
ctx.fillStyle = '#CDCDCD'
ctx.fill();
ctx.stroke();
