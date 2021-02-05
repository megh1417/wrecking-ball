class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png");
    this.trajectory = [];

  }

  display() {
  //  this.body.position.x = mouseX;
  //  this.body.position.y = mouseY;
    super.display();
  if (this.body.velocity.x>10 && this.body.position.x>200){
    var position = [ this.body.position.x,this.body.position.y]; // [10,200] [12,210]
    this.trajectory.push(position);// trajectory=[[10,200],[12,210],[15,230],[16,300]] // 
  }

    for(var i=0; i<this.trajectory.length;i++){
      image(this.smokeImage, this.trajectory[i][0],this.trajectory[i][1] );
    }
  }
}
