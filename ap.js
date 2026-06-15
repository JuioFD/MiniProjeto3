const catalogo = document.getElementById("catalogo");
const btnExportar = document.getElementById("btnExportar");
const outJson = document.getElementById("outJson");

const produtos = [

    {
        nome: "Jogo Hades II - PS5",
        preco: 69.00,
        estilo: "RogueLike",
    },
    {
        nome: "Halo: CE Remaster (pré-venda) - PS5",
        preco: 199.00,
        estilo: "FPS",
    },
    {
        nome: "Jogo PRAGMATA - PS5",
        preco: 299.00,
        estilo: "Ação e Aventura",
    },
    {
        nome: "Jogo Life is Strange Reunion - PS5",
        preco: 299.00,
        estilo: "Narrativo",
    },
    {
        nome: "Wolverine (pré-venda) - PS5",
        preco: 399.00,
        estilo: "Ação e Aventura ",
    },
    {
        nome: "Grand Theft Auto VI (pré-venda) - PS5",
        preco: 459.00,
        estilo: "Ação e Aventura",
    }

]

function criarCard(produto) {
    return `
    <div class = "card">
        <h2>${produto.nome}</h2>
        <p> R$: ${produto.preco.toFixed(2)}</p>
        <p> Estilo de jogo: ${produto.estilo}</p>
    </div>
    `
}

function mostrarproduto() {
    catalogo.innerHTML = ""

    for (let renderizar = 0; renderizar < produtos.length; renderizar++) {
        catalogo.innerHTML += criarCard(produtos[renderizar])
    }
}

btnExportar.addEventListener("click", function () {
    const jsonProdutos = JSON.stringify(produtos, null, 2)

    console.log(jsonProdutos)
    outJson.innerHTML = jsonProdutos

})

mostrarproduto()
