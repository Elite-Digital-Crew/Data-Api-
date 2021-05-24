
const { BSONType } = require('mongodb')
const mongoose = require('mongoose')
const reqString = {
  type: String,
  required: true
}

const DataSchema = mongoose.Schema({
    "exercise": reqString,
    "torc" : reqString
}, {
  timestamp: true
})

const outputSchema = mongoose.Schema(
  {
      Title: reqString,
      image: reqString,
      Desc: reqString,
      difficulty: reqString,
      units: {type: Number, required: true},
      data: [DataSchema]
  }
)

module.exports = mongoose.model('output', outputSchema)
module.exports = mongoose.model('dataSchema', dataSchema)
































//{
  //  title : "ABS"
   // image : "mongo.hustlex/courses/main/abs/image.png"
   // description : "blah blah"
   // difficulty : Beginner
   // Units: 20 
   // data : {
     //       {
        //         exercise : "plank",
        //         t/c : "10x"
        //    },
         //  {
         //        exercise : "plank",
         //        t/c : "10x"
         //   }
  //  }
    