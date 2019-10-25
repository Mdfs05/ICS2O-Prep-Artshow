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
  /\The dark flashing background to add to the artshow as well as a word to describe it

  
----------------------------------------------------------------------
  if (sceneNum == 1) {
    fill(random(255), random(255), random(255));
    rect(mouseX, mouseY, 10, 10); 
  }
----------------------------------------------------------------------
  /\Draws a colourful cursor while the artshow is going on
  
## mover.js file

----------------------------------------------------------------------
