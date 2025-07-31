
class Produto{
//this-arrow function,uma forma de apontar para algum atributo dentro da própria classe
//posso colocar requisitos (método constructor-função)
//caracteristicas da classe
constructor(nome,marca,cor){
    this.nome = nome;
    this.marca = marca;
    this.cor = cor;
    }   
exibir(){
    return `${this.nome} - ${this.marca} - ${this.cor}`;
}
}