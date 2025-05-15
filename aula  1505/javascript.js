let usuario = [
    {nome: ""},
    {email: ""},
    {senha: ""}
]

let input_name = document.querySelector("#name").value;
let input_email = document.querySelector("#email").value;
let input_senha = document.querySelector("#password").value;

if(input_name && input_email && input_senha){
    usuario.push({
        name:input_name,
        email:input_email,
        senha:input_senha
    })
    alert(" Cadastrados com sucesso!")
}
else{
    alert("Não foi cadastrado com sucesso!")
}
