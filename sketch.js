const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var playerB, computerB;
var player, comp;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
    playerB=new Playerbase(100,100,100,100);
    computerB=new Computerbase(200,200,100,100);
    player=new Player(100,50,100,100);
    comp=new Player(200,150,100,100);
 }

function draw() {

  background("midnightblue");

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
   playerB.display();
   computerB.display();

   //display Player and computerplayer
   player.display();
   comp.display();


}
