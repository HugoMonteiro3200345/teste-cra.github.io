let tabCores, data_element, clicked, device_orientation;

function preload() 
{
  tabCores = loadTable("tabelaDados.csv", "csv", "header");
}

function setup() 
{
  createCanvas (windowWidth, windowHeight);
  checkDeviceOrientation();
  importData();
  clicked = false;
}

function checkDeviceOrientation()
{
  if (width>height) device_orientation = "l";
  else 
  if (height>width) device_orientation = "p";
}

function draw() 
{
  background(240);
  drawData();
}

function mousePressed() 
{
  clicked = true;
}

function windowResized() 
{
  resizeCanvas (windowWidth, windowHeight);
  checkDeviceOrientation();
}