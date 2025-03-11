var frutas = ["morango", "maça", "uva"];

for(var i=0;i<frutas.length;i++){
    document.write(frutas[i]+"<br>");
}

document.write("________<br>");
//adicionando elemento no início do vetor
frutas.unshift("pitaya");
for(var i=0; i<frutas.length; i++){
    document.write(frutas[i]+"<br>");
}
document.write("________<br>");
//removendo o último elemento do vetor
frutas.pop();
for(var i=0;i<frutas.length;i++){
    document.write(frutas[i]+"<br>");;
}