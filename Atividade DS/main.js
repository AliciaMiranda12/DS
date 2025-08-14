const v = new Veiculo();
v.marca = "Toyota";
v.ano = "2020";
v.modelo = "Corolla";

const c = new Carro();
c.portas = "4";

document.writeln(v.informacoes());
document.writeln(c.informacoesCarro());
document.writeln(v.ligar());
document.writeln(c.abrirPortas());