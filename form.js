class Form{
    constructor(){
        this.input=createInput('name');
        this.button=createButton('play');
        this.greeting=createElement('h3');
    }
   /* hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }*/
    display(){
        var title=createElement('h2');
        title.html("Hurdles");
        title.position(displayWidth/2-50,0);
     
      
    this.input.position(130,160);
       this.button.position(250,200);
      // this.reset.position(displayWidth-250,displayHeight/8);
      

       this. button.mousePressed(()=>{
            this.input.hide();
           this. button.hide();
            player.name=this.input.value();

            playerCount++;
            player.index=playerCount;
            player.update();
            player.updateCount(playerCount);
            
            this.greeting.html("hello "+name);
           this.greeting.position(130,160);
        });
    }
}