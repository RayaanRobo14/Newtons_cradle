
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    ellipseMode(RADIUS);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob = new Bob(500,495,30,30);
	roof = new Roof(400,150,500,35);

	Engine.run(engine);
  
}


function draw() {
  ellipseMode(RADIUS);
  background(255,0,0);
 

  drawSprites();
  bob.display();
  roof.display();
}



