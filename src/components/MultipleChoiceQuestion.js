import React, { useState } from "react"

export const MultipleChoiceQuestion = () => {
  const [optionCount, setOptionCount] = useState(4)
  const [renderArray, setRenderArray] = useState([])

  const renderOptions = () => {
    for (let i = 0; i < optionCount; i++) {
      renderArray.push(<ChoiceComponent id={i + 1} />)
    }
  }

  return (
    <div>
      <div className="flex items-center justify-center flex-col">
        <input type="text" placeholder="Enter your question" />
        <>
          {renderOptions()}
          {renderArray.map((choice, id) => (
            <div key={id}>{choice}</div>
          ))}
        </>
      </div>
    </div>
  )
}

const ChoiceComponent = ({ id }) => {
  return (
    <div>
      <input
        type="radio"
        name="mcq_question"
        id={`option${id}`}
        className="mr-1"
      />
      <input type="text" placeholder="Enter your option value" />
    </div>
  )
}
