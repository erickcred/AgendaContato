const formContato = document.getElementById("form-agenda-contato");
let inputNome = document.getElementById("nome");
let inputTelefone = document.getElementById("telefone");
let mensagem = document.getElementById("mensagem");

formContato.addEventListener("submit", (event) => {
    event.preventDefault();

    if (contatoExiste(inputTelefone)) { return }
    criarLinha();
    apresentaMensagemSucesso();
    formContato.reset();
});

function criarLinha() {
    const tbody = document.querySelector("table tbody");
    let tr = document.createElement("tr");
    let tdNome = document.createElement("td");
    let tdTelefone = document.createElement("td");
    tdTelefone.classList.add("tdTelefone");

    
    tdNome.textContent = inputNome.value;
    tdTelefone.textContent = inputTelefone.value;
    
    tr.appendChild(tdNome);
    tr.appendChild(tdTelefone);
    tbody.appendChild(tr);
}

function contatoExiste(telefone) {
    const tdTelefones = document.querySelectorAll(".tdTelefone");
    
    for (let tel of tdTelefones) {
        
        if (tel.textContent == telefone.value) {
            mensagem.classList.add("mensagem-erro");
            inputTelefone.classList.add("input-erro");
            setaMesagem("Esse número de contato já existe!");
            return true;
        } else {
            mensagem.classList.remove("mensagem-erro");
            inputTelefone.classList.remove("input-erro");
            return false;
        }
    }
}

inputTelefone.addEventListener("keyup", (event) => {
    contatoExiste(event.target);
});

function setaMesagem(texto) {
    mensagem.textContent = texto;
}

function apresentaMensagemSucesso() {
    mensagem.classList.add("mensagem-sucesso");
    setaMesagem("Contato cadastrado com sucesso");

    setTimeout(() => {
        mensagem.classList.remove("mensagem-sucesso");
    }, 3500);
}
