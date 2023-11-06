import React, { useState } from "react"
import { Question } from "./Question"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons"

export const NewQuestionBox = ({ deleteQuestion }) => {
  const [questionType, setQuestionType] = useState("short_answer")

  const handleChange = (e) => {
    const _questionType = e.target.value
    setQuestionType(_questionType)
  }

  return (
    <div className="flex items-center justify-evenly mb-3">
      <Question questionType={questionType} />

      <div>
        <select
          name="question_type"
          id="question_type"
          className="border-2 border-black"
          onChange={handleChange}
        >
          <option value="short_answer">Short Answer</option>
          <option value="paragraph">Paragraph</option>
          <option value="mcq">Multiple Choice</option>
          <option value="checkbox">CheckBoxes</option>
          <option value="dropdown">Dropdown</option>
          <option value="file_upload">File Upload</option>
          <option value="date">Date</option>
          <option value="time">Time</option>
        </select>
        <button
          type="button"
          className="ml-3 object-contai"
          onClick={deleteQuestion}
        >
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
      </div>
    </div>
  )
}
