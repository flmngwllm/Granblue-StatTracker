const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Character = new Schema({
    name: String,
    wins: Number,
    losses: Number
    
})

module.exports = mongoose.model({'Character' : Character})