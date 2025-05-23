const mysql = require('mysql2');

const db = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: 'admin123',
    database: 'userdb1'
});

db.connect(err => {
    if (err) throw err;
    console.log('conectado ao banco');
});

module.exports = db;
