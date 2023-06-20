const { Router } = require("express");
const router = Router();

router.get('/', (req, res) => {
    console.log('escuchando')
});

module.exports = router