let player;

let tiro;
let posicaoTiro = []

let inimigo;

let vel = 6;


function setup(){
  createCanvas(900,900)

  player = createSprite(425, 670,40,40)

  inimigo = createSprite(425,100,50,50)

}

function draw(){
    background(50)
    
    fill(255)

    controlesPlayer()

    desenhoTiro()

    moverTiro()

    drawSprites()
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

  if(keyCode === 32){
    posicaoTiro.push(createVector(player.x,player.y-37))
  }
 
}


function moverTiro(){
  for(let posicao of posicaoTiro){
    posicao.y = posicao.y -20
  }
}

function desenhoTiro(){
  for(let posicao of posicaoTiro){
    tiro = ellipse(posicao.x,posicao.y,5,10)
  }
}