'use strict'

async function connect(){
    if (global.connection && global.conection.state "")


    const mysql2 = require('mysql2/promise');
    const Connection = await mysql2.createConnection("msql2://root@localhost:3306/db/Fornatto_DB_2.mwb");
    console.log(" MySQL data bank connected successfully");
    global.connection = conection;
    return connection;
}
module.exports = 