(function(){
    const botaoConfirmar = document.querySelector("#botaoConfirmar")

    botaoAvancar.addEventListener("click", (event) => {
        event.preventDefault()
        obterMeusEmprestimos()
    })
})()

async function obterMeusEmprestimos(){
    const cpf = obterInputsDeEntrada()
    const dadosValidos = validarDadosDeEntrada(cpf)

    if(!dadosValidos){
        window.alert(" Dados Inválidos! \nPreencha os campos corretamente.")
    }

    else{
        let url = `http://localhost:8080/usuario?cpf=${cpf}`
        let usuario
        try{
            let response = await fetch(url)
            if(response.ok) {
                usuario = await response.json();
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
                limparBuscaAnterior()
                exibirLivrosParaAdicionarEmprestimos(livros, usuario)
            }
            else{
                window.alert("Os dados nao correspondem a nenhum registro!\nTente Novamente!")
                return
            }
        }
        catch(error){
            console.log(`Erro ao buscar livro: ${error}`)
        }
    }
}

function obterInputsDeEntrada(){
    const cpf = document.querySelector("#inputCPF").value
    return cpf
}
function validarDadosDeEntrada(cpf, senha, livro){
    if(cpf === ""){
        return false
    }
    return true
}

async function exibirLivrosParaAdicionarEmprestimos(livros, usuario){

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
        const proprietario = document.createElement("span")
        const contato = document.createElement("span")
        const botaoEmprestimo = document.createElement("button")


        titulo.innerText = "TITULO: " + livros[i].titulo
        autor.innerText = "AUTOR: " + livros[i].autor
        status.innerText = livros[i].disponibilidade ? "DISPONÍVEL": "INDISPONÍVEL"
        proprietario.innerText =  "PROPRIETÁRIO: " + livros[i].proprietario
        botaoEmprestimo.innerText = "Emprestar"
        

        titulo.classList.add("titulo-livro")
        autor.classList.add("titulo-livro")  
        proprietario.classList.add("titulo-livro")
        contato.classList.add("titulo-livro")
        botaoEmprestimo.classList.add("botao-emprestimo")

        botaoEmprestimo.addEventListener("click", (event) => {
            event.preventDefault()
            realizarEmprestimo(usuario, livros[i])
        })

        if(livros[i].disponibilidade){
            status.classList.add("status-disponibilidade")
        }
        else{
            status.classList.add("status-indisponibilidade")
        }

        divLivro.appendChild(titulo)
        divLivro.appendChild(autor)
        divLivro.appendChild(proprietario)
        divLivro.appendChild(status)

        if(livros[i].proprietario !== "biblioteca"){
            contato.innerText = "CONTATO: " + livros[i].proprietario.replace(" ", "").toLowerCase() + "@email.com"
            divLivro.append(contato)
        }

        if(livros[i].proprietario === "biblioteca" && livros[i].disponibilidade){
            divLivro.appendChild(botaoEmprestimo)
        }
       
        divLivro.classList.add("livro-container")
        resultadoDaConsultaContainer.appendChild(divLivro)
    }
}