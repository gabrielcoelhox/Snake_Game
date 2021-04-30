// Carregando o game com o CANVAS
let canvas = document.getElementById("snake");

// Renderização do Canvas para 2D
let context = canvas.getContext("2d");

// Cada quadrado terá 32 pixels
let box = 32;
let snake = [];
snake[0] = { // Posição
    x: 8 * box, // Tamanho
    y: 8 * box
}

// Variável responsável pela direção
let direction = "right";

// Math.floor remove a parte flutuante do jogo
// Math.random faz com que a comida apareça em locais randômicos
let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

function criarBG() {
    // Definir a cor do background (Mapa do jogo)
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function criarCobrinha(){
    // Serve para percorrer o tamanho da array e ir incrementando, ou seja, aumentando o tamanho da cobrinha.
    for (i=0; i < snake.length; i++) {
        context.fillStyle = "black"; // Cor da cobrinha
        context.fillRect(snake[i].x, snake[i].y, box-2, box-2); // Tamanho
    }
}

function drawFood(){
    // Cor da comida
    context.fillStyle = "red";
    // Posições (coordenadas) quando o fillRect for desenhar
    context.fillRect(food.x, food.y, box, box)
}

// Evento de clique para quando apertar os botões do teclado chamar a função update
document.addEventListener('keydown', update);

// Função update e regra que a cobrinha não pode voltar para a direção oposta
function update (event){
    if(event.keyCode == 37 && direction != "right") direction = "left";
    if(event.keyCode == 38 && direction != "down") direction = "up";
    if(event.keyCode == 39 && direction != "left") direction = "right";
    if(event.keyCode == 40 && direction != "up") direction = "down";
}

// Função para iniciar o jogo
function iniciarJogo() {

    // Regra para a cobrinha não passar da tela do cenário infinitamente
    // Faz com que a cobrinha não suma e volte para o ponto inicial
    if(snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if(snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
    if(snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
    if(snake[0].y < 0 && direction == "up") snake[0].y = 16 * box;

    // Carregar as funções
    criarBG();
    criarCobrinha();
    drawFood();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direction == "right") snakeX += box; // Se a cobrinha for para a direita, adiciona um quadrado
    if(direction == "left") snakeX -= box; // Se for para a esquerda, diminui um quadrado
    if(direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;

    // Retira o último elemento (quadrado) da cobrinha
    snake.pop();

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    // Acrescenta um elemento sempre a frente da cobrinha
    snake.unshift(newHead);

}

let jogo = setInterval(iniciarJogo, 100); // Intervalo para o jogo ficar reiniciando caso ele trave