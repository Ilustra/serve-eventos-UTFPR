const  express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const router = express.Router()

const authConfig = require('../../config/auth')
const {Usuario} = require('../models')

function generateToken(params ={}){
    return jwt.sign(params, authConfig.secret,{
        //expiresIn: 86400
        expiresIn: 86400
    })
}

router.post('/newCountUser',   async (req, res)=>{
    const {Email}= req.body

    try{
        
    if (await Usuario.findOne({ where:{Email}}))
    return res.status(400).send("User already exists")

        let user = await Usuario.create(req.body)
        user.Password = undefined;
        user.Perfil = undefined;
        user.Token = generateToken({id: user.Id})
        return res.status(200).json(user)
        
    }catch(e){
        return res.status(400).send(e)
    }
})

router.post('/authenticateUser',  async(req, res)=>{

    const {Email, Password} = req.body

    const user = await Usuario.findOne(
        {where:{Email},
             attributes:['Email','Password', 'Nome','Id']})

    if (!user)
        return res.status(400).send('User not found')   

    if(!await  bcrypt.compareSync(Password, user.Password))
        return res.status(400).send('Invalid password')
        
    user.Password = undefined;
    user.Token = generateToken({id: user.Id})
    return res.send(user)
})

module.exports = app => app.use('/auth',  router)