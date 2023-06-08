(function(){
    const botaoEntrar = document.querySelector("#botaoEntrar")
    botaoEntrar.addEventListener("click", async (event) => { 
        event.preventDefault()
        const [cpf, senha] = obterInputsDeEntrada()
        const bibliotecario = await obterBibliotecario(cpf, senha)
        const usuario = await obterUsuario(cpf, senha)
        
        if(bibliotecario != null){
            window.location.href = "../bibliotecario.html"
        }

        else if(usuario != null){
            window.location.href = "../usuario.html"
        }

        else{
            //dados incorretos, mostrar na tela que nao existe usuario com estes dados
        }
        
    })
})()

function obterInputsDeEntrada(){
    const cpf = document.querySelector("#inputCPF").value
    const senha = document.querySelector("#inputSenha").value
    return [cpf, senha]
}

async function obterBibliotecario(cpf, senha){
    const url = `http://localhost:8080/bibliotecario?cpf=${cpf}&senha=${senha}`

    try{
        const response = await fetch(url)
        const bibliotecario = await response.json()
        return bibliotecario
    }
    catch(error){
        console.log(`Erro ao buscar bibliotecario: ${error}`)
        return null
    }
}

async function obterUsuario(cpf, senha){
    const url = `http:localhost:8080/usuario?cpf=${cpf}&senha=${senha}`
    try{
        const response = await fetch(url)
        const usuario = await response.json()
        return usuario

    }
    catch(error){
        console.log(`Erro ao buscar bibliotecario: ${error}`)
        return null
    }
}


