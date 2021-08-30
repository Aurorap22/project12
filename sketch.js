var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImage
var leaf,leafImage
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
appleImg = loadImage("apple.png")
leafImg = loadImage("leaf.png","orangeleaf.png","redImage.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
rabbit.x=mouseX;

apple = createSprite(180,340,10,10)



drawSprite();
}
