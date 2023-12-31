(function(){
    const botaoEntrar = document.querySelector("#botaoEntrar")
    botaoEntrar.addEventListener("click", async (event) => { 
        event.preventDefault()
        const [cpf, senha] = obterInputsDeEntrada()
        const bibliotecario = await obterBibliotecario(cpf, senha)
        const usuario = await obterUsuario(cpf, senha)
        
        if(bibliotecario != null){
            window.location.href = "../Bibliotecario/bibliotecario.html"
        }

        else if(usuario != null){
            window.location.href = "../Usuario/usuario.html"
        }

        else{
            window.alert("ERRO: Informações de login não correspondem a nenhum usuário cadastrado")
        }
        
    })
})()

function obterInputsDeEntrada(){
    const cpf = document.querySelector("#inputCPF").value
    const senha = document.querySelector("#inputSenha").value
    return [cpf, senha]
}

async function obterBibliotecario(cpf, senha) {
    const url = "http://localhost:8080/bibliotecario"
    const data = {
        cpf,
        senha
    }
  
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
  
        const bibliotecario = await response.json()
        return bibliotecario
    } 

    catch(error) {
        console.log(`Erro ao buscar bibliotecário: ${error}`)
        return null
    }
}
  
async function obterUsuario(cpf, senha) {
    const url = "http://localhost:8080/usuario/login"
    const data = {
        cpf,
        senha
    }
  
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
  
        const usuario = await response.json()
        return usuario
    }

    catch (error) {
        console.log(`Erro ao buscar usuário: ${error}`)
        return null
    }

  }
  


