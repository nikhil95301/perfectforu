const User = require('../model/usermodel')
const express = require('express')
const router = express.Router()

router.post('/signup',async(req,res) =>{
    const user = await User(req.body)
 try {  
    console.log(user)
    await user.save()
    
    res.status(201).send(user)}
    catch(e)
    {
        console.log(e)
    }
})
module.exports = router