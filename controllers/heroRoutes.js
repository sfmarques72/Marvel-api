const express = require('express');
const router = express.Router();
const validateHero = require('../middlewares/validate.Hero')
const {getHeroes, addHero, deleteHero, updateHero} = require('../controllers/heroController')

router.get('/heroes', getHeroes);
router.post('/heroes', validateHero, addHero);
router.delete('/heroes/:id', deleteHero); 
router.put('/heroes/:id', validateHero, updateHero);    

router
module.exports = router;