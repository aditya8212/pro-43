 

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);

  angleMode(DEGREES);
}

function draw() {
  background("black");  

  h = hour();
 m = minute();
 sc = second();

 scAngle = map(sc,0,60,0,360);
  mAngle = map(m,0,60,0,360);
  hAngle = map(h%12,0,12,0,360);

 translate(200,200);
  rotate(-90);

  push();
 rotate(scAngle);
 stroke("red");
 strokeWeight(7);
 line(0,0,100,0);
 pop();

 push();
 rotate(mAngle);
 stroke("blue");
 strokeWeight(7);
 line(0,0,75,0);
 pop();
 
 push();
 rotate(hAngle);
 stroke("yellow");
 strokeWeight(7);
 line(0,0,50,0);
 pop();

 strokeWeight(10);
 stroke("red");
 noFill();
 arc(0,0,280,280,0,scAngle);

 stroke("blue");
 arc(0,0,260,260,0,mAngle);

 stroke("yellow");
 arc(0,0,240,240,0,hAngle);

  drawSprites();
}