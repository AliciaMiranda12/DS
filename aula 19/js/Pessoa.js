class Pessoa{
    //set = inserir um valor em um atributo
    //get = receber/retornar/pegar um valor de um atributo
    //encapsulamento
    set nome(valor){
        this._nome = valor;
    }
    get nome(){
        return this._nome;
    }
    set cpf(valor){
        this._cpf = valor;
    }
    get cpf(){
        return this._cpf;
    }
    set telefone(valor){
        this._telefone = valor;
    }
    get telefone(){
        return this._telefone;
    }
    exibirNome(){
        return `Nome: ${this._nome}`;
    }
}