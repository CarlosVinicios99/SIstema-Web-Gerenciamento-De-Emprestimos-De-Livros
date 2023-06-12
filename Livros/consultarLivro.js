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
        console.log(livros)

        if(livros != null){
      //      window.alert(`Tem certeza que deseja excluir o livro ${livro.titulo}`)
        }
        else{
            window.alert(`Livro nao existe!`)
        }

    }
    catch(error){
        console.log(`Erro ao buscar Livro: ${error}`)
    }
}