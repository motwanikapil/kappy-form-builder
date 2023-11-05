const { Question } = require("../models/question.model")

const addQuestion = async (req, res, next) => {
  try {
    const question = new Question(req.body)
    await question
      .save()
      .then(() => res.json({ message: "Data saved successfully" }))

    next()
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const getAllQuestions = async (req, res, next) => {
  try {
    const questions = await Question.find()
    res.status(200).json({ questions })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = {
  addQuestion,
  getAllQuestions,
}
