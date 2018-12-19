const mysql = require('mysql')

let pool = null

exports.connect = (done) => {
    pool = mysql.createPool({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'neoland',
        port: 8889
    })
    if (pool !== null) {
        // Conexión correcta
        done(null)
    } else {
        // Conexión con errores
        done('No se ha podido conectar BD')
    }
}

exports.get = () => {
    return pool
}