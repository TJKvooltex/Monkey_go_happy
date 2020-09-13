var ground,groundImage;
var monkey,monkeyImage,monkey_running;
var banana,bananaImage,bananaGroup;
var obstacle,obstacleImage,obstacleGroup;
var backgr,backImage;
var score=0;



function preload() {
 backImage=loadImage("jungle.jpg");
  
 monkey_running=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
 
 bananaImage=loadImage("banana.png");
  obstacleImage=loadImage("stone.png");
 }
function setup() {
  createCanvas(400, 400);
  
  backgr=createSprite(0,0,400,400);
  
  backgr.scale=0.0;
  
  backgr.addImage("background",backImage);
  
  backgr.x = backgr.width/2;
  
  backgr.velocityX=-4;

  
monkey=createSprite(50,370,20,50);
  
monkey.addAnimation("running",monkey_running);
monkey.scale=0.1;

  ground = createSprite(200,390,400,20);
  
  ground.x = ground.width/2;
  
  ground.velocityX = -4;

  bananaGroup = new Group();
obstacleGroup = new Group();

}



function draw() {
  background(backImage);
  
  
  if (ground.x < 0){
      ground.x = ground.width/2;
  
    }
   if (backgr.x < 0){
      backgr.x = backgr.width/2;
  
    }
  
  
  
 
  if(keyDown("space")&&monkey.y>160) {
        monkey.velocityY = -10;
      }
 
  monkey.velocityY= monkey.velocityY+0.8;
  
   monkey.collide(ground);
   
  
  if (bananaGroup.isTouching(monkey)){
  score=score+2;
  bananaGroup.destroyEach();
    }
 
  
   switch (score){
    case 10 : monkey.scale=0.12;
      break;
  case 20 : monkey.scale=0.14;
      break;
  case 30 : monkey.scale=0.16;
      break;
  case 40 : monkey.scale=0.18;
      break;
      default:break;
  }
  
  spawnBananas();
  spawnObstacles();
  
  
  if (obstacleGroup.isTouching(monkey)){
  monkey.scale=0.08;
  score=score-2;
  obstacleGroup.destroyEach();
  } 
  
  drawSprites();

  stroke("white");
  textSize(20);
  fill("white");
  text("score:"+score,300,50); 
  
  
  ground.visible=false; 
  
}

function spawnBananas() {
  if (World.frameCount % 100 === 0) {
    var banana = createSprite(400,310,40,10);
    banana.y = Math.round(random(280,320));
    banana.addAnimation("banana",bananaImage);
   
   
   
   
    banana.scale = 0.05;
    banana.velocityX = -3;
    
    
    banana.lifetime = 134;
    
    
    bananaGroup.add(banana);
  }
  
}
function spawnObstacles() {
  if(World.frameCount % 90 === 0) {
    var obstacle = createSprite(400,370,10,40);
    obstacle.velocityX = -3;
    obstacle.addAnimation("obstacle",obstacleImage);
    obstacle.scale=0.5;
    
  
    
    obstacle.scale = 0.10;
    obstacle.lifetime = 70;
    obstacleGroup.add(obstacle);
  }
}






