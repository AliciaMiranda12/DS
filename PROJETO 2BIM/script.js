
    let planeta = [];

    function getCountry() {
        let input_search = document.querySelector("#input-search").value.trim();
        let url = `https://restcountries.com/v3.1/name/${input_search}`;

        fetch(url)
            .then(resp => {
                if (!resp.ok) throw new Error("País não encontrado!");
                return resp.json();
            })
            .then(dados => {
                const pais = dados[0];

                planeta.push({
                    nome: pais.name.official,
                    capital: pais.capital?.[0] || "Sem capital",
                    populacao: pais.population
                });

                atualizarSomenteNomes();
            })
            .catch(erro => {
                document.querySelector("#country-info").innerHTML = `<h1>${erro.message}</h1>`;
            });
    }

    function atualizarSomenteNomes() {
        const output = document.querySelector("#country-info");
        output.innerHTML = "";

        planeta.forEach((item, index) => {
            output.innerHTML += `
                <div>
                    <h3>${item.nome}</h3>
                    <button onclick="excluir(${index})">Excluir</button>
                    <button onclick="editar(${index})">Editar</button>
                    <hr>
                </div>
            `;
        });
    }

    function excluir(index) {
        planeta.splice(index, 1);
        atualizarSomenteNomes();
    }

    function editar(index) {
        const nomeAtual = planeta[index].nome;
        const novoNome = prompt("Digite o novo nome do país:", nomeAtual);

        if (novoNome !== null && novoNome.trim() !== "") {
            planeta[index].nome = novoNome.trim();
            atualizarSomenteNomes();
        }
    }
  