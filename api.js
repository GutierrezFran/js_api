const express = require('express');
const {db, createTableUsers, insertUser, selectAll} = require('./databaseSQLite')

const app = express();
const puerto = 3000;
app.use(express.json());

createTableUsers();

app.get('/v1/users/hello-world', (req, res) => {
    res.json({ mensaje: 'Hola mundo, este es mi primera api en js' });
});
app.post('/v1/users/insert',(req, res)=>{
    const newUser = req.body;
    insertUser(newUser.name, newUser.email, newUser.age, res);
})
app.get('/v1/users', (req, res) => {
    selectAll(res)
});
app.listen(puerto, () => {
    console.log(`Servidor corriendo en el puerto ${puerto}`);
});
