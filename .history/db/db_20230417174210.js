'use strict'
//************************************************************************************* */
async function connect(){
    if (global.connection && global.conection.state !== 'disconnected'){
        return global.connection;
    }
//************************************************************************************** */
    const mysql2 = require('mysql2/promise');
    const Connection = await mysql2.createConnection("MSQL80://root@localhost:3306/db/Fornatto_DB_2.mwb");
    console.log(" MySQL data bank connected successfully");
    global.connection = connection;
    return connection;
}
//****************************************************************************************** */

// to complica
module.exports = 