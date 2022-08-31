class Jogo {
    constructor(){
        this.bombaLancada = false
        this.state =  1
    }

    menu() {
        // quando apertar botão de Start mudar estado para 1
    }

    jogar() {
        background(50)
    
        fill(255)
    
        controlesPlayer()

    
        drawSprites()
    
        if(keyDown(32)){
          criarTiro()
        }

       if(frameCount%80 === 0){
        criarinimigoReto()
       }

       if(frameCount%150 === 0){
        criarinimigoLate()
       }

       console.log(inimigos)

       colisaoTiro()
    }

    fim() {
        background("red")
        
    }

}