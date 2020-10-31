  class stone{
        constructor(bodyA,pointB){
            var options={
                var stone
                stiffness:0.04,
                length:10
            }
            this.pointB=pointB;
            this.sling=Constraint.create(options);
            World.add(world,this.sling);
        }
        fly(){
    this.sling.bodyA=null;
        }
        display(){
            if(this.sling.bodyA){
            var pointA=this.sling.bodyA.position;
            var pointB=this.pointB;
            line(pointA.x,pointA.y,pointB.x,pointB.y);
            this.image = loadImage("desktop/stone.js");
            // i downloaded the image as stone.js
        }
    }
}


