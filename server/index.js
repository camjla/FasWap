const express = require('express') //chamando o express para a instalação q foi feita
const app = express()
const cors = require('cors')
const { json } = require('express')
const PORT = process.env.PORT || 8080
//quando está criando a API e voce nao quer que as pessoas vejam tudo // se a primeira nao existir ele roda 8080

app.use(cors()) //libera para qualquer pessoa por enquanto
app.use(json())

app.post(
  '/emailservice',
  (
    req,
    res //req= requisição, res=resposta
  ) => {
    let emailContent = req.body

    console.log(emailContent)
    res.send({
      msg: 'Email enviado com sucesso!'
    })
  }
)

app.listen(PORT, () => {
  console.log(`Rodando o server na porta ${PORT}`)
})

//node> ambiente node rodando o js
//nodemon > "ouve sua aplicação"
