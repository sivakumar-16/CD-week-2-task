const Pool = require('pg').Pool

const pool= new Pool({
    user:'postgres',
    host:'localhost',
    database:'user',
    password:'task',
    port:5432,
});

module.exports = pool;