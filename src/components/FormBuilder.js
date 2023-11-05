import React, { useState } from "react"
import { NewQuestionBox } from "./NewQuestionBox"

export const FormBuilder = () => {
  const [questions, setQuestions] = useState([<NewQuestionBox />])
  const addNewQuestion = () => {
    console.log("Inside addnewquestion")
    setQuestions([...questions, <NewQuestionBox />])
  }
  return (
    <div className="text-center">
      <h1 className="font-bold text-xl underline">Form Builder</h1>
      <form className="mt-8">
        {questions.map((question) => question)}
        <h1
          className="text-8xl cursor-pointer text-blue-900 font-bold"
          onClick={addNewQuestion}
        >
          +
        </h1>

        <button
          type="button"
          class="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
    </div>
  )
}
