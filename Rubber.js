class Rubber{
	constructor(x,y,r)
	{
		var options = {
			density:1,
			friction: 5,
			restitution:0.3
		  };
	
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, 50, options)
		this.r=50;
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			ellipseMode(RADIUS);
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			ellipse(rubberpos.x,rubberpos.y,this.r,this.r);
			
			pop()
	}

}