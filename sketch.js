var balloon,balloonImg,balloonImg2,balloonImg3;
var bg, bgImg;

function preload(){


  balloonImg = loadImage("HotAirBallon-02.png");
  balloonImg2 = loadImage("HotAirBallon-03.png");
  balloonImg3 = loadImage("HotAirBallon-04.png");
  bgImg = loadImage("HotAirBallon-01.png");

}

function setup() {
  createCanvas(1000,500);
  balloon = createSprite(200, 350, 50, 50);
  balloon.addImage(balloonImg);
  balloon.scale = 0.6;

}

function draw() {
  background(bgImg);
  
  textSize(25);
  text("Use Arrow Keys To Move The Hot Air Balloon !",200,20)
  fill("black");

  if(keyDown(LEFT_ARROW)){
   balloon.x = balloon.x - 10;
   balloon.addImage(balloonImg,balloonImg2,balloonImg3);
  }

  else if(keyDown(RIGHT_ARROW)){
  balloon.x = balloon.x + 10;
  balloon.addImage(balloonImg3,balloonImg2,balloonImg);
  }

  else if(keyDown(UP_ARROW)){
   balloon.y = balloon.y -10;
    balloon.scale = balloon.scale - 0.01;
    balloon.addImage(balloonImg2,balloonImg,balloonImg3);
  
   }

  else if(keyDown(DOWN_ARROW)){
   balloon.y = balloon.y + 10; 
    balloon.scale = balloon.scale + 0.01;
    balloon.addImage(balloonImg3,balloonImg2,balloonImg);
  }
  
function writePosition(x,y){
    database.ref('ball/position').set({
        'x': changePosition.x + x,
        'y': changePosition.y + y 
    })
}

  function updateHeight(x,y){

    database.ref('balloon/height').set({
      'x': height.x + x,
      'y': height.y + y
    })
  }

  function readHeight(data){

    height = data.val();
    balloon.x = height.x;
    balloon.y = height.y;

  }

  function showError(){
    console.log("Error in writing to the database");
  }

  drawSprites();
}