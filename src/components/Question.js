import React from "react"
import { MultipleChoiceQuestion } from "./MultipleChoiceQuestion"

export const Question = ({ questionType }) => {
  let renderComponent

  switch (questionType) {
    case "short_answer":
      renderComponent = (
        <input
          type="text"
          className="border-2 border-black px-4 py-2 w-8/12 mr-8"
          placeholder="Enter your question here"
        />
      )
      break

    case "mcq":
      return <MultipleChoiceQuestion />

    default:
      renderComponent = <h1>Not Defined</h1>
      break
  }

  return renderComponent
}
