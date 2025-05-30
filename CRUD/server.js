const express = require('express');
const app = express();
const port = 3000;
const path = require('path'); //trabalhar com diretorios


const db = require('./db');

app.use(express.static(path.join(__dirname, 'public'))); //acessar a pasta public

//rota principal
app.get('/', (req, res) => {
    //res.send('Servidor no ar');
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

//trazer as nossas rotas (ROUTES/api)
const apiRoutes = require('./routes/api');

app.use(express.json());

app.use('/api/users', apiRoutes);

app.listen(port, ()=>{
    console.log(`Servidor ativo`);
})
