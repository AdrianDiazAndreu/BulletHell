

class clsCirculo{
    constructor(x,y){
        this.x = x ;
        this.y = y ;
        this._loop() ;

        this.crearCirculo() ;

        this.text = document.addEventListener("keypress", (Event) => {
            if (Event.key === 'd') {
                this.moverDerecha() ;
            }
            if (Event.key === 'a') {
                this.moverIzquierda() ;
            }
            if (Event.key === 'w') {
                this.moverArriba() ;
            }
            if (Event.key === 's') {
                this.moverAbajo() ;
            }
            
            
        }) ;
    }


    crearCirculo(){
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0, 0, c.width, c.height);


        ctx.beginPath();

        ctx.arc(this.x, this.y, 50, 0, 2 * Math.PI);
        ctx.fillStyle = "red" ;
        ctx.fill() ;

        ctx.stroke();
    }

    moverDerecha(){
        console.log("derecha estoy amongus") ;
        this.x +=  12 ;

    }

    moverIzquierda(){

        this.x -=  12 ;

    }
    moverArriba(){

        this.y -=  12 ;
        
    }
    moverAbajo(){

        this.y +=  12 ;
        
    }

    _loop(){
        console.log("estoy amongus") ;
        this.crearCirculo() ;
        window.requestAnimationFrame(this._loop.bind(this));
    }

    
}