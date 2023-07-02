(function(){
    const botaoConfirmar = document.querySelector("#botaoConfirmar")

    botaoConfirmar.addEventListener("click", (event) => {
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
        let url = `http://localhost:8080/usuario/cpf?cpf=${cpf}`
        let usuario
        try{
            let response = await fetch(url)
            if(response.ok) {
                usuario = await response.json();
                console.log(usuario.emprestimos)
                exibirMeusEmprestimos(usuario.emprestimos)
            }
            else{
                window.alert("Os dados nao correspondem a nenhum registro!\nTente Novamente!")
                return
            }
        }
        catch(error){
            console.log(`Erro ao buscar usuario: ${error}`)
        }
    }
}

function obterInputsDeEntrada(){
    const cpf = document.querySelector("#inputCPF").value
    return cpf
}

function validarDadosDeEntrada(cpf){
    if(cpf === ""){
        return false
    }
    return true
}

async function exibirMeusEmprestimos(emprestimos){

    const resultadoDaConsultaContainer = document.querySelector("#resultadoDaConsulta")
    const tituloResultados = document.createElement("h2")
    tituloResultados.classList.add("titulo-resultados")
    tituloResultados.innerText = "Resultados"
    resultadoDaConsultaContainer.append(tituloResultados)   

    for(let i = 0; i < emprestimos.length; i++){
        if(i === 0){
            const divEmprestimo = document.createElement("div")
            const titulo = document.createElement("span")
            titulo.innerText = ""
            titulo.classList.add("titulo-livro")
            divEmprestimo.appendChild(titulo)
            divEmprestimo.classList.add("livro-container")
            resultadoDaConsultaContainer.appendChild(divEmprestimo)
        }

        const divEmprestimo = document.createElement("div")
        const tituloLivro = document.createElement("span")
        const dataInicial = document.createElement("span")
        const dataFinal = document.createElement("span")
        const status = document.createElement("span")

        const dataInicialConteudo = emprestimos[i].dataInicial
        const dataInicialFormatada = new Date(dataInicialConteudo).toLocaleDateString("pt-BR")

        const dataFinalConteudo = emprestimos[i].dataFinal
        const dataFinalFormatada = new Date(dataFinalConteudo).toLocaleDateString("pt-BR")

        tituloLivro.innerText = "LIVRO: " + emprestimos[i].livro.titulo
        dataInicial.innerText = "DATA INICIAL: " + dataInicialFormatada
        dataFinal.innerText = "DATA FINAL: " + dataFinalFormatada
        status.innerText += dataFinalFormatada.length > Date.now() ? "COM ATRASO" : "CORRENTE"
    
        tituloLivro.classList.add("titulo-livro")
        dataInicial.classList.add("titulo-livro")
        dataFinal.classList.add("titulo-livro")
        
        if(status.innerText === "COM ATRASO"){
            status.classList.add("status-indisponibilidade")
        }
        else{
            status.classList.add("status-disponibilidade")
        }
      
        divEmprestimo.appendChild(tituloLivro)
        divEmprestimo.appendChild(dataInicial)
        divEmprestimo.appendChild(dataFinal)
        divEmprestimo.appendChild(status)

        divEmprestimo.classList.add("livro-container")
        resultadoDaConsultaContainer.appendChild(divEmprestimo) 

    }
}