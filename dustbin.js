class Dustbin {
    constructor(x,y,width,height) {
      var options = {
          'restitution':0.3,
          'friction':0.5,
          'density':1.2,
          'isStatic':true,
      }
      
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){

      rectMode(CENTER)
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      rect(pos.x, pos.y, this.width, this.height);
      pop();

   }
  }