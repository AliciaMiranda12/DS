    
    let usuario = [
        { nome: "", email: "", senha: "" }
    ];

    function cadastrar(){
        
        let input_name = document.querySelector("#nome").value;
        let input_email = document.querySelector("#email").value;
        let input_senha = document.querySelector("#senha").value;
        
        if(input_name && input_email && input_senha){
        usuario.push({
            nome:input_name,
            email:input_email,
            senha:input_senha
        });
        alert("Cadastrado com sucesso!");
        } else{
            alert("Erro!Tente novamente");
        }

        var output = document.querySelector("#usuario");
        output.innerHTML = ""; 
        
        usuario.forEach(dado => { 
         output.innerHTML = (`Nome:${dado.nome} <br> Email:${dado.email} <br>`);
     });
    }

    function limpar(){
        document.getElementById("nome").value='';
        document.getElementById("email").value='';
        document.getElementById("senha").value='';
        var output = document.querySelector("#usuario");
        output.innerHTML = ""; 
    }

