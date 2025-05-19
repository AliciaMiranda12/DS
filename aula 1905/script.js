let  livros = [
    {cod:1,nome:"Harry Potter", autor:"J.K Rowling" },
    {cod:2,nome:"Senhor dos Aneís", autor:"Tolkien" },

];

mostrarLivros();

function mostrarLivros(){
    let output = document.querySelector("#listagem");
    //limpando a div onde irá exibir
    output.innerHTML = "";

    livros.forEach(livro => {
        // adicionando os livros dentro da DIV
        output.innerHTML += `Código: ${livro.cod} - Nome: ${livro.nome}
        -  Autor: ${livro.autor} <br>`;
    });
}
function adicionarLivro(){
    let input_cod = document.querySelector("#codigo").value;
    let input_nome = document.querySelector("#nome").value;
    let input_autor = document.querySelector("#autor").value;

    if( input_cod && input_nome && input_autor){
       
        livros.push(
        {
            cod: input_cod,
            nome:input_nome,
            autor: input_autor
        });
    console.log("Cadastrado com sucesso!");;
    mostrarLivros();
    }
    else{
        console.log("Erro!Tente novamente");
    }
}
function excluirLivro(){
    let input_codExcluir = document.querySelector("#codExcluir").value;
    //procura o número do indice do vetor que contenha o valor
    let indice = livros.findIndex(
        livro=> livro.cod == input_codExcluir);

//findIndex retorna o primeiro índice com o valor localizado 
//se não encontrar o valor, ele retorna o valor de -1

//onde será  exibido a resposta
let output = document.querySelector("#resultadoExcluir");
//verificando se encontrou o item que irá excluir
if(indice != -1){
    livros.splice(indice,1);
    output.innerHTML= `<h3 style="color:green"> Livro ${input_codExcluir} 
    Excluido com sucesso! </h3>`;
    mostrarLivros()
    }
    else{
        output.innerHTML= `<h3 style="color:green"> Livro ${input_codExcluir} 
        não encontrado! </h3>`;
    }
};
