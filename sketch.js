let sceneNum = 0;
let dot = new Mover();
let dots = [];


function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 400; i++) {
    dots[i] = new Mover();
  }
}



function draw() {
  background(random(150) % 100, 20 % 90, 20 % 90);
  textSize(25);
  text("Phenomenal", 120, 300);
  //The dark flashing background to add to the artshow as well as a word to describe it
  
  if (sceneNum == 1) {
    fill(random(255), random(255), random(255));
    rect(mouseX, mouseY, 10, 10); //Draws a colourful cursor while the artshow is going on
  }

  mouseClicked = function() {
    sceneNum++;
  }



  if (sceneNum == 0) {
    background(190, 255, 10);
    fill(3, 14, 255);
    textSize(25);
    text("The Artshow", 120, 100);
    textSize(20);
    text("Click Your Mouse to Begin", 40, 200);
    text("1", 370, 390);
  } else if (sceneNum == 1) {
    for (let i = 0; i < 400; i++) {
      dots[i].update();
      dots[i].show();
      fill(3, 14, 255);
      text("2", 370, 390);
    }
  }


  if (sceneNum == 2) {
    background(190, 255, 10);
    fill(3, 14, 255);
    textSize(25);
    text("The Artshow Is Finished", 50, 100);
    textSize(30);
    text("Thanks for Watching", 50, 200)
    text("3", 370, 390);
  }
  
  
  if(sceneNum == 3) {
  text("---", 370, 390);
  }

  
}
