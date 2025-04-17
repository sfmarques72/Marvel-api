const express = require('express');
const router = express.Router();
const {getHeroes, addHero, deleteHero, updateHero} = require('../controllers/heroController')

router.get('/heroes', getHeroes);
router.post('/heroes', addHero);
router.delete('/heroes/:id', deleteHero); 
router.put('/heroes/:id', updateHero);    

router
module.exports = router;