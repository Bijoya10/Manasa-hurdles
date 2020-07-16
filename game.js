class  Game{
    constructor(){

    }
    getstate(){
        var gameStateRef=database.ref('gameState');
        gameStateRef.on("value",function(data){
            gameState=data.val();
        })
    }
    update(state){
        database.ref('/').update({
            gameState:state
        })
    }
     async start(){
        if(gameState===0){
            player=new Player();
            var playerCountRef= await database.ref('playerCount').once("value")
        if(playerCountRef.exists()){
             playerCount=playerCountRef.val();
             player.getCount();
        }
             
        }
        form=new Form();
        form.display();

        player1 = createSprite(100,200);
        player2 = createSprite(300,200);
        
        players = [player1, player2];

   
    }
    play(){
        form.hide();
        textSize(30);
        text("Game Start",180,100);
        Player.getPlayerInfo();
        var index=0;
        var x=0;
        var y=0;
        if(allPlayers!==undefined){
            var display_position=130;
            for(var plr in allPlayers){
                index++;
                
                x = x + 200;
                
                y = displayHeight - allPlayers[plr].distance;
                players[index-1].x = x;
                players[index-1].y = y;

                if(index === player.index){
                    players[index-1].shapeColor="red";
                    camera.position.x = displayWidth/2;
                    camera.position.y = players[index-1].y
                }
               
            }

            display_position+-20;
            textSize(15);
           // text(allPlayers[plr].name+": ")
        }
        if(keyIsDown(UP_ARROW)){
            player.distance=player.distance+50;
            player.update();
    }
    drawSprites();
      
    }
}
