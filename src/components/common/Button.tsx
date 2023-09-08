import React from "react"

export default function Button({onClick, btnClass, title}: Button) {
  return (
    <button onClick={onClick} className={`btn ${btnClass}`}>{title}</button>
  )
}