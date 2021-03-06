  
class Polyogon{


    constructor(x, y, r){

        var options = {
            isStatic:false,
            restitution:1,
            friction:1,
            density:1.2
            
        }

        this.x = x;
        this.y = y;
        this.r = r;

        this.body = Bodies.circle(this.x , this.y , this.r/2 , options); 
        World.add(world, this.body);

        this.image = loadImage("hex.png");

        
    }

    display(){


        var pos=this.body.position; 
        push();
        translate(pos.x, pos.y);
        fill(255,0,255) 
        imageMode(CENTER); 
        ellipseMode(RADIUS) 
        image(this.image, 0,0,50, 50) 
        pop();

    }
        
}