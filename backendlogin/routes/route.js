
const express = require('express')
const router = express.Router()
const logintemplate = require('../models/loginmodel')
const bcrypt = require('bcrypt')


router.post('/login', async(request, response) =>{
 
    const saltPassword = await bcrypt.genSalt(10) 
    const securepassowrd = await bcrypt.hash(request.body.password, saltPassword)

    const loginuser = new logintemplate({
        fullname: request.body.fullname,
        username: request.body.username,
        email: request.body.email,
        password: securepassowrd

    })
    loginuser.save()
    .then(data =>{
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })

})

module.exports = router