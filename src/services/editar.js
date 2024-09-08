const tarefas = recuperarTarefas();
const title = document.getElementById("title");
const inputTarefaNome = document.getElementById("tarefa");
const inputTarefaDescricao = document.getElementById("descricao");
const divNotify = document.getElementById("notify");
const btnHome = document.getElementById("btn-home");
let tarefa;

function carregarData(){
    const urlParams = new URLSearchParams(window.location.search);
    const idTarefa = urlParams.get("id");
    tarefa = tarefas.filter(tarefa => tarefa.id === idTarefa)[0];
    title.innerText = `Editar Tarefa Id: ${tarefa.id}`;
    inputTarefaNome.value = tarefa.nome;
    inputTarefaDescricao.value = tarefa.descricao;
    const success = document.createElement("p");
    success.style.color = "green";
    success.textContent = "Tarefa Carregada!";
    divNotify.appendChild(success);
}

function verificarCampos(){
    if(inputTarefaNome.value !== "" && inputTarefaDescricao.value !== ""){
        return true;
    }
    return false;
}

function editarTarefa(){
    divNotify.innerHTML = "";
    if(verificarCampos()){
        tarefas[tarefas.indexOf(tarefa)].nome = inputTarefaNome.value;
        tarefas[tarefas.indexOf(tarefa)].descricao = inputTarefaDescricao.value;
        salvarTarefas(tarefas);
        const success = document.createElement("p");
        success.style.color = "green";
        success.textContent = "Tarefa Editada!";
        success.classList.add("input-notify");
        divNotify.appendChild(success);
        window.location.href = "../app/home.html";
        return;
    }
    const error = document.createElement("p");
    error.style.color = "red";
    error.textContent = "Preencha Todos os campos";
    error.classList.add("input-notify");
    divNotify.appendChild(error);
}

btnHome.addEventListener("click", function () {
    window.location.href = "../app/home.html";
})

document.addEventListener("DOMContentLoaded", carregarData());