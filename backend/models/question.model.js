const mongoose = require("mongoose")

const Schema = mongoose.Schema

const questionSchema = new Schema({
  question: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  question_type: {
    type: String,
    required: true,
  },
  options: [
    {
      option: { type: String, required: true },
    },
  ],
})

exports.Question = mongoose.model("Question", questionSchema)
