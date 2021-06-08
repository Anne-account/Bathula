 const Engine = Matter.Engine
 const World = Matter.World;
 const Bodies = Matter.Bodies;
 const Constraint = Matter.Constraint;
 const Render = Matter.Render;
 
 var gameState=0;
 var engine, world;
 var car,car1,car2,car3, car4, car5,ground1,ground2;
 var zombie1, zombie2, zombie3, zombie4, zombie5, zombie6, zombie7, zombie8, zombie9, zombie10, zombie11, zombie12, zombie13, zombie14, zombie15;
var carimg,car1img,car2img,car3img,car4img,car5img;


 function preload(){
  carimg=loadImage("car.png");
  car1img=loadImage("car1.png");
  car2img=loadImage("car2.png");
 }

 function setup(){
    createCanvas(1500, 700);
    engine = Engine.create();
    world = engine.world;

    if (gameState===0){
    car1= new Car(100,400,100,40);
    car2= new Car(375,400,100,40);
    car3= new Car(675,400,100,40);
    car4= new Car(976,400,100,40);
    car5= new Car(1276,400,100,40);
    ground1=new Ground();
  }
    button= createButton("Start");
    button.position(1325,57);
    
    button.mousePressed(function(){
      button.hide();
      gameState=1;
      console.log("Start the game");
      console.log(gameState);

     
      car= new Car(200,539,100,40);
      zombie1= new Zombie(700,100);
      zombie2= new Zombie(800,100);
      zombie3= new Zombie(900,100);
      ground2=new Ground();
    });

   
 }

function draw (){
  background("lightblue");
  Engine.update(engine);

  if (gameState===0){
    textSize(20);
    stroke("black");
    text("WELCOME TO ZOMBIE KILL GAME",550,217);

  ground1.display();
  car1.pic(car1img);
  car2.pic(carimg);
  car3.pic(car1img);
  car4.pic(car2img);
  car5.pic(carimg);
  car1.display();
  car2.display();
  car3.display();
  car4.display();
  car5.display();
  }

  if (gameState===1){ 
  ground1.remove();
  car1.remove();
  car2.remove();
  car3.remove();
  car4.remove();
  car5.remove();
  ground2.display();
  car.pic(carimg);
  car.display();
  zombie1.display();
  zombie2.display();
  zombie3.display();
  }

  textSize(20);
  text(mouseX+","+mouseY,mouseX,mouseY);
}

function keyPressed(){
if(keyCode===RIGHT_ARROW){
car.body.position.x=car.body.position.x+5;
}

if(keyCode===LEFT_ARROW){
  car.body.position.x=car.body.position.x-5;
  }

if(keyCode===UP_ARROW){
car.body.position.y=car.body.position.y-5;
}

if(keyCode===DOWN_ARROW){
  car.body.position.y=car.body.position.y+5;
  }

  if(keyCode===32){
   console.log(car);
    }
}
 



 
 