
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(500,300);
  
  monkey = createSprite(180,200,10,10);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(280,230,900,5);
  ground.velocityX= - 3;
  
  obstacleGroup = new Group();
  FoodGroup = new Group();

  score = 0;
}


function draw() {

  background("white");
  
  text("Survival Time : " + score, 400,30);
  score = score + Math.round(getFrameRate()/60);
  
  if(ground.x<0){
    ground.x= ground.width/2;
  }
    
  if(keyDown("space") && monkey.y>100){
    monkey.velocityY=-10;
  }
  monkey.velocityY = monkey.velocityY + 0.5;
   monkey.collide(ground);
  
  createBanana(); 
  createObstacle();
  
  drawSprites();
  
}

function createBanana(){
  if(frameCount % 80 == 0){
    banana = createSprite(600,Math.round(random(60,150)),10,10);
    banana.addImage(bananaImage);
    banana.velocityX = -3;
    banana.lifetime = 200;
    banana.scale = 0.05;
    
    banana.depth = monkey.depth -1;
    
    FoodGroup.add(banana);
  }
}

function createObstacle(){
  if(frameCount % 300 == 0){
    obstacle = createSprite(600,200,10,40);
    obstacle.velocityX= -5;
    obstacle.addImage(obstacleImage);
    obstacle.lifetime = 200;
    obstacle.scale = 0.15;

    obstacleGroup.add(obstacle);
  }
  
}




