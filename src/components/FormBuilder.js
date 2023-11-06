import React, { useState } from "react"
import { NewQuestionBox } from "./NewQuestionBox"

export const FormBuilder = () => {
  const [questions, setQuestions] = useState([
    <NewQuestionBox deleteQuestion={() => deleteQuestion(0)} />,
  ])
  const deleteQuestion = (index) => {
    console.log("Inside delete question")
    const newQuestions = questions.slice()
    newQuestions.splice(index, 1)
    setQuestions(newQuestions)
  }
  const addNewQuestion = () => {
    setQuestions([
      ...questions,
      <NewQuestionBox
        deleteQuestion={() => deleteQuestion(questions.length)}
      />,
    ])
  }
  return (
    <div className="text-center">
      <h1 className="font-bold text-xl underline">Form Builder</h1>
      <form className="mt-8">
        <div className="w-full">
          {questions.map((question) => {
            return question
          })}

          <h1
            className="text-8xl cursor-pointer text-blue-900 font-bold inline-block"
            onClick={addNewQuestion}
          >
            +
          </h1>
        </div>
        <button
          type="button"
          className="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
    </div>
  )
}
