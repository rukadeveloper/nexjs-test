import React from 'react';

export default function LoginLayout({ children } : { children: React.ReactNode }) {
  return (
    <div id="root" className="flex justify-center items-center w-full h-screen">
      {children}
    </div>
  )
}
