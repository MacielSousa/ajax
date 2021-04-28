const bodyParser = require('body-parser')
const express = require('express')
const app = express()

//server, vai servir todos os arquivos estaticos que estão na mesma pasta.
app.use(express.static('.'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//Testando servidor
app.get('/teste', (req, res) => res.send(new Date))
    //Mudando a porta do sevidro
app.listen(8080, () => console.log('Executando'))