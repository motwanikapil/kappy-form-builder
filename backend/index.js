const express = require("express")
const app = express()
const mongoose = require("mongoose")
const { questionRouter } = require("./routes/question.routes")
require("dotenv").config()

app.use(express.json())

mongoose.connect(process.env.MONGODB_URL).then((res) => {
  if (res) console.log("Mongodb Connected Successfully")
})

app.use("/question", questionRouter)

app.get("/", (req, res) => {
  res.send("<h1>Homepage</h1>")
})

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
