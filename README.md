# ICS2O-Prep-Artshow
My spin off of the Movers program, for the ICS2O Prep-Art Show assignment.

# Notes

## sketch.js file
----------------------------------------------------------------------
function draw() {
  background(random(150) % 100, 20 % 90, 20 % 90);
  textSize(25);
  text("Phenomenal", 120, 300);
----------------------------------------------------------------------
  /\The dark flashing background to add to the artshow as well as a word to describe it.

  
----------------------------------------------------------------------
  if (sceneNum == 1) {
    fill(random(255), random(255), random(255));
    rect(mouseX, mouseY, 10, 10); 
  }
----------------------------------------------------------------------
  /\Draws a colourful cursor while the artshow is going on.
  
## mover.js file

----------------------------------------------------------------------
var Mover = function(){
  this.x= 100/2;
  this.y = 100/2;
  this.size = 400 / 40;  
};
----------------------------------------------------------------------
/\I made a varible so that ,like the x and y position, the size could randomly change as well.


----------------------------------------------------------------------
Mover.prototype.update = function(){
    this.x+=random(-2,2);
    this.y +=random(-2,2);
    this.size +=random(-2, 2); 
};
----------------------------------------------------------------------
/\The size random.


----------------------------------------------------------------------
Mover.prototype.show = function(){
   
     
    noStroke();
  if(random(1)<0.5){
  fill(random(255) % 100, random(255) % 100, random(255) % 100); 
    triangle(this.x, this.y, 90,90, 200, 200);
  }else{
    fill(random(255) % 100,random(255) % 100,random(30) % 100);
  ellipse(this.x,this.y,this.size,30);
  } 
  
};
----------------------------------------------------------------------
/\The colours of the shapes are random and dark.
