const express = require('express');
const app = express();
const port = 3000;


//const db = require('./db');


app.get('/', (req, res) => {
    res.send('Servidor no ar');
})

app.listen(port, ()=>{
    console.log(`Servidor ativo`);
})
