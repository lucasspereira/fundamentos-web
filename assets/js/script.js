let nome = window.document.getElementById('nome')
let email = window.document.querySelector('#email')
let assunto = window.document.querySelector('#assunto')



function validaNome() {

    if (nome.value.lenght < 3) {
        alert("Nome inválido")
    }
}