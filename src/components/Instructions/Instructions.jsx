import * as React from "react"
import "./Instructions.css"

export function Instructions(props) {
  return (
    <aside className="instructions">
      <p>{props.start}</p>
      <p>{props.onlyCategory}</p>
      <p>{props.onlyRestaurant}</p>
      <p>{props.noSelectedItem}</p>
      <p>{props.allSelected}</p>
    </aside>
  )
}

export default Instructions
