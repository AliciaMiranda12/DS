//EX01
function exibir(nome,idade){
    return "O seu nome é:" +nome+ "e sua idade é:" +idade;
}

//EX02
function contar(inicial,final){
    for(var i=inicial;i<=final;i++){
        document.writeln(i+"<br>");
    }
}

//Conta quantas letras específicas possui a String
function contarLetras(palavra,letra){
    var contador=0;
    palavra = palavra.toLowerCase();
    //converter tudo para minúsculo
    for(var i=0;i<palavra.length;i++){

     if(palavra.charAt(i)==letra){
     //cachorro
     contador++;
    }
}
return contador;
}