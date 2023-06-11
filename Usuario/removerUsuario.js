(function(){
    const botaoRemover = document.querySelector("#botaoRemover")

    botaoRemover.addEventListener("click", (event) => {
        event.preventDefault()
        buscarUsuario()
    })  
})()


async function buscarUsuario(){
    const cpf = document.querySelector("#inputCPF").value

    const url = `http://localhost:8080/usuario/cpf?cpf=${cpf}`
    try{
        const response = await fetch(url)
        const usuario = await response.json()

        if(usuario != null){
            window.alert(`Tem certeza que deseja excluir o usuario ${usuario.nome}`)
            excluirUsuario(usuario)
        }
        else{
            window.alert(`Usuario nao existe!`)
        }

    }
    catch(error){
        console.log(`Erro ao buscar usuario: ${error}`)
    }
}

async function excluirUsuario(usuario) {
    const url = `http://localhost:8080/usuario/${usuario.id}`;
    try{
        const response = await fetch(url, {method: "DELETE"})

        if(response.ok){
            console.log('Usuário removido com sucesso');
            window.alert("Usuário removido com sucesso")
            window.location.href = "./menuusuario.html"
        } 
        else{
            console.log('Falha ao remover o usuário');
        }
    } 
    catch(error){
        console.log(`Erro ao remover usuário: ${error}`);
    }
}
