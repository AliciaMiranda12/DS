//class define a estrutura do nosso projeto
//dentro da classe iremos definir as caracteristicas/atributos
class Cliente{
    // método/função construtor
    //tem a função de coloca "requisitos" dentro da chamada classe
    constructor(nome,email,dataNascimento){
     this.nome = nome;   //forma de uso que vai alocar essas variáveis
     this.email = email;
     this.dataNascimento = dataNascimento;
    }
    exibir(){
        return `${this.nome} ${this.email} 
        ${this.dataNascimento}`; //irá exibir na página 

    }
    calcular(qtd,valor){
        return qtd*valor;
    }
}