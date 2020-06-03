
const { Image } = require('../models')
const router = require('express').Router()
const multer = require('multer')
const multerConfig = require('../../config/multer')

router.get('/posts', async (req, res) => {
    try {
        const images = await Image.findAll({order:['updatedAt']})
        return res.send(images)
    } catch (e) {
        return res.status(400).send('Ops! algo deu aconteceu')
    }
})
router.post('/posts', multer(multerConfig).single('file'), async (req, res) => {
    if (!req.file)
        return res.status(400).send('file not found')
    try {
        const { originalname: name, size, filename: key, location: url = "" } = req.file
        return await Image.create({ name, size, key, url }).then(data => {
            res.json(data)
        })
    } catch (e) {
        return res.status(400).send('Ops! algo deu aconteceu')
    }
})


module.exports = app => app.use('/auth', router)