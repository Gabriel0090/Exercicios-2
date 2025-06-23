const prompt = require('prompt-sync')()

function gerarNumero() {
    const numero = Math.floor(Math.random() * 100) + 1;

    let tentativas= 0;
    let palpite;
    
    console.log("Bem-vindo ao Jogo de Adivinhação!");
    console.log ("Estou pensando em um número entre 1 e 100.");
    
    while (palpite !== numero) {
        palpite = Number(prompt('Digite seu palpite: '));
        tentativas++;
        palpite = Number(palpite);
        if (palpite < numero) {
            console.log('Muito baixo! Tente novamente.');
        } else if (palpite > numero) {
            console.log('Muito alto! Tente novamente.');
        } else {
            console.log(`Parabéns! Você acertou o número ${numero} em ${tentativas} tentativas.`);
            numeroCerto = true;
        }
    }
}
console.log("Vamos jogar!");
gerarNumero();
