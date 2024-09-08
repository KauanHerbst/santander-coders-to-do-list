let tarefas = recuperarTarefas();
const sectionLista = document.getElementById("lista-tarefas");
const inputTarefaNome = document.getElementById("tarefa");
const inputTarefaDescricao = document.getElementById("descricao");
const divNotify = document.getElementById("notify");

function carregarTarefas(){
    tarefas = recuperarTarefas();
    sectionLista.innerHTML = "";
    tarefas.forEach(tarefa => {
        const divTarefa = document.createElement("div");
        divTarefa.classList.add("div-tarefa");
        divTarefa.innerHTML = `
            <span>${tarefa.nome}</span>
            <p>${tarefa.descricao}</p>
        `;
        const divButtons = document.createElement("div");
        const btnExcluir = document.createElement("button");
        btnExcluir.textContent = "Excluir";
        btnExcluir.classList.add("btn-excluir");
        btnExcluir.addEventListener("click", function() {
            const index = tarefas.indexOf(tarefa);
            tarefas.splice(index, 1);
            salvarTarefas(tarefas);
            divTarefa.remove();
        });
       const btnEditar = document.createElement("button");
       btnEditar.textContent = "Editar";
       btnEditar.classList.add("btn-editar");
       btnEditar.addEventListener("click", function() {
        window.location.href = "./editar.html?id=" + tarefa.id;
       })
       divButtons.appendChild(btnExcluir);
       divButtons.appendChild(btnEditar);
       divTarefa.appendChild(divButtons);
       sectionLista.appendChild(divTarefa);
    })
}

function verificarCampos(){
    if(inputTarefaNome.value !== "" && inputTarefaDescricao.value !== ""){
        return true;
    }
    return false;
}

function limparCampos(){
    inputTarefaNome.value = "";
    inputTarefaDescricao.value = "";
}

function adicionarTarefa(){
    divNotify.innerHTML = "";
    if(verificarCampos()){
        const tarefa = criarTarefa(inputTarefaNome.value, inputTarefaDescricao.value);
        tarefas.push(tarefa);
        const success = document.createElement("p");
        success.style.color = "green";
        success.textContent = "Tarefa Adicionada";
        success.classList.add("input-notify");
        divNotify.appendChild(success);
        salvarTarefas(tarefas);
        limparCampos();
        carregarTarefas();
        return;
    }
    const error = document.createElement("p");
    error.style.color = "red";
    error.textContent = "Preencha Todos os campos";
    error.classList.add("input-notify");
    divNotify.appendChild(error);
}

document.addEventListener("DOMContentLoaded", carregarTarefas());