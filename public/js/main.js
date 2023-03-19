// Carrega a lista de produtos do JSON
fetch("/produtos.json")
    .then(response => response.json())
    .then((data) => {

        // Armazena a lista de produtos em uma variável global
        //window.produtos = data.produtos;
        console.log(data.nome[0]);
    });

// Função para carregar um produto em uma página HTML diferente
function carregarProduto(index) {
    // Obtém o produto a partir do índice na lista de produtos
    const produto = window.produtos[index];

    // Cria um elemento de imagem com o caminho da imagem do produto
    const imagem = document.createElement("img");
    imagem.src = produto.imagem;

    // Cria um elemento de título com o nome do produto
    const titulo = document.createElement("h2");
    titulo.textContent = produto.nome;

    // Cria um elemento de descrição com a descrição do produto
    const descricao = document.createElement("p");
    descricao.textContent = produto.descricao;

    // Limpa o conteúdo do elemento de produto existente
    const produtoElemento = document.getElementById("produto");
    produtoElemento.innerHTML = "";

    // Adiciona os elementos de imagem, título e descrição ao elemento de produto
    produtoElemento.appendChild(imagem);
    produtoElemento.appendChild(titulo);
    produtoElemento.appendChild(descricao);
}
