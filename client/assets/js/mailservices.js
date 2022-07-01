const nome = document.getElementById('name')
const email = document.getElementById('email')
const telefone = document.getElementById('telephone')
const mensagem = document.getElementById('message')
const btn = document.getElementById('button-form')

btn.addEventListener('click', e => {
  e.preventDefault()

  let data = {
    nome: nome.value,
    email: email.value,
    telefone: telefone.value,
    mensagem: mensagem.value
  }
})
function sendEmail(data) {
  window.fetch('http://localhost:8080/emailservice', {
    method: 'POST', //TEM QUE SER MAIUSCULO
    body: JSON.stringify(data), //stringfy muda p uma palavra ao inves de um objeto
    headers: {
      'Content Type': 'application/json'
    }
  })
}
