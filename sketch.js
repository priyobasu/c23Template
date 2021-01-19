const Engine= Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world,object,ground,ball;
var box;
function setup() {
  var canvas= createCanvas(400,400);
 engine=Engine.create();
  world=engine.world;
  var options={
    restitution:2
  }
box=Bodies.rectangle(200,200,50,50,options);
World.add(world,box);
  ground=new Ground(200,height,400,20);

}
  


function draw() {
  background("black");  
 
  Engine.update(engine);
  fill("yellow");
  rect(box.position.x,box.position.y,50,50);
  ground.display();
 
}