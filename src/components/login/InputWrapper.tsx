import React from 'react'

export default function InputWrapper({ children } : { children : React.ReactNode }) {
  return (
    <div className="input__wrapper mt-10 w-[300px]">
      { children }
    </div>
  )
}
