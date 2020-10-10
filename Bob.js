class Bob {
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:1,
            friction:0,
            density:0.8
        }
        this.r=r;
        this.body=Bodies.circle(x, y, (this.r-0)/2,options);
       
        World.add(world,this.body);
    }
    display(){
        var pos =this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipse(0,0,this.r,this.r);
        fill("blue");
        pop();
        
     }
}