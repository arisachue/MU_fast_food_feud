import * as React from "react"
import { useState } from "react"
import "./Chip.css"

export function Chip({ label = "", isActive = false, onClick }) {
  // const [status, setStatus] = useState(false)

  // const handleOnClickStatus = () => {
  //   if (status == false) {
  //     setStatus(true)
  //   } else {
  //     setStatus(false)
  //   }
  // }

  var buttonClassName = "chip"
  if (isActive) {
    buttonClassName = "chip active"
  }
  return (
    <button className={buttonClassName} onClick={onClick}>
      <p className="label">{label}</p>
      <span className="close" role="button">{`X`}</span>
    </button>
  )
}

export default Chip
