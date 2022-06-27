
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world
var block1
var block2
var block3
var ground

function preload() {

}

function setup() {
	createCanvas(850, 600);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
	var plane_options ={
        isStatic: true
     }
	
	var block1_options ={
        restitution:0.5,
        friction:0.02,
        frictionAir:0,
    }
    

    var block2_options ={
        restitution:0.7,
        friction:0.01,
        frictionAir:0.1,
     }
    

	var block3_options ={
        restitution:0.01,
        friction:1,
        frictionAir:0.3,
   }
    
    
     Engine.run(engine);

    block1 = Bodies.circle(220,50,50,block1_options)
    World.add(world,block1)
	
	block2 = Bodies.rectangle(110,50,40,40,block2_options)
    World.add(world,block2)
    
	block3 = Bodies.rectangle(350,50,100,40,block3_options)
    World.add(world,block3)
   
	ground = Bodies.rectangle(425,500,850,10,plane_options)

    World.add(world,ground)


}


function draw() {
	rectMode(CENTER);
    ellipseMode(RADIUS)
	
    background("lightBlue")
	Engine.update(engine)
    
   fill ("purple")
    rect(ground.position.x,ground.position.y,850,10)
 
    fill("pink")
    ellipse(block1.position.x,block1.position.y,50,50)

    fill("blue")
    rect(block2.position.x,block2.position.y,40,40)

   fill("orange")
    rect(block3.position.x,block3.position.y,100,40)

    

    }






