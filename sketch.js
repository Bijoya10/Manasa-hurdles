var canavs;
var database;
var playerCount;
var gameState=0
var form,player,game;
var allPlayers;



function setup() {
    canvas = createCanvas(600, 400);
    database=firebase.database();
    game=new Game();
    game.getstate();
    game.start();
}


function draw() {
    

}

