var bulletGroup,floatingObjectGroup,cloudGroup
var mortar
var mortarImageback
var cloudImage
var backgroundImage

function preload (){
  mortarImage=loadImage("Images/cannon.png")
  cloudImage=loadImage("Images/cloud.png")
  bulletImage=loadImage("Images/bullet.png")
  hotAirBalloonImage=loadImage("Images/HotAirBalloon.png")
  backgroundImage=loadImage("Images/background.png")
}

function setup() {
  
  createCanvas(900,500);

  

  ground=createSprite(225,450,width*2,20)
  ground.addImage("ground",backgroundImage)
  

  ground2=createSprite(675,450,width*2,20)
  ground2.addImage("ground",backgroundImage)
  

  cloudGroup=new Group()
  bulletGroup=new Group()
  floatingObjectGroup=new Group()
  
  mortar = createSprite(width-100,height-100);
  mortar.addImage("Mortar1",mortarImage)
  mortar.scale=0.6
  mortar.setCollider("circle",100,-20,30)
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
  if(mouseX<810&&mouseX>716&&mouseY>296&&mouseY<388){
    mortar.pointTo(mouseX,mouseY)
  }
  mortar.debug=true
  drawSprites();
}

function spawnBullet(){

  var bullet = createSprite(mortar.x,mortar.y,17.5,17.5)
  bullet.addImage("bulletImage",bulletImage)
  bullet.debug=true
  bullet.setCollider("circle",-10,15,7.5)
  bullet.velocityX=-8
  bullet.velocityY=-8
  bulletGroup.add(bullet)
}

function spawnFloatingObjects() {

  var floatingObject1 = createSprite(0,100,10,10)
  floatingObject1.y = random(50,200)
  floatingObject1.velocityX = 10;
  floatingObject1.lifetime=900/10
  floatingObjectGroup.add(floatingObject1)
  floatingObject1.addImage("HotAirBalloon",hotAirBalloonImage)
  floatingObject1.scale=0.6
}

function spawnClouds(){

  if (frameCount % 60 === 0){
    var cloud = createSprite(0,100,10,10)
    cloud.y=random(100,200)
    cloud.velocityX = 2.5;
    cloud.lifetime=900/2.5
    cloudGroup.add(cloud)
    cloud.addImage(cloudImage)
    cloud.scale=0.175

  }
  
}