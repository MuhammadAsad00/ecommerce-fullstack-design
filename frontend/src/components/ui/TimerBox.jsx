import React from 'react'

const TimerBox = ({val, label}) => {
  return (
    <div className="bg-gray-800 text-white rounded w-11 h-12 flex flex-col items-center justify-center">
      <span className="font-bold text-sm">{val}</span>
      <span className="text-[10px] text-gray-300">{label}</span>
    </div>
  )
}

export default TimerBox