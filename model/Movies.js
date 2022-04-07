const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({
  name:{
      type:String,
      required:true
  },
  rating:{
      type:Number,
      required:true
  },
  cast:{
    type:[],
    required:true
},
  genre:{
    type: String,
    required:true
},
  releaseDate:{
      type: Date,
    }
})

  module.exports = mongoose.model("Data", dataSchema)