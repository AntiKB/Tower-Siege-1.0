class Block {
    constructor(x,y,width,height){
        var Options = {
            'isStatic': false,
            'restitution': 0.25,
            'friction': 0.5,
            'density': 0.2
        }
        this.body = Bodies.rectangle(x,y,width,height,Options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        var Position = this.body.position;
        var angle = this.body.angle;
        push();
        rectMode(CENTER);
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        fill("BLUE");
        rect(0,0,this.width,this.height);
        pop();
    }
}