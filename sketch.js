
var trex ,trex_running;

function preload(){
  trex_running = loadAnimation("trex1.png", "trex3.png")

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex = createSprite(50,170,20,60)
 trex.addAnimation("running", trex_running)
 trex.scale = 0.4;

}

function draw(){
  background("white")
  
  drawSprites();
}
