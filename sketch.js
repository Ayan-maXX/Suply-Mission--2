var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var rect1sprite, rect1, rect2sprite, rect2, rect3sprite, rect3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	rect1sprite = createSprite(400, 650, 200, 20)
	rect1sprite.shapeColor="red"
	rect2sprite = createSprite(400, 650, 200, 20)
	rect2sprite.shapeColor="red"
	rect3sprite = createSprite(400, 650, 200, 20)
	rect3sprite.shapeColor="red"

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.3, isStatic:true});
	World.add(world, packageBody);
	
	rect1 = Bodies.rectangle(400, 630, 200, 20, {isStatic:true})
	World.add(world, rect1)
	rect2 = Bodies.rectangle(300, 630, 20, 100, {isStatic:true})
	World.add(world, rect2)
	rect3 = Bodies.rectangle(500, 630, 20, 100, {isStatic:true})
	World.add(world, rect3)
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody, false)
  }
}



