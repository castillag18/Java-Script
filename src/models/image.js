const {Schema, model} = require('mongoose')

const photo = new Schema({
  tittle: string,
  description: string,
  imageUrl: string,
  public_id: string
})

module.exports = model('Photo', photo)