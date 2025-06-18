function draw() {
  var canvas = document.getElementById("canvasElement");
  var canvasContext = canvas.getContext("2d");


  drawEllipse(canvasContext, 150, 120, 130, 50, "#fdf5e6");
  drawEllipse(canvasContext, 150, 120,120, 40, "#9BBB58");
  drawEllipse(canvasContext, 150, 360, 130, 50, "#fdf5e6");
  drawEllipse(canvasContext, 150, 360, 120, 40, "#8064A1");
  drawLine(canvasContext, 20, 120, 20, 360);
  drawLine(canvasContext, 280, 120, 280, 360);
}


function drawLine(canvasContext, lineX, lineY, endX, endY) {
  canvasContext.beginPath();
  canvasContext.moveTo(lineX, lineY);
  canvasContext.lineTo(endX, endY);
  canvasContext.stroke();
}

function drawEllipse(canvasContext, center1, center2, rad1, rad2, color) {
  var startAngle = 0;
  var endAngle = 2 * Math.PI;
  
  canvasContext.beginPath();
  canvasContext.ellipse(center1, center2, rad1, rad2, startAngle, startAngle, endAngle);
  canvasContext.stroke();
  canvasContext.fillStyle = color;
  canvasContext.fill();
}

