let produtos = [
    { nome: 'Arroz', preco: 25.9 },
    { nome: 'Feijao', preco: 8.5 },
    { nome: 'Macarrao', preco: 6.75 }
];

produtos.sort((a, b) => a.preco - b.preco);

for (const produto of produtos) {
    console.log(`${produto.nome} - R$ ${produto.preco.toFixed(2)}`);
}
