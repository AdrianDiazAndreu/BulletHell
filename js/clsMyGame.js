
class clsMyGame{
    constructor(){
        this.x = 450 ;
        this.y = 250 ;
        this.circulo = new clsCirculo(this.x, this.y,) ;
    }

    _loop(){
        //this.introscreen1.Draw(this.i++,this.j++) ;
        //console.log("_life_loop_");
        console.log("hola") ;
        window.requestAnimationFrame(this._loop.bind(this));
            
    }
}