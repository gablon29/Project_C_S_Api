const { Router } = require("express");
const { routerGet } = require('./get');
const { routerPost } = require("./post");
const router = Router();

router.use('/', (req, res, next) => {
    switch (req.method) {
        case 'GET': return routerGet(req, res, next);
        case 'POST': return routerPost(req, res, next);
    }
});

module.exports = router