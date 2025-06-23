const produtos = [
  { nome: "Camiseta", preco: 30 },
  { nome: "Calça", preco: 50 },
  { nome: "Boné", preco: 20 }
];
function nomesOrdenadosPorPreco(produtos) {
  return produtos
    .slice()
    .sort((a, b) => a.preco - b.preco)
    .map(produto => produto.nome);
}
console.log(nomesOrdenadosPorPreco(produtos));