import React from 'react'

export default function IconWrapper({ children } : { children : React.ReactNode }) {
  return (
    <div className="icon__wrapper lg:ml-4 ml-0 right-0 flex items-center gap-5">
      { children }
    </div>
  )
}
