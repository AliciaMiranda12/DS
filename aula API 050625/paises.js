//get - pegar dados
//set - inserir dados
function getCountry(){
    let input_search = document.querySelector("#input-search").value.trim();
    //função trim() remove espaços em branco antes e depois da string
    let url = `https://restcountries.com/v3.1/name/${input_search}`;//concatenei
    let output = document.querySelector("#country-info"); //saída na div

    output.innerHTML = "<h3>Carregando...</h3>";

    fetch(url) 
    .then(resp=>{
        if(!resp.ok) throw new Error("País não encontrado!");
        return resp.json();
    })
    .then(dados=>{
        let exibir = dados.map(pais=>{
            return `<div>
            <h2>${pais.name.official}</h2>
            <h2>${pais.capital}</h2>
            <img src="${pais.flags.png}" alt="<h2>${pais.flags.alt}">
            </img>
            <p>População:${pais.population}</p>
            </div>`;
        }).join("");
        output.innerHTML = exibir;

    })
    .catch(erro =>{
        output.innerHTML=`<h1>${erro.message}</h1>`;
    })
};

function filtroRegiao(){
    let select = document.querySelector("#region-select");
    let region = select.value;
    let output = document.querySelector("#country-info");

    //Limpando a busca anterior (caso tenha sido feita)
    output.innerHTML = "";

    output.innerHTML = "<h2>Carregando...</h2>";

    //se nenhuma região for selecionada, não retorna nada
    if(!region)return;

    let url = `https://restcountries.com/v3.1/region/${region}`;

    //fazendo requisição

    fetch(url)
    .then(resp=>{
        if(!resp.ok) throw new Error("País não encontrado!");
        return resp.json();
    })
    .then(dados=>{
        let exibir = dados.map(pais=>{
            return `<div>
            <h2>${pais.name.common}</h2>
            <img src="${pais.flags.png}" alt="<h2>${pais.flags.alt}">
            </img>
            <p>Região:${pais.region}</p>
            </div>`
        }).join("");
        output.innerHTML = exibir;
    })
    .catch(erro =>{
        output.innerHTML=`<h1>${erro.message}</h1>`;
    })
}