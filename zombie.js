class Zombie{
    constructor(x,y){

        var options={
        restitution:0.8,
        friction:1,
        density:0.5
        }
       this.image=loadImage("zombie.gif");
       this.body=Bodies.rectangle(x,y,100,100, options);  
       this.width=100;   
       this.height=100;   
       World.add(world,this.body);
        } 
    
        display(){
          var pos=this.body.position;
          var angle=this.body.angle;
          push();
          translate(pos.x,pos.y);
          rotate(angle);
        //  fill("green");
        //  rectMode(CENTER);
          imageMode(CENTER);
        //  rect(0,0,this.width,this.height);
          image(this.image,0,0,this.width,this.height);
          pop();
        }
    }
