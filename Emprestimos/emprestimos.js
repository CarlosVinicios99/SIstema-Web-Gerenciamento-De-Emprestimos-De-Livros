(function(){
    const botaoAvancar = document.querySelector("#botaoAvancar")

    botaoAvancar.addEventListener("click", (event) => {
        event.preventDefault()
        cadastrarEmprestimos()
    })
})()

async function cadastrarEmprestimos(){
    const [cpf, senha, titulo] = obterInputsDeEntrada()
    const dadosValidos = validarDadosDeEmprestimo(cpf, senha, titulo)

    if(!dadosValidos){
        window.alert(" Dados Inválidos! \nPreencha os campos corretamente.")
    }

    else{
        let url = `http://localhost:8080/usuario?cpf=${cpf}&senha=${senha}`

        try{
            let response = await fetch(url)
            if(response.ok) {
                const usuario = await response.json();
                console.log(usuario)
            }
            else{
                window.alert("Os dados nao correspondem a nenhum registro!\nTente Novamente!")
                return
            }
        }
        catch(error){
            console.log(`Erro ao buscar usuario: ${error}`)
        }

        url = `http://localhost:8080/livro/consulta?titulo=${titulo}`
        try{
            response = await fetch(url)
            if(response.ok) {
                const livros = await response.json();
                console.log(livros)
            }
            else{
                window.alert("Os dados nao correspondem a nenhum registro!\nTente Novamente!")
                return
            }
        }
        catch(error){
            console.log(`Erro ao buscar livro: ${error}`)
        }

        exibirLivros(livros)
    }
}

function obterInputsDeEntrada(){
    const cpf = document.querySelector("#inputCPF").value
    const senha = document.querySelector("#inputSenha").value
    const livro = document.querySelector("#inputLivro").value

    return [cpf, senha, livro]
}

function validarDadosDeEmprestimo(cpf, senha, livro){
    if(cpf === "" || senha === "" || livro === ""){
        return false
    }
    return true
}

async function exibirLivros(livros){

    const resultadoDaConsultaContainer = document.querySelector("#resultadoDaConsulta")
    const tituloResultados = document.createElement("h2")
    tituloResultados.classList.add("titulo-resultados")
    tituloResultados.innerText = "Resultados"
    resultadoDaConsultaContainer.append(tituloResultados)   

    for(let i = 0; i < livros.length; i++){
        if(i === 0){
            const divLivro = document.createElement("div")
            const titulo = document.createElement("span")
            titulo.innerText = ""
            titulo.classList.add("titulo-livro")
            divLivro.appendChild(titulo)
            divLivro.classList.add("livro-container")
            resultadoDaConsultaContainer.appendChild(divLivro)
        }
        const divLivro = document.createElement("div")
        const titulo = document.createElement("span")
        const autor = document.createElement("span")
        const status = document.createElement("span")

        titulo.innerText = "TITULO: " + livros[i].titulo
        autor.innerText = "AUTOR: " + livros[i].autor
        status.innerText = livros[i].disponibilidade ? "DISPONÍVEL": "INDISPONÍVEL"

        titulo.classList.add("titulo-livro")
        autor.classList.add("titulo-livro")  

        if(livros[i].disponibilidade){
            status.classList.add("status-disponibilidade")
        }
        else{
            status.classList.add("status-indisponibilidade")
        }
        
        divLivro.appendChild(titulo)
        divLivro.appendChild(autor)
        divLivro.appendChild(status)
        divLivro.classList.add("livro-container")
        resultadoDaConsultaContainer.appendChild(divLivro)
    }
}

function limparBuscaAnterior() {
    const resultadoDaConsultaContainer = document.querySelector("#resultadoDaConsulta")
    
    while (resultadoDaConsultaContainer.firstChild) {
      resultadoDaConsultaContainer.removeChild(resultadoDaConsultaContainer.firstChild)
    }
  }