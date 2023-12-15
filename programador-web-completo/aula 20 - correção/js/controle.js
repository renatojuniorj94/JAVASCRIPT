// Defina as variáveis fora da função para garantir acesso global
let contador = 0;
let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('areaLista');

function addTarefa() {
    let valorInput = input.value.trim();

    if (valorInput !== "") {
        contador++;
        
        let novoItem = `
        <div id="${contador}" class="item">
            <div class="item-icone" onclick="marcarTarefa(${contador})">
                <span class="material-icons">radio_button_unchecked</span>
            </div>
                                        
            <div class="item-nome">
                <input type="text" value="${valorInput}" readonly="readonly" onclick="marcarTarefa(${contador})">
            </div>
            
            <div class="item-botao">
                <button onclick="deletar(${contador})" class="delete">Excluir</button>
            </div>
        </div>`;

        main.insertAdjacentHTML('beforeend', novoItem);

        input.value = "";
        input.focus();
    }
}

function deletar(id) {
    let tarefa = document.getElementById(id);
    tarefa.remove();
}

function marcarTarefa(id){
    let item = document.getElementById(id);
    item.classList.toggle('item-clicado');

    let inputText = item.querySelector('.item-nome input');
    inputText.classList.toggle('clicado');

    let icone = item.querySelector('.material-icons');
    icone.classList.toggle('clicado');

    if (icone.textContent === "radio_button_unchecked") {
        icone.textContent = "check_circle";
    } else {
        icone.textContent = "radio_button_unchecked";
    }

    icone.classList.toggle('verde'); // Adiciona/remova a classe 'verde' ao ícone
    let botao = item.querySelector('button');
    botao.classList.toggle('clicado');
}

input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        btnAdd.click();
    }
});
