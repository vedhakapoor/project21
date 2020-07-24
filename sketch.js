var car,wall;
var speed,weight;
var deformation;

function setup() {
  createCanvas(800,400);
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(800,200,60,60);
  wall.shapecolor = (80,80,80);

  speed = random(55,90);
  weight = random(400,1500);

  deformation = (0.5*weight*speed*speed)/22500;
}

function draw() {
  background(255,255,255);  
  car.velocityX = speed;

  collisionDitection(car,wall);
  drawSprites();
}

function collisionDitection(obj1,obj2){
  if(obj1.x - obj2.x < obj1.width/2 + obj2.width/2
    && obj2.x - obj1.x < obj1.width/2 + obj2.width/2
    && obj2.y - obj1.y < obj1.height/2 + obj2.height/2
    && obj1.y - obj2.y < obj1.height/2 + obj2.height/2){
      if(deformation <= 100){
        obj1.shapeColor = "green";
      } else if(deformation < 180 && deformation > 100){
        obj1.shapeColor = "yellow";
      } else if(deformation > 180){
        obj1.shapeColor = "red";
      }
    }
}
