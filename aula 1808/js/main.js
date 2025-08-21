function buscarPokemon(){
    let pkm_name = document.querySelector("#pkm_name").value;
    
    fetch(`https://pokeapi.co/api/v2/pokemon/${pkm_name}`)
    .then(resposta=>{
        if(!resposta.ok){
        throw new Error("Pokemon não encontrado");
    }
    return resposta.json();
})
    .then(dados=>{
        const p = new Pokemon();
        p.nome = dados.name;
        p.tipo = dados.types.map(t=> t.type.name);
        p.peso = dados.weight;
        p.sprite = dados.sprites.front_default;

       // console.log(p.exibirDados());
       document.getElementById("resultado").innerHTML = `<ul>
       <li>${p.nome}</li>
       <li>${p.peso}</li>
       <li>${p.tipo}</li>
       <img src="${p.sprite}" width="200px">
       </ul>`;
})
    .catch(erro=>{
        alert(erro.message);
    });

}
function buscarPokemon2(){
    let pkm_name2 = document.querySelector("#pkm_name2").value;
    
    fetch(`https://pokeapi.co/api/v2/pokemon/${pkm_name2}`)
    .then(resposta=>{
        if(!resposta.ok){
        throw new Error("Pokemon não encontrado");
    }
    return resposta.json();
})
    .then(dados=>{
        const p = new Pokemon();
        p.nome = dados.name;
        p.tipo = dados.types.map(t=> t.type.name);
        p.peso = dados.weight;
        p.sprite = dados.sprites.front_default;

       // console.log(p.exibirDados());
       document.getElementById("resultado2").innerHTML = `
       <ul>
       <li>${p.nome}</li>
       <li>${p.peso}</li>
       <li>${p.tipo}</li>
       <img src="${p.sprite}" width="200px">
       </ul>`;
})
    .catch(erro=>{
        alert(erro.message);
    });

}