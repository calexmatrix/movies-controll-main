const mysql = require('mysql');

const Connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    //database: 'movies-controll'
    database: 'movies'
})

module.exports = Connection;
