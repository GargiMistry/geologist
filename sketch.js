const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,120);
    rubber = new Rubber(900,100)
    stone = new Stone(600,100);
    iron = new Iron(400,100);
    iron1 = new Iron_(300,100);
    iron2 = new Iron_(330,200);
    iron3 = new Iron_(360,100);
    iron4 = new Iron_(390,200);
    iron5 = new Iron_(410,100);
    iron6 = new Iron_(440,200);
    iron7 = new Iron_(470,100);
    iron8 = new Iron_(485,100);
    iron9 = new Iron_(490,200);
    iron10 = new Iron_(509,100);
    iron11 = new Iron_(515,200);
    iron12 = new Iron_(530,100);
    iron13 = new Iron_(540,200);
    iron14 = new Iron_(570,100);
    
    

}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    plane.display();
    hammer.display();
    rubber.display();
    stone.display();
    iron.display();
    iron1.display();
    iron2.display();
    iron3.display();
    iron4.display();
    iron5.display();
    iron6.display();
    iron7.display();
    iron8.display();
    iron9.display();
    iron10.display();
    iron11.display();
    iron12.display();
    iron13.display();
    iron14.display();




}