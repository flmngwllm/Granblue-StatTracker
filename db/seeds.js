const mongoose = require('./connection')
const User = require('../models/User')

const test = new User({
    name: 'Will',
    description: 'Monday',
    

})


User.remove({})
.then(()=> test.save())
.then(()=> console.log('Successful Save'))
.then(()=> mongoose.connection.close())