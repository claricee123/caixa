var caixa;

function setup() {
  createCanvas(400,400);
  caixa= createSprite(200,200,30,30);
}

function draw() 
{
  background(30);
  drawSprites();

  if (keyIsDown(DOWN_ARROW)) {
    
    caixa.y+= 4
  }

  if (keyIsDown(UP_ARROW)) {
    
    caixa.y-= 4
  }
}




