var bullet, thickness, wall, speed, weight;
function setup() {
  createCanvas(900, 800);
 speed = random(223,321);
 weight =random(30,52);
 thickness = random(22,83);

 wall = createSprite(700,200,thickness,400);
 wall.shapeColor = "white"; 

 bullet = createSprite(50, 200, 70, 20);
	bullet.velocityX = 60;
	bullet.shapeColor = "blue";
 }

function draw() {
  background(0);  
if (collision(bullet,wall)){
bullet.velocityX = 0;
damage = 0.5 * weight * speed * speed/ thickness * 3;


if (damage > 10) {
  wall.shapeColor = rgb(255, 0, 0);
} else if (damage < 10){
  wall.shapeColor = rgb(0, 255, 0);
}
  
}

  drawSprites();
}

function collision(bulletSprite, wallSprite) {
  bulletRightEdge = bulletSprite.x + bulletSprite.width;
  wallLeftEdge = wallSprite.x;

  if (bulletRightEdge >= wallLeftEdge) {
      return true;
  } else {
      return false;
  }
}