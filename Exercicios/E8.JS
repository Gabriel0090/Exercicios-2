const vendas = [
    { cliente: "Ana", total: 100 },
    { cliente: "João", total: 50 },
    { cliente: "Ana", total: 150 },
    { cliente: "Maria", total: 200 },
];
function somaTotalPorCliente(vendas) {
    return vendas.reduce((acumulador, venda) => {
        acumulador[venda.cliente] = (acumulador[venda.cliente] || 0) + venda.total;
        return acumulador;
    }, {});
}
console.log(somaTotalPorCliente(vendas));
