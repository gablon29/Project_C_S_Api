const { Router } = require('express');
const { showUsers  } = require('../controllers/get/getUser');
const routerGet = Router();

routerGet.get('/', showUsers)

module.exports = routerGet