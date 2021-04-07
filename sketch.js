var bulletGroup,floatingObjectGroup,cloudGroup
var mortar
var mortarImage
var cloudImage

function preload (){
  mortarImage=loadImage("Images/tile000.png")
  cloudImage=loadImage("Images/cloud.png")
}

function setup() {
  createCanvas(900,500);

  mortar = createSprite(width-100,height-100);
  mortar.addImage("Mortar1",mortarImage)
  mortar.scale=1.75

  cloudGroup=new Group()
  bulletGroup=new Group()
  floatingObjectGroup=new Group()
}

function draw() {
  background(255,255,255);  
  spawnClouds()
  if (frameCount % 60 === 0){
    spawnFloatingObjects()
  }
  if (keyWentDown("space")){
    spawnBullet()
  }
  mortar.pointTo(mouseX,mouseY)
  drawSprites();
}

function spawnBullet(){

  var bullet = createSprite(mortar.x,mortar.y,17.5,17.5)
  bullet.shapeColor="red"
  bullet.velocityX=-3
  bullet.velocityY=-3
  bulletGroup.add(bullet)
}

function spawnFloatingObjects() {

  var floatingObject1 = createSprite(0,100,10,10)
  floatingObject1.y = random(50,200)
  floatingObject1.velocityX = 10;
  floatingObject1.lifetime=900/10
  floatingObjectGroup.add(floatingObject1)
}

function spawnClouds(){

  if (frameCount % 60 === 0){
    var cloud = createSprite(0,100,10,10)
    cloud.y=random(100,200)
    cloud.velocityX = 2.5;
    cloud.lifetime=900/2.5
    cloudGroup.add(cloud)
    cloud.addImage(cloudImage)

  }
  
}