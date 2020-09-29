const mongoose = require('mongoose')
const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
      },
      body: {
        type: String,
        required: true
      },
      photo: {
        type: String,
        default: "no photo"
      },
      postedby:{
        type : Object,
        ref: 'users'

      }
})
module.exports=mongoose.model('post' , PostSchema)