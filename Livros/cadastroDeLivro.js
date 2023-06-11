(function(){

    const botaoCadastrar = document.querySelector("#botaoCadastrar")

    botaoCadastrar.addEventListener("click", (event) => {
        event.preventDefault()
        cadastrarLivro()
    })

})()

async function cadastrarLivro(){
    const [titulo, autor, descricao, codigo, proprietario] = obterInputsDeEntrada()
    const dadosValidos = validarDadosDeLivro(titulo, autor, descricao, codigo, proprietario)

    if(!dadosValidos){
        window.alert(" Dados Inválidos! \nPreencha os campos corretamente.")
    }

    else{
        const novoLivro = {titulo, autor, descricao, codigo, proprietario}
        const url = "http://localhost:8080/livro"

        try{
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(novoLivro)
            })
            if(response.ok) {
                const livro = await response.json();
                console.log(livro)
                window.alert("Usuário cadastrado com sucesso!")
                window.location.href = "./menulivros"
            }
        }
        catch(error){
            console.log(`Erro ao cadastrar usuario: ${error}`)
        }
    }
}

function obterInputsDeEntrada(){
    const titulo = document.querySelector("#inputTitulo").value
    const autor = document.querySelector("#inputAutor").value
    const descricao = document.querySelector("#inputDescricao").value
    const codigo = document.querySelector("#inputCodigo").value
    const proprietario = document.querySelector("#inputProprietario").value

    return [titulo, autor, descricao, codigo, proprietario]
}

function validarDadosDeLivro(titulo, autor, descricao, codigo, proprietario){

    if(titulo === "" || autor === "" || descricao === "" || codigo === "" || proprietario == ""){
        return false
    }
    return true
}

