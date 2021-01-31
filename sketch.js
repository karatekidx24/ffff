
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600, 400);

  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale=0.1
  
  ground=createSprite(400,350,900,10)
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x)
}


function draw() {
background("white");
 var survivaltime=0;
  stroke("white")
  textSize(20);
  fill("white")
  
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survival time:"+survivalTime, 100, 50);
  
  
  if(keyDown("space") ){
    monkey.velocityY=-12
  }
  
  monkey.velocityY=monkey.velocityY + 0.8
  if(ground.x<0){
    ground.x=ground.width/2
  }
  monkey.collide(ground)
  bananas();
  rocks();
  drawSprites();
}
function bananas(){
  if(frameCount%80===0){
banana=createSprite(600,250,40,10)
    banana.y=random(120,200)
    banana.velocityX=-4
    banana.addImage(bananaImage)
    banana.lifetime=300
    banana.scale=0.1
  }
}

function rocks(){
  if(frameCount%300===0){
    rock=createSprite(800,320,10,40)
    rock.addImage(obstaceImage)
    rock.velocityX=-5
    rock.scale=0.2
  }
}



