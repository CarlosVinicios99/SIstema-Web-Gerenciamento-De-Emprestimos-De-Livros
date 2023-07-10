(function(){
    const botaoCadastrar = document.querySelector("#botaoCadastrar")
    botaoCadastrar.addEventListener("click", (event) => {
        event.preventDefault()
        cadastrarUsuario()
    })

})()

async function cadastrarUsuario(){
    const [nome, matricula, email, cpf, senha, senhaConfirmada] = obterInputsDeEntrada()
    const dadosValidos = validarDadosDoUsuario(nome, matricula, email, cpf, senha, senhaConfirmada)
    if(!dadosValidos){
        window.alert(" Dados Inválidos! \nPreencha os campos corretamente.")
    }
    else{
        const novoUsuario = {nome, matricula, email, cpf, senha}
        const url = "http://localhost:8080/usuario"

        try{
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(novoUsuario)
            })
            if(response.ok) {
                window.alert("Usuário cadastrado com sucesso!")
                window.location.href = document.referrer
                
            }
        }
        catch(error){
            console.log(`Erro ao cadastrar usuario: ${error}`)
        }
    }
}

function obterInputsDeEntrada(){
    const nome = document.querySelector("#inputNome").value
    const matricula = document.querySelector("#inputMatricula").value
    const email = document.querySelector("#inputEmail").value
    const cpf = document.querySelector("#inputCPF").value
    const senha = document.querySelector("#inputSenha").value
    const senhaConfirmada = document.querySelector("#inputConfirmacaoDeSenha").value

    return [nome, matricula, email, cpf, senha, senhaConfirmada]
}

function validarDadosDoUsuario(nome, matricula, email, cpf, senha, senhaConfirmada){
    if(senhaConfirmada !== senha){
        return false
    }
    
    if(nome === "" || matricula === "" || email === "" || cpf === "" || senha === "" || senhaConfirmada === ""){
        return false
    }

    return true
}
