const { Question } = require("../models/question.model")

const addQuestion = async (req, res, next) => {
  try {
    console.log(req.body)
    const question = new Question(req.body)
    await question
      .save()
      .then(() => res.json({ message: "Data saved successfully" }))

    next()
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

module.exports = {
  addQuestion,
}
