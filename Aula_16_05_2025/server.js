const express = require('express')
const app = express()
const port = 3000

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  //res.send('Hello World! - Ranyelson')
  res.sendFile(__dirname + '/public/index.html');
})

app.get('/sobre', (req, res) => {
    res.send('Página Sobre')
})

app.get("/blog", (req, res) =>{
    res.sendFile(__dirname + '/public/blog.html');
});

app.post("/contato", (req, res) =>{
    const { nome, email } = req.body;
    res.send(`Dados recebidos: Nome: ${nome}, Email: ${email}`);
});


//app.post("/adicionar", (req, res) => {
//    const nome = req.body.nome;
//    res.send(`Nome recebido: ${nome}`)
//  })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


