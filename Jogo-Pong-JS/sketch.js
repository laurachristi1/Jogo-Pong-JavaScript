//let- permite que você declare variáveis limitando seu escopo no bloco, instrução, ou em uma expressão na qual ela é usada.
//draw executa o código que está dentro dela infinitamente e uma quantidade específica de vezes, até que haja uma instrução que faça o programa parar.
// Funções (function) são blocos de construção fundamentais.É um conjunto de instruções que executa uma tarefa ou calcula um valor.


  let xBolinha = 300;
  let yBolinha = 200;
  let diametro = 30;
  let raio = diametro/2;

//velocidades
  let velocidadexBolinha = 8;
  let velocidadeyBolinha = 5;

//forma da raquete
  let raqueteLargura = 10;
  let raqueteComprimento = 120;

//variaveis da raquete
  let xRaquete = 5;
  let yRaquete = 150;

//variáveis do oponente
  let xRaqueteOponente = 580;
  let yRaqueteOponente = 150;
  let velocidadeYOponente;

  let colidiu = false;

  //placar do jogo
  let meusPontos = 0;
  let pontosDoOponente = 0;

  function setup() {
  createCanvas(600, 400);
}

  function draw() {
  background(169,169,169); //COR DO FUNDO.
   
  mostrarBolinha();
  movimentaBolinha();
  direcoesBolinha();
  mostraRaquete(xRaquete, yRaquete);
  movimentaMinhaRaquete();
  //verificaColisaoRaquete();
  verificaColisaoRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  incluiPlacar();
  marcaPonto();
}

  function mostrarBolinha(){
  circle(xBolinha, yBolinha, diametro);
}

  function movimentaBolinha(){
  xBolinha += velocidadexBolinha;
  yBolinha += velocidadeyBolinha;
}

  function direcoesBolinha(){
  if(xBolinha > width || xBolinha < 0){
    velocidadexBolinha *= -1;
    }
  if(yBolinha > height || yBolinha < 0){
    velocidadeyBolinha *= -1;  
    }
}

  function mostraRaquete(x,y){
    rect(x, y, raqueteLargura, raqueteComprimento);
  }

  function movimentaMinhaRaquete(){
    if(keyIsDown(UP_ARROW)){ //vai para cima
      yRaquete -= 10;
  }
   if(keyIsDown(DOWN_ARROW)){
      yRaquete += 10;
  }
}


  function verificaColisaoRaquete(){
   colidiu =
  collideRectCircle(x, y, raqueteLargura, raqueteComprimento, xBolinha, yBolinha, raio);
  if (colidiu) {
    velocidadexBolinha *= -1;
  }
}


  function verificaColisaoRaquete(x, y){
  colidiu =
  collideRectCircle(x, y, raqueteLargura, raqueteComprimento, xBolinha, yBolinha, raio);
  if (colidiu) {
    velocidadexBolinha *= -1;
  }
}


  function movimentaRaqueteOponente() {
  velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteLargura / 2 - 30;
    yRaqueteOponente += velocidadeYOponente
}

  function incluiPlacar() {
  stroke(230, 251, 4)
  textSize(18);
  textAlign(CENTER);
    
  fill(color(135,206,250));  
  text(meusPontos, 200, 26);  
  rect(145, 10, 40, 20);
  fill(255);
    
  fill(color(238,130,238));  
  text(pontosDoOponente, 400, 26);
  rect(415, 10, 40, 20)
  fill(255);

}

  function marcaPonto() {
   if(xBolinha > 590){
    meusPontos +=1;
   }
    if(xBolinha < 1){
      pontosDoOponente +=1;
    }
}