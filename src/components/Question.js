import React from "react"
import { MultipleChoiceQuestion } from "./QuestionTypes/MultipleChoiceQuestion"
import { ShortAnswerQuestion } from "./QuestionTypes/ShortAnswerQuestion"
import { ParagraphQuestion } from "./QuestionTypes/ParagraphQuestion"
import { CheckboxQuestion } from "./QuestionTypes/CheckboxQuestion"
import { DropdownQuestion } from "./QuestionTypes/DropdownQuestion"
import { Time } from "./QuestionTypes/Time"
import { FileUpload } from "./QuestionTypes/FileUpload"
import { DateComponent } from "./QuestionTypes/DateComponent"

export const Question = ({ questionType }) => {
  switch (questionType) {
    case "short_answer":
      return <ShortAnswerQuestion />

    case "paragraph":
      return <ParagraphQuestion />

    case "mcq":
      return <MultipleChoiceQuestion />

    case "checkbox":
      return <CheckboxQuestion />

    case "dropdown":
      return <DropdownQuestion />

    case "file_upload":
      return <FileUpload />

    case "date":
      return <DateComponent />

    case "time":
      return <Time />

    default:
      return <h1>Not Defined</h1>
  }
}
