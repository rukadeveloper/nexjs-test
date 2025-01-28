import React from 'react'

export default function InputWrap({ children } : { children : React.ReactNode }) {
  return (
    <div className="input__wrap w-full mx-auto flex flex-col-reverse mb-4">
      { children }
    </div>
  )
}
