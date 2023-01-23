let stars = [];
let speed;


function setup() {

createCanvas(800,800);
for(let i =0 ; i <800; i++){
  stars[i] =new Star();
}
//background(51);


}

function draw() {
  speed = map(mouseX, 0 , width, 0, 50);
  background (0);
  translate (width/ 2, height /2);
  for (let i = 0; i < stars.length; i ++) {
    stars[i].update();
    stars[i].show();
  }
}

function Star(){
    this.x =random(-width, width);
    this.y =random(-height, height);
    this.z =random(width);
    this.pz = this.z;

    this.update = function(){
        this.z =this.z -speed;
        if(this.z <1) {
            this.z = width;
            this.x = random(-width, width);
            this.y = random(-height, height);
            this.pz = this.z;
        }
    };

    this.show = function(){
        fill(255,255,255);
        noStroke();

        var sx = map(this.x / this.z, 0,1,0, width);
        var sy = map(this.y / this.z, 0,1,0, height);

        var r = map(this.z, 0, width, 10,0);
        circle(sx, sy, r/2, r/2);

        var px = map((this.x / this.pz)*1, 0,1,0, width);
        var py = map((this.y / this.pz)*1, 0,1,0, height);

        this.pz =this.z;

     strokeWeight(r/2); 
      stroke(255,255,255, 120);
        line(px,py,sx,sy);

        stroke(120,0,255,50);
        strokeWeight(r/2); 
        //stroke(255,0,255, 120);
        line(px*.8,py*.8,sx *2,sy *2);

        strokeWeight(r/2.4); 
        stroke(0,0,255, 120);
        line(px*.7,py*.7,sx*.9,sy*.9);

        strokeWeight(r/2.8); 
       stroke(0,255,255, 120);
        line(px*.6,py*.6,sx*.8,sy*.8);

        strokeWeight(r/3.2); 
        stroke(0,127,255, 0);
        line(px*.5,py*.5,sx*.7,sy*.7);

        strokeWeight(r/3.6); 
        stroke(165,42,0, 42);
        line(px*.4,py*.4,sx*.6,sy*.6);

        strokeWeight(r/4); 
        stroke(0,127,255, 0);
        line(px*.3,py*.3,sx*.5,sy*.5);

        strokeWeight(r/2); 
        stroke(255,255,255, 255);   };
}

