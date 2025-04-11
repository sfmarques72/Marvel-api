const mongoose = require('../db/db.js')

const heroScherma = new mongoose.Schema({
    name : { type: String, required: true},
    power : {type: String, default: "Super força"}
})

module.exports = mongoose.model('Hero', heroScherma)