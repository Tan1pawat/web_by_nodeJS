const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')
mongoose.createConnection('mongodb+srv://admin:admin12345@cluster0.uxdoohz.mongodb.net/test?retryWrites=true&w=majority')
const UserSchema = new Schema({
    email : {
        type: String,
        required: [true,'please provide email']
    },
    username : {
        type: String,
        required: [true,'please provide username']
    },
    contactnumber : {
        type: Number,
        required: [true,'please provide contactnumber']
    },
    firstname : {
        type: String,
        required: [true,'please provide firstname']
    },
    lastname : {
        type: String,
        required: [true,'please provide lastname']
    },
    password : {
        type: String,
        required: [true,'please provide password']
    }
})

UserSchema.pre('save', function(next) {
    const user = this

    bcrypt.hash(user.password, 10).then(hash =>{
        user.password = hash
        next()
    })
})

const User = mongoose.model('User',UserSchema)
module.exports = User