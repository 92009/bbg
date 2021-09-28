const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var roof2;
var ball1,ball2,ball3,ball4,ball5;
var constrained;
//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	var roof2_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	roof2 = Bodies.rectangle(1000,103,230,20,roof2_options);
    World.add(world,roof2);

	ball1 = Bodies.circle(100,100,20);
	World.add(world,ball1);
	
	ball2 = Bodies.circle(100,100,20);
	World.add(world,ball2);

	ball3 = Bodies.circle(100,100,20);
	World.add(world,ball3);

	ball4 = Bodies.circle(100,100,20);
	World.add(world,ball4);

	ball5 = Bodies.circle(100,100,20);
	World.add(world,ball5);


	
	


   
	rope1=new rope(roof,ball1,10,10)
	rope2=new rope(roof,ball2,10,10)
	rope3=new rope(roof,ball3,10,10)
	rope4=new rope(roof,ball4,10,10)
	rope5=new rope(roof,ball5,10,10)

	

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background("#99004d");


  

  rect(roof.position.x,roof.position.y,430,20);
  rect(roof2.position.x,roof2.position.y,430,20);

  //call display() to show ropes here
  stroke(2)
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 

  


	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
  stroke(2)
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 

  


 //create ellipse shape for multiple bobs here
 ellipse(ball1.position.x,ball1.position.y,40);

 ellipse(ball2.position.x,ball2.position.y,40);

 ellipse(ball3.position.x,ball3.position.y,40);

 ellipse(ball4.position.x,ball4.position.y,40);

 ellipse(ball5.position.x,ball5.position.y,40);



}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed()
{
	keyCode=== UP_ARROW
	vForce();
}

function vForce()
{
	Matter.Body.applyForce(ball1,{x:0,y:0},{x:0.05,y:0});
}

