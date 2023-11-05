import React from "react"
import { NewQuestionBox } from "./NewQuestionBox"

export const FormBuilder = () => {
  return (
    <div className="text-center">
      <h1 className="font-bold text-xl underline">Form Builder</h1>
      <form className="mt-8">
        <NewQuestionBox />
        <button className="border-2 border-black mt-8 p-2" type="submit">
          <span className="font-bold">Submit</span>
        </button>
      </form>
    </div>
  )
}
