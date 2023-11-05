const questionRouter = require("express").Router()

const questionController = require("../controllers/question.controllers")

questionRouter.post("/", questionController.addQuestion)
questionRouter.get("/", questionController.getAllQuestions)

module.exports = { questionRouter }
