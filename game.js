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
     start(){
        if(gameState===0){
            player=new Player();
           // var playerCountRef= await database.ref('playerCount').once("value")
        // if(playerCountRef.exists()){
             //playerCount=playerCountRef.val();
             player.getCount();
             form=new Form();
             form.display();
        }
       // form=new Form();
       // form.display();
   
    }
    play(){
        form.hide();
        textSize(30);
        text("Game Start",120,100);
        Player.getPlayerInfo();

        if(allPlayer!==undefined){
            var display_position=130
            for(var plr in allPlayers){
                if(plr==="player"+player.index){
                    fill("red")
                }
                else{("black")};
            }
            display_position+-20;
            textSize(15);
            text(allPlayers[plr].name+": ")
        }
        if(keyIsDown(UP_ARROW)){
            player.distance=player.distance+50;
            player.update();
    }
    
      
    }
}
