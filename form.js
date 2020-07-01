class Form{
    constructor(){
       // this.input=createInput('name');
        //this.button=createButton('play');
        this.greeting=createElement('h3');
    }
   /* hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }*/
    display(){
        var title=createElement('h2');
        title.html("Car Racing Game");
        title.position(displayWidth/2-50,0);
       var  input=createInput('name');
      var  button=createButton('play');
      
       // this.input.position(displayWidth/2-50,displayHeight/2-50);
      // this.button.position(displayWidth/2-50,displayHeight/2);
      // this.reset.position(displayWidth-250,displayHeight/8);
      input.position(130,160);
      button.position(250,200);

        button.mousePressed(()=>{
            input.hide();
            button.hide();
            var name=input.value();

            playerCount+=1;
           // player.index=playerCount;
            player.update(name);
            player.updateCount(playerCount);
            
            this.greeting.html("hello "+name);
           this.greeting.position(130,160);
        });
    }
}