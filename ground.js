class Ground {
    constructor(){

    var options={
    isStatic:true,
    
    }

   this.body=Bodies.rectangle(750,600,1500,40,options);  
   this.width=1500;   
   this.height=40;   
   World.add(world,this.body);
    } 

    display(){
      var pos=this.body.position;
      var angle=this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      fill("white");
      stroke("black");
      strokeWeight(4);
      rectMode(CENTER);
      rect(0,0,this.width,this.height);
      pop();
    }
    remove(){
      World.remove(world,this.body);
    }
}
