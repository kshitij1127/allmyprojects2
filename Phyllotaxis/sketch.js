var n = 0
var c = 4

function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {

  var a = n*137.6
  var r = c*sqrt(n)

  var x = r * cos(a) + width/2
  var y = r * sin(a) + height/2

  fill(255)
  noStroke()
  ellipse(x,y,4,4)


  n++
 
}