const express = require('express');
const router = express.Router();
const {getHeroes, addHero} = require('../controllers/heroController')

router.get('/heroes', getHeroes);
router.post('/heroes', addHero);

module.exports = router;