const mongoose = require('mongoose')

const logintemplate = new mongoose.Schema({
    fullname:{
        type:String,
        require: true
    },
    username:{
        type:String,
        require: true
    },
    email:{
        type:String,
        require: true
    },
    password:{
        type:String,
        require: true
    },
    date:{
        type:Date,
        default: Date.now
    }
})

module.exports = mongoose.model('myTable', logintemplate)