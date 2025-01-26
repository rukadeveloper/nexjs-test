import React from 'react'

export default function ButtonWrapper({ children } : { children : React.ReactNode }) {
  return (
    <div className="button__wrapper w-12 h-12 absolute right-0">
      { children }
    </div>
  )
}
