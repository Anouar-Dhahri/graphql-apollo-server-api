import { model, Schema } from 'mongoose'

const BookSchema = new Schema({
  name:{
    type:String,
    required: true
  },
  auther: {
    type:String,
    required: true
  },
  genre: {
    type:String,
    required: true
  },
  price : {
    type:String,
    required: true
  }
},{timestamps: true})

const Book = model("Book", BookSchema)

export default Book