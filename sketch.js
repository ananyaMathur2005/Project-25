const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine , world;
var paper;
var dustbin1 , dustbin2 , dustbin3 ; 
function preload()
{

}

function setup() {
	createCanvas(800, 700);

  engine = Engine.create();
	world = engine.world;

  ground = new Ground(600,height,8000,50);
  paper = new Paper(100,100);
  dustbin1 = createSprite(600,600,20,100,dustbin1_options);
  dustbin2 = createSprite(450,600,20,100,dustbin2_options);
  dustbin3 = createSprite(530,650,150,20,dustbin3_options);
  
  Engine.run(engine);
  var dustbin1_options ={
		isStatic:true
    }
    var dustbin2_options ={
      isStatic:true
    }
    var dustbin3_options ={
      isStatic:true
  }
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
  }
}


