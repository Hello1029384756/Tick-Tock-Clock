
function setup() {
  createCanvas(800,800);
}

function draw() {
  background("white");

  translate(360,360);
  rotate(-90);

  var hr = hour();
  var mn = minute();
  var sc = second();

  strokeWeight(14);
  stroke("black");
  noFill();
  
  var end1 = map(sc,0,60,0,360);
  arc(0, 0, 360,360,0, end1);

  push();
  strokeWeight(1);
  rotate(end1);
  line(0,0,100,0);
  pop();


  stroke("black");
  var end2 = map(mn,0,60,0,360);
  arc(0, 0, 330,330,0, end2);

  push();
  strokeWeight(2);
  rotate(end2);
  line(0,0,90,0);
  pop();

  stroke("black");
  var end3 = map(hr,0,24,0,360);
  arc(0, 0, 300,300,0, end3);

  push();
  strokeWeight(3);
  rotate(end3);
  line(0,0,80,0);
  pop();

}