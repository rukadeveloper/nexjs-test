import React from 'react';
import './SkeletonHeader.css';

export default function SkeletonHeader() {
  return (
    <div className="py-8 w-full">
      <div className="inner max-w-[1300px] h-[60px] mx-auto my-0 flex items-center justify-center lg:justify-start py-5">
        <div className="button__anime w-[60px] h-[60px] bg-gray-200 rounded-full" />
        <div className="logo__anime w-[90px] h-[40px] bg-gray-200 rounded-[10px] ml-0 lg:ml-6" />
        <div className="input__anime w-2/5 h-[40px] bg-gray-200 ml-5 rounded-[10px] lg:ml-5"></div>
        <div className="rank__anime w-[240px] h-[40px] ml-4 bg-gray-200 rounded-[10px]"></div>
        <div className="icon__anime w-[160px] h-[40px] rounded-[10px] ml-4 flex items-center gap-5">
          <div className="flex-1 bg-gray-200 rounded-full h-[40px]"></div>
          <div className="flex-1 bg-gray-200 rounded-full h-[40px]"></div>
          <div className="flex-1 bg-gray-200 rounded-full h-[40px]"></div>
        </div>
      </div>
    </div>
  )
}
