var bullet,zombie,zombieImage,thickness,shotgun,shotgunImage;
var speed,weight,wall1,wall2; 
var score=0;
function preload(){
shotgunImage=loadImage("shotgun.png")
zombieImage=loadImage("zombie.png")
}
function setup() {
 
 createCanvas(1800,800);
 shotgun=createSprite(50,200,50,20)
 shotgun.addImage(shotgunImage)
 weight=random(30,52);
 
 wall1=createSprite(1100,400,1700,20)
 wall2=createSprite(1100,600,1700,20)
 zombieGroup=new Group()
 bulletGroup=new Group()
 thickness=random(22,83);
}

function draw() {
  background(255,255,255);  
  fill("red")
  textSize(30)
  text("score:"+score,1600,100)
  shotgun.y=mouseY;
  //shotgun.depth=bullet.depth;
  //shotgun.depth=shotgun.depth+1;
  reload()
 spawnZombie()
 shoot();
 
 if(zombieGroup.isTouching(bulletGroup)){
  zombieGroup.destroyEach()
  bulletGroup.destroyEach()
  score=score+10;
  
}

 
drawSprites();
  }
 
 function spawnZombie(){
   if(frameCount%60===0){
  
   var a=Math.round(random(1,2));
   switch (a) {
     case 1:
      zombie=createSprite(1800,500,80,80)
      zombie.addImage(zombieImage)
       break;
      case 2:
       zombie=createSprite(1800,300,80,80)
      zombie.addImage(zombieImage)
      
       break;

   }
  
     zombie.velocityX=-4;
     zombie.scale=0.5
     zombieGroup.add(zombie)
   }
 }

 function shoot(){
   if(keyDown("e")){
     bullet.velocityX=600;

   }
  
 }

 function reload(){
  if(frameCount%120===0){
  bullet=createSprite(50,200,50,5);
 
  bullet.y=mouseY-40;
  
  bulletGroup.add(bullet)
  }
 }

