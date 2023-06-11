(function(){
    const botaoRemover = document.querySelector("#botaoRemover")

    botaoRemover.addEventListener("click", (event) => {
        event.preventDefault()
        buscarLivro()
    })  
})()


async function buscarLivro(){
    const codigo = document.querySelector("#inputCodigo").value

    const url = `http://localhost:8080/livro/${codigo}`
    try{
        const response = await fetch(url)
        const livro = await response.json()
        console.log(livro)

        if(usuario != null){
            window.alert(`Tem certeza que deseja excluir o usuario ${livro.titulo}`)
            excluirLivro(livro)
        }
        else{
            window.alert(`Livro nao existe!`)
        }

    }
    catch(error){
        console.log(`Erro ao buscar Livro: ${error}`)
    }
}

async function excluirUsuario(usuario) {
    const url = `http://localhost:8080/livro/${livro.id}`;
    try{
        const response = await fetch(url, {method: "DELETE"})

        if(response.ok){
            console.log('Livro removido com sucesso');
            window.alert("Livro removido com sucesso")
            window.location.href = "./menulivro.html"
        } 
        else{
            console.log('Falha ao remover o Livro');
        }
    } 
    catch(error){
        console.log(`Erro ao remover Livro: ${error}`);
    }
}
