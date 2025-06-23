// Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair
// todas as palavras únicas e exibi-las em um array.

const prompt = require('prompt-sync')()

function ArrayString() {
    const string = prompt('Digite uma frase: ');
    const substringsstring = string.split(' ');
    let palavrasUnicas = [];

    for (let i = 0; i < substringsstring.length; i++) {
        const palavra = substringsstring[i];
        if (!palavrasUnicas.includes(palavra)) {
            palavrasUnicas.push(palavra)
            
        }

    }
    return palavrasUnicas ;
}
const resultado = ArrayString();             ////////////////////////////////////////////////////////////////////
console.log('Palavras únicas:', resultado); // FRASE DE EXEMPLO: "A vida é bela, a vida é uma festa, viva a vida"/
                                             ////////////////////////////////////////////////////////////////////




// O método split() divide uma string em um array de substrings, 
// usando o argumento fornecido como um "delimitador" (neste caso, um espaço em branco ' '