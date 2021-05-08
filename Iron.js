class Iron{
    constructor(x, y, width, height) {
      var options = {
        density:30,
        friction: 2,
        restitution:1
      };

      this.x=x;
      this.y=y;
      this.width=width;
      this.height=height;

        this.body=Bodies.rectangle(x, y, 90, 60,options);
        this.width = 90;
        this.height = 60;
		World.add(world, this.body);
     
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        strokeWeight(3);
        stroke("silver")
        fill("silver")
        rectMode(CENTER)
        rect(0, 0, this.width, this.height);
        pop();
    }
}
