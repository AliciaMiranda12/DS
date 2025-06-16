
function getCep2(){
    let input_cep = document.querySelector("#cep-input").value.trim();
    let output = document.querySelector("#mensagem");

    let rua = document.querySelector("#rua");
    let bairro = document.querySelector("#bairro");
    let cidade = document.querySelector("#cidade");
    let estado = document.querySelector("#estado");

    if(input_cep.length != 8){
        output.innerHTML = "<h1>CEP inválido</h1>";
        return;
    }
    let url = `https://brasilapi.com.br/api/cep/v2/${input_cep}`;
    fetch(url)
    .then(resp=>{
        if(!resp.ok) throw new Error ("Cep não identificado!");
        return resp.json();
    })
    .then(dados=>{
        rua.value = dados.street;
        bairro.value = dados.neighborhood;
        cidade.value = dados.city;
        estado.value = dados.state;

    })
    .catch(erro=>{
        output.innerHTML = `<h3>${erro.message}</h3>`;  
    });
};

let enderecosSalvos = [];
function cadastrar(){
    let rua = document.querySelector("#rua");
    let bairro = document.querySelector("#bairro");
    let cidade = document.querySelector("#cidade");
    let estado = document.querySelector("#estado");
    let cep = document.querySelector("#cep-input")
    //resultado da execução
    let mensagem = document.querySelector("#mensagem");

    if(!cep||!rua||!cidade){
        mensagem.innerHTML = "<h1>Preencha os dados!</h1>";
        return;
    }
    
    let endereco = {cep,rua,bairro,cidade,estado};
    enderecosSalvos.push(endereco);

    mensagem.innerHTML = "<h1>Endereço Salvo com sucesso!</h1>";
    console.clear();
    console.log("Endereços Salvos",enderecosSalvos);
};