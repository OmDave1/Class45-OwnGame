//variable declarations
var bg,bgImg;
var player, shooterImage, shooter_shooting;

//loading the images
function preload(){
shooterImage = loadImage("assets/shooter_2.png");
shooter_shooting = loadImage("assets/shooter_3.png");
bgImg = loadImage("assets/bg.jpeg");
}

function setup(){
//creating canvas, whilst adujusting windowWidth and windowHeight
createCanvas(windowWidth,windowHeight);

//npc(non player character), background, loading the background image
bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20);
bg.addImage(bgImg);
bg.scale = 1.1;

//pc(playing character), setting the hitbox, size,image and setting debug as true
player = createSprite(displayWidth-1150,displayHeight-300,50,50);
player.addImage(shooterImage);
player.scale = 0.3;
player.debug = true;
player.setCollider("rectangle", 0,0,300,300);

}

function draw(){
//setting background as 0
background(0);

//setting the key functions to move the player (up and down arrow)
if(keyDown("UP_ARROW") || touches.lenght>0){
  player.y = player.y-30;
}

if(keyDown("DOWN_ARROW") || touches.lenght>0){
  player.y = player.y+30;
}

//setting it so that when "space" is held down, the gun will aim. Also add image of gun being aimed
if(keyWentDown("space")){ 
  player.addImage(shooter_shooting);
}
else if(keyWentUp("space")){
  player.addImage(shooterImage);
}

//letting the images be shown
drawSprites(); 
}



