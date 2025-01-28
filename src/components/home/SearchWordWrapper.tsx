import React from 'react'

export default function  SearchWordWrapper({ children, focus } : { children : React.ReactNode, focus: boolean }) {
  return (
    <div className={`absolute w-[623px] h-[300px] z-50 bg-white rounded-md border border-solid border-gray-100 flex ${!focus && "hidden"}`}
         style={{ top: 'calc(100% + 20px)', left: 'calc(100% / 3)'}}>
      { children }
    </div>
  )
}
