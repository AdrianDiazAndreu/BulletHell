class clsAsteroidsGame {
    constructor(pWin, pDoc) {
        this.cont_aux = 1 ;
        console.log('__clsAsteroirdGame_______________');
        this.Doc = pDoc; // objeto del documento
        this.win = pWin; // objeto de la ventana
        this.roza=-0.03; // el valor del rozamiento
        this.maxvelo=2; // velocidad maxima
        //this.pretime=0;
        this.canvas=this.Doc.getElementById('canvas'); // canvas tag
        this.ctx = this.canvas.getContext('2d'); // contexto del canvas



        this._drawRect() ;

      
        this._loop(); // main loop del juego
    }

    // CreateEvents(){ // no tengo ni idea del funcionamiento de este metodo 
    //     this.Doc.addEventListener('__KEYPRESS_CUSTOM', this._InteractionCallBack.bind(this));

    // }
    /////////////////////////////////////////////////////////////////////////////

    	_drawRect(){
		// Dibuja el rectangulo verde que rodea al canvas
		this.ctx.beginPath();
		this.ctx.lineWidth = "4";
		this.ctx.strokeStyle = "black";
		this.ctx.rect(0, 0, 680, 520);
		this.ctx.stroke();
		// dibuja un rectangulo esto esta facil
    	}

    ////////////////////////////////////////////////////////////////////////////
    _loop(){

       console.log("main_class") ;

        window.requestAnimationFrame(this._loop.bind(this)); // se llama a ella misma
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////

   

}



