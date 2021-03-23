
var monke , monkey_running , ground
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(540,460);
  
  monke = createSprite(100,100,10,10);
  monke.addAnimation("monke",monkey_running);
  monke.scale=0.2;
  
  
  ground = createSprite(288,440,750,20);    
  ground.velocityX=-4;
  //there is no image for ground
  
  score = 0;
  
  FoodGroup = createGroup();
  obstacleGroup = createGroup();
  
}


function draw() {
  background("white");
Food()
  obstacles();
  monke.debug=true;
  ground.debug=false;

  
  if(keyDown("space")&&monke.y>368){
    monke.velocityY=-16;
  }
  monke.velocityY = monke.velocityY+0.6;
  
  if(ground.x < 0){
  ground.x=ground.width/2;
  }
  
  textSize=20;
  fill("white")
  
  textSize=20;
  fill("black")
  score=Math.ceil((frameCount/frameRate()))
  text("Survival Time: "+ score,100,50)
  
  
  monke.collide(ground);
  drawSprites();
}

function obstacles(){
  if(frameCount % 300 === 0){
    var rock = createSprite(500,377,10,10);
    rock.velocityX=-8;
    rock.addImage(obstaceImage);
    rock.scale=0.30;             
    rock.setCollider("rectangle",0,0,rock.width,rock.height);
    rock.lifetime=62;
    obstacleGroup.add(rock);

  }
}
function Food(){
  if(frameCount % 80 === 0){
    var banana = createSprite(500,random(120,400),20,20);
    banana.velocityX=-8;
    banana.addImage(bananaImage);
    banana.scale=0.09;
    banana.setCollider("circle",0,0,193);
    banana.lifetime=62;
    FoodGroup.add(banana);
     
  }
}
