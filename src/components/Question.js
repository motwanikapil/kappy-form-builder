import React from "react"
import { MultipleChoiceQuestion } from "./MultipleChoiceQuestion"

export const Question = ({ questionType }) => {
  let renderComponent

  switch (questionType) {
    case "short_answer":
      return <ShortAnswerQuestion />

    case "mcq":
      return <MultipleChoiceQuestion />

    default:
      renderComponent = <h1>Not Defined</h1>
      break
  }

  return renderComponent
}

const ShortAnswerQuestion = () => {
  return (
    <div>
      <input
        type="text"
        className="border-2 border-black px-8 py-4 mr-8"
        placeholder="Enter your question here"
      />
    </div>
  )
}
