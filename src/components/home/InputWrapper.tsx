import React from 'react'

export default function InputWrapper({ children } : { children : React.ReactNode }) {
  return (
    <div className="input__wrapper w-3/5">
      { children }
    </div>
  )
}
