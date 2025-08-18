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
       document.getElementById("resultado").innerHTML = `<p>${p.nome}</p>
       <p>${p.peso}</p>
       <p>${p.tipo}</p>
       <img  src="${p.sprite}">`;
})
    .catch(erro=>{
        alert(erro.message);
    });

}