const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Character = new Schema({
    name: String,
    wins: Number,
    losses: Number,
    percentage: Number,
    image: []
    
})

module.exports = mongoose.model('Character', Character)