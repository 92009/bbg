
class rope{
	constructor(body1,body2,pointA,pointB)
	{
		this.pointA=pointA
		this.pointB=pointB
		var options={
			bodyA:body1,
			bodyB:body2,
			pointB:({x:this.pointA,y:this.pointB})
		}

		
	//create rope constraint here
   this.constrained=Matter.Constraint.create(options)
   World.add(world,this.constrained)
	}


    //create display() here 
display()
{
	var pointA=this.constrained.bodyA.position;
	var pointB=this.constrained.bodyB.position;
	strokeWeight(2)
	line(pointA.x,pointA.y,pointB.x,pointB.y)

	

}
}

