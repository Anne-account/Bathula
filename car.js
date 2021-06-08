class Car {
    constructor(x,y,w,h){

    var options={
    restitution:0.8,
    friction:0,
    density:1
    }
   
   this.body=Bodies.rectangle(x,y,w,h, options);  
   this.width=w;   
   this.height=h;   
   World.add(world,this.body);
    } 

    pic(i){
      this.image=i;
    }

    display(){
      var pos=this.body.position;
      var angle=this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      fill("blue");
     // rectMode(CENTER);
      //rect(0,0,this.width,this.height);
      imageMode(CENTER);
      image(this.image,0,0,200,100);
      pop();
    }
    remove(){
      World.remove(world,this.body);
    }
}