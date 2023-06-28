const { Router } = require('express');
const routerPost = Router();
const { insertUser } = require('../controllers/post/createUser');
const { createRowPredicas } = require('../controllers/post/createPredicas');


routerPost.post('/user', insertUser);
routerPost.post('/predicas', createRowPredicas)

module.exports = routerPost