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
    for(let i = 0; i < livros.length; i++){
        const divLivro = document.createElement("div")
        const titulo = document.createElement("span")
        titulo.innerText = livros[i].titulo
        divLivro.appendChild(titulo)
        resultadoDaConsultaContainer.appendChild(titulo)
    }
}