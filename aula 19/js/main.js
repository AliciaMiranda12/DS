//criar objeto/instacia,copiando classe
const p = new Pessoa();

p.nome = "Chico";
p.cpf = "123.456.754.324";
p.telefone = "(15) 99876-3509";

//p.nome = usar a função get nome
// alert(p.nome);
//p.exibirNome = usar a função personalizada criada lá dentro
// alert(p.exibirNome());


const a = new Aluno();
a.nome = "Chico";
a.cpf = "123.456.754.324";
a.telefone = "(15) 99876-3509";
a.turma = "Div 2";
a.curso = "D.S";
a.nota1 = "8";
a.nota2 = "10";

alert(a.exibirNome());
alert(a.calcularMedia());
