const pares = [['nome', 'Ana'], ['idade', 25]];
const obj = paresParaObjeto(pares);
console.log(obj);
function paresParaObjeto(pares) {
    return Object.fromEntries(pares);
}

function objetoParaPares(obj) {
    return Object.entries(obj);
}
const novoPares = objetoParaPares(obj);
console.log(novoPares);
