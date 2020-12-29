
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
	paper = new Paper(100,0,30)
	ground = new Ground(600,600,1200,20)
	box1 = new Dustbin(600,500,200,20)




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  paper.display();
  box1.display();

  drawSprites();
 
}



