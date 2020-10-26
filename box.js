class Box extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      
    }
  display(){
    var pos =this.body.position;
      rectMode(CENTER);
      fill(102, 204, 255);
      stroke("black");
      strokeWeight(2)
      rect(pos.x, pos.y, this.width, this.height);
    }

    display2(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill(255, 204, 204);
        stroke("black");
        strokeWeight(2)
        rect(pos.x, pos.y, this.width, this.height);
      } 
    
      display3(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill(0, 255, 255);
        stroke("black");
        strokeWeight(2)
        rect(pos.x, pos.y, this.width, this.height);
      } 
      
      display4(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill(95,95,95);
        stroke("black");
        strokeWeight(2)
        rect(pos.x, pos.y, this.width, this.height);
      } 
      
  };