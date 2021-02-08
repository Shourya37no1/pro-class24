
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var block1sprite,block2sprite,block3sprite;
var ground;


//function preload()


function setup() {
	createCanvas(1200,700);

	rectMode(CENTER);

	block1sprite=createSprite(960,630,20,100)
	block1sprite.shapeColor=color("white");
	
	block2sprite=createSprite(850,670,200,20)
	block2sprite.shapeColor=color("white");
	
	block3sprite=createSprite(750,630,20,100)
	block3sprite.shapeColor=color("white");

	engine = Engine.create();
	world = engine.world;

	block1sprite = Bodies.rectangle(960, 630,20,100, {isStatic:true} );
	World.add(world,block1sprite)
	
	block2sprite = Bodies.rectangle(850, 670, 200, 20, {isStatic:true} );
	World.add(world,block2sprite)

	block3sprite = Bodies.rectangle(750, 630, 20 ,100, {isStatic:true} );
	World.add(world,block3sprite)
	 

	//Create the Bodies Here.
	paperBall = new Paper(85,300,40);

ground = new Ground(600,height,1200,30);
Engine.run(engine);

	
  
}


function draw() {
   background(33);
  
  
  paperBall.display();
  ground.display();

  Engine.update(engine);
  key1();

  drawSprites();
 
}

function keyPressed(){
if (keyCode === UP_ARROW){
Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:295,y:-295});
}

};
function key1(){
	if (keyCode === DOWN_ARROW){
		Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:0,y:0});
	}
}