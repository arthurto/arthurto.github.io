var t = 0
var m = 1
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  circle(200,200,t,t)
  
  t = t + m*5
  
  if (t > 500 && m == 1) {
    m = -1 
  } else if (t < 0){
    m = 1 
  }
}