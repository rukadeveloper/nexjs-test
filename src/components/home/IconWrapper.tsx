import React from 'react'

export default function IconWrapper({ children } : { children : React.ReactNode }) {
  return (
    <div className="icon__wrapper ml-4">
      { children }
    </div>
  )
}
