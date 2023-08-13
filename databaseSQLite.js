const sqlite = require('sqlite3').verbose();

const db = new sqlite.Database('databaseSQLite.db');
//creacion de tabla
function createTableUsers(){
    db.run(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY,
        name VARCHAR(30),
        email VARCHAR(30),
        age INTEGER
      )
    `, (err) => {
        if (err) {
          console.error('Error al crear la tabla:', err.message);
        } else {
          console.log('Tabla de usuarios creada exitosamente');
        }
      });
}
// Función para insertar un usuario
function insertUser(name, email, age, res) {
    const query = 'INSERT INTO users (name, email, age) VALUES (?, ?, ?)';
    db.run(query, [name, email, age], function(err) {
      if (err) {
        console.error('Error al insertar usuario:', err.message);
        res.status(500).json({ error: 'Error al insertar usuario en la base de datos' });
      } else {
        console.log(`Usuario insertado con Id: ${this.lastID}`);
        res.json({ message: 'Usuario insertado exitosamente' });
      }
    });
  }
function selectAll(res){
    db.all('SELECT * FROM users', [], (err, rows) => {
        if (err) {
          console.log('error: ',err.message);  
          res.status(500).json({ error: 'Error al seleccionar data en la base de datos' });
        }
        res.json(rows);
      });
}

module.exports = {
    db,
    createTableUsers,
    insertUser,
    selectAll
};