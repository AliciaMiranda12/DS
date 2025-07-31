//mexe com a parte do html
// const p = new Produto(); - criando um objeto, referencia


function cadastrar(){
    let nome = document.querySelector("#nome").value;
    let marca = document.querySelector("#marca").value;
    let cor = document.querySelector("#cor").value;

    const p = new Produto(nome,marca,cor);
    alert(p.exibir());
}