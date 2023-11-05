const questionRouter = require("express").Router()

const questionController = require("../controllers/question.controllers")

questionRouter.post("/", questionController.addQuestion)

module.exports = { questionRouter }
