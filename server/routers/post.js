const { Router } = require('express');
const routerPost = Router();
const { insertUser } = require('../controllers/post/createUser')


routerPost.post('/user', insertUser);

module.exports = routerPost