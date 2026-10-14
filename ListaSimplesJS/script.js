const form = document.getElementById("form")
const input = document.getElementById("input")
const listaTarefas = document.getElementById("listaTarefas")
const mensagem = document.getElementById("mensagem")

const botaoLimpar = document.getElementById("clean")

var arrayTarefas = []

form.addEventListener('submit', (event) =>{
    event.preventDefault()

    if(input.value.trim() === ""){
        mensagem.textContent = "Erro"
        return
    }
    arrayTarefas.push(input.value)
    redenrizar()
    mensagem.textContent = "Adicionada com sucesso"
})

function redenrizar(){
    if(arrayTarefas.length < 1){
    botaoLimpar.style.display = 'none'
} if(arrayTarefas.length > 0){
    botaoLimpar.style.display = 'block'
}

    listaTarefas.innerHTML = ""
    arrayTarefas.forEach((t) =>{
        var tarefa = document.createElement('li')
        tarefa.textContent = t

        var botaoDeletar = document.createElement('button')
        botaoDeletar.textContent = "Remover"
        botaoDeletar.className = 'remover'
        botaoDeletar.onclick = () => removerTarefa(arrayTarefas.indexOf(t))

        var botaoEditar = document.createElement('button')
        botaoEditar.textContent = "Editar"
        botaoDeletar.className = 'editar'
        botaoEditar.onclick = () => editarTarefa(arrayTarefas.indexOf(t))

        tarefa.appendChild(botaoEditar)
        tarefa.appendChild(botaoDeletar)
        listaTarefas.appendChild(tarefa)
    })
}

function removerTarefa(i){
    arrayTarefas.splice(i, 1)
    redenrizar()
}

function editarTarefa(i){
    var novaTarefa = prompt("Digite a nova tarefa")
    if(novaTarefa.trim() === ""){
        mensagem.textContent = "Erro"
        return
    }
    arrayTarefas[i] = novaTarefa
    redenrizar()
}

botaoLimpar.addEventListener('click', () =>{
    arrayTarefas = []
    listaTarefas.textContent = ""
    mensagem.textContent = ""
})