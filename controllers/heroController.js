const Hero = require ('../models/Hero')

const getHeroes = async (req,res) => {
    const heroes = await Hero.find()
    res.json(heroes)
}

const addHero = async (req, res) => {
    const newHero = new Hero ({name: req.body.name})
    await newHero.save()
    res.json(await Hero.find())
}

module.exports = {getHeroes, addHero}