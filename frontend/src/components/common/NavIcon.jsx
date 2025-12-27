import React from 'react'
import { useNavigate } from 'react-router-dom'

const NavIcon = ({ icon, label, to}) => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(to)} className="flex flex-col items-center justify-center cursor-pointer group px-2">
      <div className="text-gray-900 group-hover:text-blue-600 transition-colors">
        {icon}
      </div>
      <span className="hidden sm:inline-block text-[11px] sm:text-xs text-gray-500 mt-1 group-hover:text-blue-600 whitespace-nowrap">
        {label}
      </span>
    </div>
  )
}

export default NavIcon