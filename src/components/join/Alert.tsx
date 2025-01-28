import React from 'react';

export default function Alert({ errorMessage, popupOpen } : { errorMessage : string, popupOpen: boolean }) {
  return (
    <div className={`w-[500px] h-[300px] fixed z-50 bg-white shadow-md ${!popupOpen ? 'hidden' : ''}`}>
        <h2 className="text-center mt-10 text-xl font-bold">중복 확인</h2>
        <p>{errorMessage}</p>
    </div>
  )
}
