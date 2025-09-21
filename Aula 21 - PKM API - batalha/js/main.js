let treinadores = JSON.parse(localStorage.getItem("treinadores")) || [];

document.querySelector("#formTreinador").addEventListener("submit", function(event) {
  event.preventDefault();

  const nome = document.querySelector("#nome").value;
  const idade = document.querySelector("#idade").value;
  const cidade = document.querySelector("#cidade").value;
  const pokemons = document.querySelector("#pokemons").value.split(",").map(p => p.trim());

  const novoTreinador = new Treinador(nome, idade, cidade, pokemons);
  treinadores.push(novoTreinador);
  salvarTreinadores();
  atualizarLista();
  this.reset();
});

function salvarTreinadores() {
  localStorage.setItem("treinadores", JSON.stringify(treinadores));
}

function atualizarLista() {
  const lista = document.querySelector("#listaTreinadores");
  lista.innerHTML = "";

  treinadores.forEach((treinador, index) => {
    const item = document.createElement("li");
    item.innerHTML = `
      <strong>${treinador.nome}</strong> (${treinador.idade} anos) - ${treinador.cidade}<br>
      <em>Pokémons:</em> ${treinador.pokemons.join(", ")}<br>
      <button onclick="editarTreinador(${index})">Editar</button>
      <button onclick="excluirTreinador(${index})">Excluir</button>
         <button onclick="pagina()">Continuar</button>
      <hr>
      <hr>
    `;
    lista.appendChild(item);
  });
}

function excluirTreinador(index) {
  treinadores.splice(index, 1);
  salvarTreinadores();
  atualizarLista();
}

function editarTreinador(index) {
  const treinador = treinadores[index];

  const novoNome = prompt("Novo nome:", treinador.nome);
  const novaIdade = prompt("Nova idade:", treinador.idade);
  const novaCidade = prompt("Nova cidade:", treinador.cidade);
  const novosPokemons = prompt("Novos Pokémons (separados por vírgula):", treinador.pokemons.join(", "));

  if (novoNome && novaIdade && novaCidade) {
    treinador.atualizarDados(
      novoNome,
      novaIdade,
      novaCidade,
      novosPokemons.split(",").map(p => p.trim())
    );
    salvarTreinadores();
    atualizarLista();
  } else {
    alert("Todos os campos devem ser preenchidos.");
  }
}
function pagina(){
    window.location.href = "index.html";
}
// Inicializa a lista ao carregar a página
atualizarLista();
