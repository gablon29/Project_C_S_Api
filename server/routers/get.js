const { Router } = require('express');
const routerGet = Router();

routerGet.get('/', (req, res) => {
    res.send('<h1>hola</h1>')
})

module.exports = {
    routerGet
}