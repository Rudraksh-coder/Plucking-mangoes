const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var dground, tree,treeimg;
var boy, boyimg;
var stone;
var mango1, mango2, mango3, mango4, mango5, mango6, maango7, mango8, mango9, mango10;

function preload(){
	treeimg=loadImage("images/tree.png");
	boyimg=loadImage("images/boy.png");
}

function setup() {
	createCanvas(1000, 650);

	engine = Engine.create();
	world = engine.world;

	ground=new Ground(500, 600, width, 20);
	stone=new Stone(100,440,23);
	mango1=new Mango(600,270,34);
	mango2=new Mango(855,305,35);
	mango3=new Mango(670,240,35);
	mango4=new Mango(730,180,35);
	mango5=new Mango(710,300,36);
	mango6=new Mango(780,230,35);
	mango7=new Mango(825,150,33);
	mango8=new Mango(880,240,35);
	mango9=new Mango(940,200,35);
	mango10=new Mango(980,285,35);

	attach=new Throw(stone.body,{x:160,y:435});

	tree=createSprite(775,340);
	tree.addImage(treeimg);
	tree.scale=0.42;

	boy=createSprite(220,520);
	boy.addImage(boyimg);
	boy.scale=0.125;

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("grey");

  fill("black");
  textSize(18);
  

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);

  drawSprites();

  stone.display();
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	attach.fly();
}

function detectCollision(stone,lmango){

	if(stone.body.position.x- lmango.body.position.x <lmango.r + stone.r
		&& lmango.body.position.x - stone.body.position.x  < lmango.r + stone.r
		&&stone.body.position.y -lmango.body.position.y < lmango.r + stone.r
		&& lmango.body.position.y - stone.body.position.y < lmango.r + stone.r){
		Matter.Body.setStatic(lmango.body,false);
	}

}
 
function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:100,y:465});
		attach.Launch(stone.body);
	}
}