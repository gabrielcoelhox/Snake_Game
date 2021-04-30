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

// Função para iniciar o jogo
function iniciarJogo() {

    // Carregar as funções
    criarBG();
    criarCobrinha();

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