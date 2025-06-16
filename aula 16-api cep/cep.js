
function getCep(){
    let input_cep = document.querySelector("#cep-input").value.trim();

    let output = document.querySelector("#resultado");
    
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
        output.innerHTML = `<h2>Endereço</h2>
        <ul>
            <li>Rua:${dados.street}</li>
            <li>Bairro:${dados.neighborhood}</li>
            <li>Cidade:${dados.city}</li>
            <li>Estado:${dados.state}</li>
        </ul>`;
    })
    .catch(erro=>{
        output.innerHTML = `<h3>${erro.message}</h3>`;  
    });
};