var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var runners, runner1, runner2, runner3, runner4;

var track;

function preload(){
  track = loadImage("images/track.jpg");
  
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background(0,200,200);
  spawnHurdles(250);
  spawnHurdles(350);
  spawnHurdles(450);
  spawnHurdles(550);
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}

function spawnHurdles(y){
  for (var i = 1500; i<4500; i+=500){
    hurdle = createSprite(i,y,30,70);
  }
}

