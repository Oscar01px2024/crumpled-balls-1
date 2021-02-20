
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground1 = new Ground(400,400,1000,10);
dustbin1 = new Dustbin(550,250,100,10);
dustbin2 = new Dustbin(590,250,20,50);
dustbin3 = new Dustbin(490,250,20,50);
paper1 = new Paper(50,200,40);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  drawSprites();
  ground1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper1.display();
  //keyPressed();
  
}
function keyPressed() {
	if(keyCode === UP_ARROW) {

		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:40,y:-100});
	}
}


