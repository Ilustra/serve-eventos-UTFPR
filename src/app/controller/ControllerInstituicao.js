const  express = require('express')
const router = express.Router()

const {Instituicao} = require('../models')

router.post('/instituicao',   async (req, res)=>{
    try{
      let instituicao = await Instituicao.create(req.body)
      console.log(instituicao)
      return res.send(instituicao)
    }catch(e){
        return res.status(400).send(e)
    }
})
router.get('/instituicao',   async (req, res)=>{
    try{
      let instituicao = await Instituicao.findAll()
      return res.send(instituicao)
    }catch(e){
        return res.status(400).send(e)
    }
})
router.delete('/instituicao/:id', async (req, res)=>{
  try{
    const {id} =req.params
    const tipoAtividade = await Instituicao.findByPk(id)
    await tipoAtividade.destroy();
    return res.send()
  }catch(e){
      return res.status(400).send('Ops! algo inesperado ocorreu!')
  }
})
router.put('/tipoAtividade', async (req, res)=>{
  const {id, nome, sigla, cnpj} = req.body
  const instituicao = await Instituicao.findByPk(id)
  await tipoAtividade.update({
    id, nome, sigla, cnpj
  })
  return res.send(instituicao)
})

module.exports = app => app.use('/auth',  router)