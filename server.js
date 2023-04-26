require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const app = express()
app.use(express.json())

app.get('/api/pat', (req, res) => {
	res.json({msg: "build a restful api with nodejs + express + mongodb"})
})

const port = process.env.PORT || 5000
app.listen(port, () => {
	console.log('Server is running on port', port)
})


// Connect MongoDB
const mongoURI = process.env.MONGODB_URL

// Connect to MongoDB
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));
