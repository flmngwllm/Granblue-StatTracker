const mongoose = require('./connection')
const User = require('../models/User')
const Character = require('../models/Character')


const Gran = new Character({
    name: 'Gran',
    description: 'Monday',
    image: '', 
    wins: 0, 
    losses

}),

const Katalina = new Character({
    name: 'Katalina',
    description: 'Monday',
    image: '', 
    wins: 0, 
    losses: 0

}),

const Lancelot = new Character({
    name: 'Lancelot',
    description: 'Monday',
    image: '', 
    wins: 0, 
    losses: 0

}),

const Percival = new Character({
    name: 'Percival',
    description: 'Monday',
    image: '', 
    wins: 0, 
    losses: 0

}),

const Narmaya = new Character({
    name: 'Narmaya',
    description: 'Monday',
    image: '', 
    wins: 0, 
    losses: 0

}),

const Soriz = new Character({
    name: 'Soriz',
    description: 'Monday',
    image: '', 
    wins: 0, 
    losses: 0
})

const Lowain = new Character({
    name: 'Lowain',
    description: 'Monday',
    image: '', 
    wins: 0, 
    losses: 0

})

const Metera = new Character({
    name: 'Metera',
    description: 'Monday',
    image: '', 
    wins: 0, 
    losses: 0

})

const Djeeta = new Character({
    name: 'Djeeta',
    description: 'Monday',
    image: '', 
    wins: 0, 
    losses: 0

})


const Charlotta = new Character({
    name: 'Charlotta',
    description: 'Monday',
    image: '', 
    wins: 0, 
    losses: 0

})


const Vaseraga = new Character({
    name: 'Vaseraga',
    description: 'Monday',
    image: '', 
    wins: 0, 
    losses: 0

})


const Ferry = new Character({
    name: 'Ferry',
    description: 'Monday',
    image: '', 
    wins: 0, 
    losses: 0

})

const Zeta = new Character({
    name: 'Zeta',
    description: 'Monday',
    image: '', 
    wins: 0, 
    losses: 0

})

const Beezlebub = new Character({
    name: 'Zeta',
    description: 'Monday',
    image: '', 
    wins: 0, 
    losses: 0

})

const Ladiva = new Character({
    name: 'Zeta',
    description: 'Monday',
    image: '', 
    wins: 0, 
    losses: 0

})


User.remove({})
.then(()=> test.save())
.then(()=> console.log('Successful Save'))
.then(()=> mongoose.connection.close())