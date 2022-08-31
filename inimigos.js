class Inimigos{

    constructor(tipo,x,y,vx,vy,vida){
        this.sprite = createSprite(x,y,50,50)
        this.sprite.velocityX = vx
        this.sprite.velocityY = vy
        this.x = x
        this.y = y
        this.sprite.lifetime = 120
        
        grupoInimigos.add(this.sprite)
        //inimigos.push(this.sprite)
        this.vida = vida

        if(tipo === 1){
            this.sprite.shapeColor = "red"
        }else{
            this.sprite.shapeColor = "blue"
        }  
    }

    display(){

        text(this.vida,this.x,this.y)

    }

    static remove(dano){

        this.vida -= dano

        if(this.vida <= 0){
            this.sprite.destroy()
        }

    }


}