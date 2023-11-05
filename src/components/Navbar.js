import React from "react"
import { NavLink } from "react-router-dom"

export const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-evenly underline">
        <NavLink to="/" className="font-bold">
          Form Builder
        </NavLink>
        <NavLink to="/formaccepter" className="font-bold underline">
          Form Accepter
        </NavLink>
      </nav>
    </div>
  )
}
