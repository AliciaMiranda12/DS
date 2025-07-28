const c = new Cliente("Gabriela", "gabi@gmail.com","2009-09-04"); //"cópia" da classe na constante
console.log(c);

const c2 = new Cliente("Alicia", "alicia@gmail.com","2008-07-12");
console.log(c2.exibir());
console.log(c2.calcular(10,20));

function cadastrar(){
    let nome = document.querySelector("nome").value;
    let email = document.querySelector("email").value;
    let dataNascimento = document.querySelector("dataNascimento").value;

const c3 = new Cliente(nome,email,dataNascimento);
document.querySelector("mensagem").innerHTML = c3.exibir();
}

//ALUNO
function mediaCalcular(){
let nome = document.querySelector("#nome").value;
let curso = document.querySelector("#curso").value;
let nota1 = Number(document.querySelector("#nota1").value);
let nota2 = Number(document.querySelector("#nota2").value);
let nota3 = Number(document.querySelector("#nota3").value);

const aluno = new Aluno(nome,curso,nota1,nota2,nota3);
console.log(aluno.exibir());
console.log(aluno.mediaCalcular(nota1,nota2,nota3));

}