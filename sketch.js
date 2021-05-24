const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var gameState="PLAY";
var PLAY=1;
var END=0;
var engine,world;
var tina ,bg, tramp;
var butterflyImg1,butterflyImg2,butterflyImg3;
var batAnimation,fairyImg,tinaImg;
var butterfly,bat,fairy;
var butterGroup,batGroup,fairyGroup;

function preload(){
  bg=loadImage("33-01.jpg");

  tinaImg = loadImage("girl0.png");

  trampImg = loadImage("sprite_0.png");

  batAnimation = loadAnimation("bat1.png","bat2.png","bat3.png",    
  "bat4.png","bat5.png","bat6.png","bat7.png","bat8.png","bat9.png",
   "bat10.png","bat11.png","bat12.png");

  butterflyImg1 = loadAnimation("1b.png","2b.png","3b.png","4b.png","5b.png",
                              "6b.png","7b.png","8b.png","9b.png","10b.png",
                              "11b.png","12b.png","13b.png","14b.png",
                              "15b.png","16b.png");

  butterflyImg2 = loadAnimation("r1.png","r2.png","r3.png","r4.png","r5.png");

  butterflyImg3 = loadAnimation("b0.png","b1.png","b2.png","b3.png","b4.png");

  fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png");
  
}


function setup() {
  createCanvas(600,1700);
 


  engine = Engine.create();
  world = engine.world;

  tina=createSprite(300,1400,10,10);
  tina.addImage(tinaImg);
  tina.scale=0.5

  tramp=createSprite(300,1600,10,10);
  tramp.addImage(trampImg);
  tramp.scale=0.7;

  butterGroup = new Group();

  batGroup = new Group();

  fairyGroup = new Group();

}

function draw() {
 
  background(bg);  

    camera.position.x = 300;
    camera.position.y = tina.y-400;


    if(keyDown(RIGHT_ARROW)){
      
      tina.x+=5
    }

    if(keyDown(LEFT_ARROW)){
      
      tina.x-=5
    }
  
    if(keyDown("space")) {
      tina.velocityY = -12;
    }

    tina.velocityY = tina.velocityY + 0.8;
    tina.collide(tramp);

    if(tina.x>600){

      tina.x=590;
    }
    if(tina.x<0){

      tina.x=10;
    }

   
    createButterfly();
    createBat();
    createFairy();

 
  drawSprites();

}

function createButterfly(){
    if(frameCount%140===0){
      butterfly=createSprite(random(20,680),random(20,900),15,15);
      butterfly.velocityX=random(-4,4);
      butterfly.velocityY=random(-4,4);
      var rand =Math.round(random(1,3));
      switch(rand){
        case 1:butterfly.addAnimation("butterfly1",butterflyImg1); 
        butterfly.scale=1;
        break;
        case 2:butterfly.addAnimation("butterfly2",butterflyImg2);
        butterfly.scale=0.5;
        break;
        case 3:butterfly.addAnimation("butterfly3",butterflyImg3); 
        butterfly.scale=0.5;
        break;
        default :break;
      }
      butterfly.lifetime=370;
      butterGroup.add(butterfly);
   }
}

function createBat(){
  if(frameCount%200===0){
    bat=createSprite(random(20,680),random(20,900),15,15)
    bat.addAnimation("bat",batAnimation);
    bat.scale=0.7;
    bat.velocityX=random(-4,4);
    bat.velocityY=random(-4,4);
    bat.lifetime=270;
    batGroup.add(bat);
  }  
}

function createFairy(){
  if(frameCount%180===0){
    fairy=createSprite(random(20,680),random(20,900),15,15)
    fairy.addAnimation("fairy",fairyImg);
    fairy.scale=0.1;
    fairy.velocityX=random(-4,4);
    fairy.velocityY=random(-4,4);
    fairy.lifetime=370;
    fairyGroup.add(fairy);
  }  
}
