let planeta = [
    {pais:''}
];

function getCountry() {
    let input_search = document.querySelector("#input-search").value.trim();
    let url = `https://restcountries.com/v3.1/name/${input_search}`;
    let output = document.querySelector("#country-info");

    output.innerHTML = "<h3>Carregando...</h3>";

    fetch(url)
        .then(resp => {
            if (!resp.ok) throw new Error("País não encontrado!");
            return resp.json();
        })
        .then(dados => {
            // Vamos assumir o primeiro resultado
            const pais = dados[0];

            // Atualiza a tela com as informações
            output.innerHTML = `
                <div>
                    <h2>${pais.name.official}</h2>
                    <h2>${pais.capital}</h2>
                    <img src="${pais.flags.png}" alt="${pais.flags.alt}">
                    <p>População: ${pais.population} </p>
                </div>
                <button onclick="excluir" id="excluir">Excluir</button> 
                <button onclick="editar">Editar</button> <br> <hr>`;
        })
        .catch(erro => {
            output.innerHTML = `<h1>${erro.message}</h1>`;
        });
        atualizar();
        
}

function atualizar(){
    var output = document.querySelector("#country-info"); //puxando o idnda div para exibição
    output.innerHTML = "";  //limpar
    let conteudo = ""; //lvazio

    planeta.forEach((valor, index) => { //exibir
        conteudo += `${valor.produto} <button onclick="excluir(${index})" id="excluir">Excluir</button> 
        <button onclick="editar(${index})">Editar</button> <br> <hr>`;
    });

    output.innerHTML = conteudo;//irá exibir os conteúdos
}

function excluir(index){
    planeta.splice(index, 1); 
    atualizar(); //exibição
}

function editar(index) {
    let novoPais = prompt("Altere o pais:"); // irá pegar o novo valor
    planeta[index].pais = novoPais; // vai atualizar o produto,substituir
    atualizar(); // exibindo
}


