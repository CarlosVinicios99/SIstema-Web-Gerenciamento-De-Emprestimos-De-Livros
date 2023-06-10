(function(){
    const botaoRemover = document.querySelector("#botaoRemover")

    botaoRemover.addEventListener("click", (event) => {
        event.preventDefault()
        buscarUsuario()
    })  
})()


async function buscarUsuario(){
    const url = `http://localhost:8080/usuario?cpf=${cpf}`
    try{
        const response = await fetch(url)
        const usuario = await response.json()
        console.log(usuario)

        if(usuario != null){
            window.alert(`Tem certeza que deseja excluir o usuario ${usuario.nome}`)
            excluirUsuario()
            window.location.href = "./menuusuario.html"
        }
        window.alert(`Usuario nao existe!`)

    }
    catch(error){
        console.log(`Erro ao buscar usuario: ${error}`)
    }
}

async function excluirUsuario(usuario){
    const url = `http://localhost:8080/usuario/${usuario.id}`
    try{
        const response = await fetch(url)
        const usuario = await response.json()
        console.log(usuario)
    }
    catch(error){
        console.log(`Erro ao buscar usuario: ${error}`)
    }
}