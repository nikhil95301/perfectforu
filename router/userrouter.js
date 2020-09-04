const User = require('../model/usermodel')
const express = require('express')
const router = express.Router()
router.post('/signup',async(req,res) =>{
    const user = await User(req.body)
    await user.save()
    res.status(201).send(user)
})
module.exports = router