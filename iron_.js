class Iron_{
	constructor(x,y,r)
	{
		var options = {
			density:0.9,
			friction: 5,
			restitution:1.5
		  };
	
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, 10, options)
		this.r=10;
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			ellipseMode(RADIUS);
			strokeWeight(1);
			stroke("black");
			fill("grey");
			ellipse(rubberpos.x,rubberpos.y,this.r,this.r);
			
			pop()
	}

}