const Hero = require ('../models/Hero')
//Delete
const deleteHero = async (req, res) => {
    try {
        await Hero.findByIdAndDelete (req.params.id);
        res.json(await Hero.find())
    }
    catch (err) {
        res.status(500).json({error: "Erro ao deletar"});
    }
}
//Get
const getHeroes = async (req,res) => {
    const heroes = await Hero.find()
    res.json(heroes)
}
//Post
const addHero = async (req, res) => {
    const newHero = new Hero ({name: req.body.name})
    await newHero.save()
    res.json(await Hero.find())
}
//Pull
const updateHero = async (req, res) => {
    console.log("ID recebido:", req.params.id); 
    try{
        const uptadeHero = await Hero.findByIdAndUpdate(
            req.params.id,
            {   $set : {name: req.body.name, power: req.body.power}},
            {new: true}
        )
        res.json(uptadeHero);
    }
    catch (err) {
        res.status(500).json({ error: 'Erro ao atualizar '})        
    }

}
module.exports = {getHeroes, addHero,deleteHero,updateHero}