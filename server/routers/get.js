const { Router } = require('express');
const { showUsers, getUsers } = require('../controllers/get/getUser');
const routerGet = Router();

routerGet.get('/', getUsers)

module.exports = routerGet