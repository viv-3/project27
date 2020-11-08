
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bO1,bO2, bO3, bO4, bO5;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	bO1 = new Bob(500,100,r/2)
	bO2 = new Bob(500,300,r/2)
	bO3 = new Bob(500,500,r/2)
	bO4 = new Bob(500,700,r/2)
	bO5 = new Bob(500,900,r/2)
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  
  bO1.display();
  bO2.display();
  bO3.display();
  bO4.display();
  bO5.display();
  

 
}



