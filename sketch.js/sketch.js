
function setup()
{
  createCanvas(400, 400);
  background(0);
  
  x = 0;
  y = 0;
  // try changing 'spacing' below to 20, 50, etc
  spacing = 20;
}

function draw()
{
  stroke(255);
  // try changing '0.5' below to 0.1, 0.9, etc
  if (random(1) < 0.7)
  {
    line(x, y, x + spacing, y + spacing);
    // try commenting out the line() above and below and instead use rect():
    //rect(x, y, spacing, spacing);
  } 
  else 
  {
    line(x, y + spacing, x + spacing, y);
  }

  x += spacing;
  if (x > width)
  {
    x = 0;
    y += spacing;
  }
}
