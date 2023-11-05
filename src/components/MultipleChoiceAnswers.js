import React from "react"

export const MultipleChoiceAnswers = ({ options }) => {
  console.log(options)
  return (
    <div>
      {options.map(({ option }, index) => (
        <div className="flex">
          <input type="radio" value={index} className="mr-3" />
          <p>{option}</p>
        </div>
      ))}
    </div>
  )
}
