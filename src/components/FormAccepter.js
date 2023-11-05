import axios from "axios"
import React, { useEffect, useState } from "react"
import { MultipleChoiceAnswers } from "./MultipleChoiceAnswers"

export const FormAccepter = () => {
  const [formData, setFormData] = useState([])
  try {
    useEffect(() => {
      axios.get("/question").then((res) => setFormData(res.data.questions))
    }, [])
  } catch (error) {
    console.log(error.message)
  }
  return (
    <div>
      <h1>Form Accepter</h1>
      {formData?.map(({ question, options }) => {
        console.log(question, options)
        return (
          <div>
            <QuestionComponent question={question} />
            {options && <MultipleChoiceAnswers options={options} />}
          </div>
        )
      })}
    </div>
  )
}

const QuestionComponent = ({ question }) => {
  return <h4 className="font-bold">{question}</h4>
}
