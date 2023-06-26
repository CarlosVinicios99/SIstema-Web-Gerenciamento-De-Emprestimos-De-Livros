(function(){
    const botaoConsultar = document.querySelector("#botaoConsultar")
    botaoConsultar.addEventListener("click", (event) => {
        event.preventDefault()
        buscarLivros()
    })
})()

async function buscarLivros(){
    const titulo = document.querySelector("#inputTitulo").value
    console.log(titulo)
    const url = `http://localhost:8080/livro/consulta?titulo=${titulo}`
    try{
        const response = await fetch(url)
        const livros = await response.json()
        if(livros != null){
            exibirLivros(livros)
        }
        else{
            window.alert(`Livro nao existe!`)
            return null
        }

    }
    catch(error){
        console.log(`Erro ao buscar Livro: ${error}`)
    }
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

        /*
        if(livros[i].disponibilidade){
            status.classList.add("status-disponibilidade")
        }
        else{
            status.classList.add("status-indisponibilidade")
        }
        */
        if(i % 2 === 0){
            status.innerText = "DISPONÍVEL"
            status.classList.add("status-disponibilidade")
        }
        else{
            status.innerText = "INDISPONÍVEL" 
            status.classList.add("status-indisponibilidade")
        }

        divLivro.appendChild(titulo)
        divLivro.appendChild(autor)
        divLivro.appendChild(status)
        divLivro.classList.add("livro-container")
        resultadoDaConsultaContainer.appendChild(divLivro)
    }
}