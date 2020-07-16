var canavs;
var database;
var playerCount;
var gameState=0
var form,player,game;
var allPlayers;
var player1,player2,players;



function setup() {
    canvas = createCanvas(displayWidth-30,displayHeight-30);
    database=firebase.database();
    game=new Game();
    game.getstate();
    game.start();
}


function draw() {
   // background(0);
    if(playerCount===2){
        game.update(1);
    }
    if(gameState==1){
        clear();
        game.play();
    }  

}

