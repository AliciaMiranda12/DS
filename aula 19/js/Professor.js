class Professor extends Pessoa{
    set area(valor){
        this.area = area;
    }
    get area(){
        return this.area;
    }
    set titulacao(valor){
        this.titulacao = titulacao;
    }
    get titulacao(){
        return this.titulacao;
    }
    exibirTtulacao(){
        if(this._titulacao=="Especialista"){
            return `Especialista em ${this._area}`;
        }
       else if(this._titulacao=="Mestre"){
            return `Mestre em ${this._area}`;
        }
        else if(this._titulacao=="Doutor"){
            return `Doutor(a) em ${this._area}`;
        }
        else{
            return `Outro tipo de titulacao em ${this._area}`;
        }
    }
}