const mongoose = require('../db/connection')
const Schema = mongoose.Schema


const User = new Schema({
    id : String,
    name: String,
    email: String,
    totalwins: Number,
    description: String,
    charactersID:[ {
            type: Schema.Types.ObjectId,
            ref: "Character"
        }
    ]

})



module.exports = mongoose.model('User', User)