const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
 title: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  post: String,
  require: true
},
 owner: {
   type: mongoose.Schema.Types.ObjectId,
   ref:'User',
   required: true
 }
}, {
    timestamps: true
})

module.exports = mongoose.model('Blog', blogSchema)