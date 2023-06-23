const { Router } = require('express');
const routerPost = Router();

routerPost.post('/user', (req, res) => {
console.log('ruta accesible')
});

module.exports = {
    routerPost
}