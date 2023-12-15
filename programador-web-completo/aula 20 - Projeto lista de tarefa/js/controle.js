let contador = 0
let input = document.getElementById('inputTarefa')
let btnAdd = document.getElementById('btn-add')
let main = document.getElementById('areaLista')

function addTarefa() {
    //Pegar o valor digitado no input
    let valorInput = input.value

    //Se não for vazio, nem nulo, nem indefinido
    if((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)) {
        
        ++contador
        
        let novoItem = `<div id="${contador}" class="item">

        <div onclick="marcarTarefa(${contador})" class="item-icone">
            <span id="icone_${contador}" class="material-icons">
                radio_button_unchecked
                </span>
        </div>
                                        
        <div onclick="marcarTarefa(${contador})" class="item-nome">
            ${valorInput}
        </div>

        <div class="item-botao">
            
            <button onclick="deletar(${contador})" class="delete">
                <span class="material-icons">
                    delete
                    </span>
                Excluir
            </button>
        </div>`

        //Adicionando novos itens no main
        main.innerHTML += novoItem

        //Zerando itens no main
        input.value = ""
        input.focus()

    }
}

function deletar(id) {
    var tarefa = document.getElementById(id)
    tarefa.remove()
}

function marcarTarefa(id){
    var item = document.getElementById(id)
    var classe = item.getAttribute('class')
    console.log(classe)

    if (classe == "item") {
        item.classList.add('clicado');
    
        var icone = document.getElementById(`icone_${id}`);
    
        icone.textContent = 'check_circle_outline';
    }
    
}

input.addEventListener("keyup", function(event) {
    //Se clicou enter(13)
    if (event.keyCode === 13) {
        event.preventDefault()
        btnAdd.click()
    }
})