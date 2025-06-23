// //Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores
// formarem uma data real (meses de 28–31 dias, ano bissexto para
// fevereiro) e false caso contrário.

const prompt = require('prompt-sync')()
let dia;
let mes;
let ano;
function ehDataValida() {
    mes = Number(prompt('Digite o mês: '));
    dia = Number(prompt('Digite o dia: '));
    ano = Number(prompt('Digite o ano: '));

    if (mes < 1 || mes > 12) {
        return false;
    }

    if (dia < 1) {
        return false;
    }

    if (ano < 0) {
        return false;
    }
    let diasNoMes;
    if (mes === 2) {
        if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
            diasNoMes = 29;
        } else {
            diasNoMes = 28;
        }
    } else if (mes === 4 || mes === 6 || mes === 9 || mes === 11) {
        diasNoMes = 30;
    } else {
        diasNoMes = 31;
    }

    if (dia > diasNoMes) {
        return false;
    }
    return true;
}

const dataEhValida = ehDataValida();

let diaFormatado;
if (dia < 10) {
    diaFormatado = '0' + dia;
} else {
    diaFormatado = String(dia); 
}

let mesFormatado;
if (mes < 10) {
    mesFormatado = '0' + mes;
} else {
    mesFormatado = String(mes); 
}

if (dataEhValida) {
    console.log(`Sua data ${diaFormatado}/${mesFormatado}/${ano} é válida.`);
} else {
    console.log(`Sua data ${diaFormatado}/${mesFormatado}/${ano} não é válida.`);
}