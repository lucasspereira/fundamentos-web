let nome = window.document.getElementById('nome')
let email = window.document.querySelector('#email')
let assunto = window.document.querySelector('#assunto')
let mensagem = window.document.querySelector('#txtMensagem')
let mapa = window.document.querySelector('#mapa')
let emailOk = false
let nomeOk = false
let assuntoOk = false




function validaNome() {
    let txtNome = document.querySelector('#txtNome')

    if (nome.value.length < 3) {
        txtNome.innerHTML = "Nome Inválido!"
        txtNome.style.color = 'red'

    } else {
        txtNome.innerHTML = "Nome Válido"
        txtNome.style.color = 'green'
        nomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'Por favor, digite um e-mail válido'
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = "E-mail válido"
        txtEmail.style.color = 'green'
        emailOk = true
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')

    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = "Limite de caracteres excedido!"
        txtAssunto.style.color = 'red'
    } else {
        txtAssunto.innerHTML = " "
        assuntoOk = true
    }
}

function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert("Formulário enviado com sucesso!")
    } else {
        alert("Preencha o formulário corretamente!")
    }
}

function zoomMap() {
    mapa.style.width = "400px"
    mapa.style.height = "250px"
}

function normalMap() {
    mapa.style.width = "200px"
    mapa.style.height = "200px"
}