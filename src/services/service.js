function gerarIdUnico() {
    return '_' + Math.random().toString(36).substr(2, 9);
}

function criarTarefa(nomeTarefa, descricaoTarefa){
    const tarefa = {
        nome: nomeTarefa,
        descricao: descricaoTarefa,
    };
    tarefa.id = gerarIdUnico();
    return tarefa;
}

function salvarTarefas(tarefa){
    localStorage.setItem("tarefas", JSON.stringify(tarefa));
}

function recuperarTarefas(){
    return JSON.parse(localStorage.getItem("tarefas"));
}
