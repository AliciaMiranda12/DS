/*
variáveis locais - restrito a uma função

variáveis globais - acesso de todo o escopo do código
*/

let jogos =[
    {nome:"Bloodborn", anoLacamento:"2014"},
    {nome:"GTA VI", anoLacamento:"2026"}
];

exibirJogos(); // Mesmo que esteja sendo chamado antes da criação, ele ainda funciona por causa da leitura do código

function exibirJogos(){
    let output = document.querySelector("#listar");
    output.innerHTML = "";     // Limpar o campo

    jogos.forEach(jogo =>{
        output.innerHTML += (`<b>Nome:</b> ${jogo.nome} - <b>Ano de Lançamento:</b> ${jogo.anoLacamento} <br>`);
    });
}

function adicionarJogo(){
    let input_nome = document.querySelector("#Input-nome").value;
    let input_lancamento = document.querySelector("#Input-lancamento").value;

    if(input_nome && input_lancamento){  // Verificando se tem valor nas varáveis
        jogos.push({
            nome:input_nome,
            anoLacamento:input_lancamento
        });
        alert("Jogo cadastrado com sucesso!");
    } else{
        alert("Dados inválidos");
    }
    exibirJogos();
    limparCampos();
}

function limparCampos(){
    let input_nome = document.querySelector("#Input-nome");
    input_nome.value = "";

    let input_lancamento = document.querySelector("#Input-lancamento");
    input_lancamento.value = "";

    let search = document.querySelector("#nomeBusca");
    search.value = ""; // Ele ta limpando o campo
}

function buscarJogo(){
    //Alocando os dados de busca em uma variável
    let search = document.querySelector("#nomeBusca").value.toLowerCase();

    let result = jogos.filter(jogo => jogo.nome.toLowerCase().includes(search));
    // filter = função para localizar informações no vetor
    //includes é o termo a ser buscado

    let output = document.querySelector("#resultadobusca");
    output.innerHTML = "";

    if(result.length > 0){
        result.forEach(result =>{
            output.innerHTML += (`<b>Nome:</b> ${result.nome} - <b>Ano de Lançamento:</b> ${result.anoLacamento} <br>`);
        });
    }else{
        output.innerHTML = "<h3> Nenhum jogo foi encrontrado!</h3>"
    }

    limparCampos();
}
