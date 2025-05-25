let compras = [ //vetor vazio
    {produto:''}
];

function adicionar(){
    let input_produto = document.querySelector("#produto").value; //puxando valor do input

    if(input_produto){   //ver se realmente foi colocado um produto
        compras.push({ produto: input_produto }); 
        console.log("O produto foi adicionado!");
    } else {
        alert("Erro! Digite o nome do produto.");
        return;
    }
    atualizar();
}

function atualizar(){
    var output = document.querySelector("#resultado"); //puxando o idnda div para exibição
    output.innerHTML = "";  //limpar
    let conteudo = ""; //lvazio

    compras.forEach((valor, index) => { //exibir
        conteudo += `${valor.produto} <button onclick="excluir(${index})" id="excluir">Excluir</button> 
        <button onclick="editar(${index})">Editar</button> <br> <hr>`;
    });

    output.innerHTML = conteudo;//irá exibir os conteúdos
}

function excluir(index){
    compras.splice(index, 1); 
    atualizar(); //exibição
}

function editar(index) {
    let novoProduto = prompt("Altere o produto:"); // irá pegar o novo valor
    compras[index].produto = novoProduto; // vai atualizar o produto,substituir
    atualizar(); // exibindo
}

