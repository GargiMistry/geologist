class Stone{
    constructor(x, y, width, height) {
      var options = {
        density:12,
        friction: 0.9,
        restitution:0.8
      };

      this.x=x;
      this.y=y;
      this.width=width;
      this.height=height;

        this.body=Bodies.rectangle(x, y, 70, 90,options);
        this.width = 70;
        this.height = 90;
		World.add(world, this.body);
     
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        strokeWeight(3);
        stroke("brown")
        fill("maroon")
        rectMode(CENTER)
        rect(0, 0, this.width, this.height);
        pop();
    }
}
