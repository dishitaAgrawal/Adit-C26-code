const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5, bob6, bob7, bob8;
var roof1;
var rope1, rope2, rope3, rope4, rope5, rope6, rope7, rope8;
var bobDiameter;
function preload() {}

function setup() {
  createCanvas(800, 700);

  engine = Engine.create();
  world = engine.world;

  bobDiameter = 50;

  //Create the Bodies Here.
  roof = new Roof(400, 100, 500, 50);
  bob1 = new Bob(220, 400, 50);
  bob2 = new Bob(270, 400, 50);
  bob3 = new Bob(320, 400, 50);
  bob4 = new Bob(370, 400, 50);
  bob5 = new Bob(420, 400, 50);
  bob6 = new Bob(470, 400, 50);
  bob7 = new Bob(520, 400, 50);
  bob8 = new Bob(570, 400, 50);
  rope1 = new Rope(bob1.body, roof.body, -bobDiameter * 3, 0);
  rope2 = new Rope(bob2.body, roof.body, -bobDiameter * 2, 0);
  rope3 = new Rope(bob3.body, roof.body, -bobDiameter, 0);
  rope4 = new Rope(bob4.body, roof.body, 0, 0);
  rope5 = new Rope(bob5.body, roof.body, bobDiameter, 0);
  rope6 = new Rope(bob6.body, roof.body, bobDiameter * 2, 0);
  rope7 = new Rope(bob7.body, roof.body, bobDiameter * 3, 0);
  rope8 = new Rope(bob8.body, roof.body, bobDiameter * 4, 0);

  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background("lightGrey");
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  rope6.display();
  rope7.display();
  rope8.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  bob6.display();
  bob7.display();
  bob8.display();

  drawSprites();
}
function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(bob1.body, bob1.body.position, { x: -30, y: -20 });
  }
}
