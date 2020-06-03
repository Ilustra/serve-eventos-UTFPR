const  express = require('express')
const router = express.Router()

const {TipoAtividade} = require('../models')
router.get('/tipoAtividade', async (req, res)=>{
  try{
    let tipoAtividade = await TipoAtividade.findAll()
    return res.send(tipoAtividade)
  }catch(e){
      return res.status(400).send('Ops! algo inesperado ocorreu!')
  }
})
router.post('/tipoAtividade', async (req, res)=>{
    try{
      let tipoAtividade = await TipoAtividade.create(req.body)
      return res.send(tipoAtividade)
    }catch(e){
        return res.status(400).send(e.error)
    }
})
router.put('/tipoAtividade', async (req, res)=>{

    const {id, descricao} = req.body
    const tipoAtividade = await TipoAtividade.findByPk(id)
    console.log(tipoAtividade)
    await tipoAtividade.update({
      id, descricao
    })
    return res.send(tipoAtividade)

})

router.delete('/tipoAtividade/:id', async (req, res)=>{
    try{
      const {id} =req.params
      const tipoAtividade = await TipoAtividade.findByPk(id)
      await tipoAtividade.destroy();
      return res.send()
    }catch(e){
        return res.status(400).send('Ops! algo inesperado ocorreu!')
    }
})



module.exports = app => app.use('/auth',  router)