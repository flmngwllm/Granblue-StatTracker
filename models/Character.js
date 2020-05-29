const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Character = new Schema({
    id: String,
    name: String,
    description: String,
    wins: Number,
    losses: Number,
    percentage: Number,
    image: String
    
})

module.exports = mongoose.model('Character', Character)