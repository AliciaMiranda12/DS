function somar(a,b){
    
    return Number(a+b);
}
function subtrair(a,b){
    return Number(a-b);
}
function desconto(a,b){
    return a*(b/100);
}

function validar(usuarioP,senhaP,usuarioI,senhaI){
if(usuarioI==usuarioP && 
     senhaI==senhaP){
    return true;
}
else{
    return false;
}
}

function media(n1,n2,n3){
    return Number(n1+n2+n3)/3
}

function situacao(media){
    if(media<4){
        return("Reprovado")
    }
    else if(media>=4 && media<=6){
        return("Recuperação")
    }
    else if(media>6){
        return("Aprovado")
    }
    else{
        return("Digite um valor válido")
    }
    
}