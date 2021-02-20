class Dustbin {
    constructor(x, y, width, height) {
      var options = {
        isStatic:false,  
        'restitution':0,
          'friction':10,
          'density':4.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      //this.leftbody = Bodies.rectangle(x, y, width, height, options);
      //this.rightbody = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("sprites/dustbingreen.png")
      World.add(world, this.body);
      //World.add(world, this.leftbody);
      //World.add(world, this.rightbody);

    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
     
      strokeWeight(4);
      fill(255);
      //image(this.image,0, 0, this.width, this.height);
      rect(0, 0, this.width, this.height);
      pop();
    }}