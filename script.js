let player;

let tiro, tiroL, tiroR;
let grupoTiros;
let tiros = []

let bombas = 3;
let textBomb;

let pontos = 0;
let textPontos;

let inimigo, InimigoImg;
let grupoInimigos;
let inimigos = []

let vel = 15;

let jogo

function preLoad(){
  InimigoImg = loadImage("./sprites/inimigo1.png")
}

function setup(){
  createCanvas(900,900)

  jogo = new Jogo()

  player = createSprite(425, 670,40,40)

  grupoTiros = createGroup()

  grupoInimigos = createGroup()

  textBomb = createElement("h2",`Bombas: ${bombas}`)
  textBomb.position(910,50)

  textPontos = createElement("h2",`Pontos: ${pontos}`)
  textPontos.position(910,20)

}

function draw(){

  if(jogo.state === 0){
      jogo.menu()
  }else if(jogo.state === 1){
    jogo.jogar()
  }else{
    jogo.fim()
  }

}



function controlesPlayer(){

  if(keyIsPressed === true && keyCode != 32) keyPressed()

}

function keyPressed() {

  if(player.x > 0){
    if (keyCode === LEFT_ARROW) {
      player.x = player.x - vel;
    } 
  }

  if(player.x < 900){
    if (keyCode === RIGHT_ARROW) {
      player.x = player.x + vel;
    }
  }

  if(player.y > 0){
    if (keyCode === UP_ARROW) {
      player.y = player.y - vel;
    }
  }
  
  if(player.y < 900){
    if (keyCode === DOWN_ARROW) {
      player.y = player.y + vel;
    }
  }

  //90 é a tecla Z
  if(keyCode === 90 && bombas > 0 && !jogo.bombaLancada ){
    bombas -= 1
    textBomb.html(`Bombas: ${bombas}`)
    // for (let i = 0; i < inimigos.length; i++){
    //   //delete inimigos[i]
    //   inimigos.splice(0,inimigos.length-1)
    // }
    inimigos = []
    jogo.bombaLancada = true
    setTimeout(()=>{
      jogo.bombaLancada = false
    },5000)
    console.log(bombas)
  }

  //16 é a tecla Shift
  if(keyDown(16)){
    vel = 5
  }else{
    vel = 15
  }

}

function criarTiro(){
  tiro = createSprite(player.x,player.y,5,10)
  tiro.velocityY = -60
  tiro.lifetime = 20

  tiroL = createSprite(player.x,player.y,5,10)
  tiroL.addSpeed(-60,75)
  tiroL.lifetime = 20

  tiroR = createSprite(player.x,player.y,5,10)
  tiroR.addSpeed(-60,105)
  tiroR.lifetime = 20
  
  grupoTiros.add(tiro)
  grupoTiros.add(tiroL)
  grupoTiros.add(tiroR)

  // tiros.push(tiro)
  // tiros.push(tiroL)
  // tiros.push(tiroR)
}

function criarinimigoReto(){

  let lado = Math.round(random(1,2))

  if (lado === 1) {
    let inimigo1 = new Inimigos(1,950,100,-10,3,10)
    inimigos.push(inimigo1)
  } else {
    let inimigo1 = new Inimigos(1,-50,100,10,3,10)
    inimigos.push(inimigo1)
  }


  
}

function criarinimigoLate(){
  let lado = Math.round(random(1,2))

  if (lado === 1) {
    let inimigo2 = new Inimigos(2,950,random(100,300),-10,0,10)
    inimigos.push(inimigo2)
  } else {
    let inimigo2 = new Inimigos(2,-50,random(100,300),10,0,10)
    
  }

}

function colisaoTiro(){
  grupoTiros.overlap(grupoInimigos, (tiro,inimigo)=>{

    tiro.destroy()

    let valor = 5

    Inimigos.remove(valor)

  })

  // for (let i = 0; i < tiros.length; i++){
  //   for (let j = 0; j < inimigos.length; j++){
  //     if (tiros[i].collide(inimigos[j])){
  //       tiros[i].destroy()
  //       inimigos[j].destroy()
  //     }
  //   }
  // }

  if(jogo.bombaLancada = true){
    valor = 10
  }
}