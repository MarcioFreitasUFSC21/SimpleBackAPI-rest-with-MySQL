'use strict'

async function connect(){
    const mysql2 = require('mysql2/promise');
    const Connection = await mysql2.createConnection("msql2://root@localhost:3306/db/Fornatto_DB_2.mwb");
    console.log(" MySQL data ban")
}