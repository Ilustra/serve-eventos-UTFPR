const  express = require('express')

const router = express.Router()

const authMiddleware = require('../middlewares/auth')

router.use(authMiddleware)

router.get('/', (req, res)=> {
   return res.send({status: true, Id: req.Id})
})

module.exports = app => app.use('/auth', router)