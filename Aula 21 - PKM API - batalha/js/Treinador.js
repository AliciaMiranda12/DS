class Treinador {
  constructor(nome, idade, cidade, pokemons = []) {
    this.nome = nome;
    this.idade = idade;
    this.cidade = cidade;
    this.pokemons = pokemons;
  }

  atualizarDados(novoNome, novaIdade, novaCidade, novosPokemons) {
    this.nome = novoNome;
    this.idade = novaIdade;
    this.cidade = novaCidade;
    this.pokemons = novosPokemons;
  }
}
