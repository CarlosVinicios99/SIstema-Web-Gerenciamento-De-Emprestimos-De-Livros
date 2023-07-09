(function(){
    const botaoDevolver = document.querySelector("#botaoDevolver")

    botaoDevolver.addEventListener("click", (event) => {
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

        if(livro != null){
            registrarDevolucao(livro)
        }
        else{
            window.alert(`Livro nao existe!`)
        }

    }
    catch(error){
        console.log(`Erro ao buscar : ${error}`)
    }
}

async function registrarDevolucao(livro) {
    const url = `http://localhost:8080/emprestimos/${livro.id}`;
    try{
        const response = await fetch(url, {method: "DELETE"})

        if(response.ok){
            console.log('Emprestimo removido com sucesso');
            window.alert("Emprestimo removido com sucesso")
            window.location.href = "./menuemprestimos.html"
        } 
        else{
            console.log('Falha ao remover o Livro');
        }
    } 
    catch(error){
        console.log(`Erro ao remover Livro: ${error}`);
    }
}
