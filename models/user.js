const mongoose  = require('mongoose')
const { v4 } = require('uuid')

const nameSchema = new mongoose.Schema({
    uuid: { type: String, default: v4 },
    firstName: { type: String, required: true },
    lastName: {type: String, required: true}
   },{
    // overrides default collection name auto created
    collection: 'users'
  })

const User = mongoose.model('User', nameSchema)
module.exports = { User }