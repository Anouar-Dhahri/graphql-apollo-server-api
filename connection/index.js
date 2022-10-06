import mongoose from 'mongoose'

const mongoConnect = async (req, res, next) => {
  try {
    await mongoose.connect(process.env.LIVE_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=> {
      console.log("Connected Succesfully to MongoDB")
    }).catch((err) => {
      res.json(err)
    })
  } catch (error) {
    res.json(error)
  }
}

export default mongoConnect
