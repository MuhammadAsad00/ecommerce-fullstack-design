import React from 'react'
import { useNavigate } from 'react-router-dom'

const NavIcon = ({ icon, label, to, count }) => {
  const navigate = useNavigate();
  
  return (
    <div 
      onClick={() => navigate(to)} 
      className="flex flex-col items-center justify-center cursor-pointer group px-2 relative"
    >
      <div className="text-gray-900 group-hover:text-blue-600 transition-colors relative">
        {icon}
        
        {/* ================= CART BADGE ================= */}
        {count > 0 && (
          <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-[10px] font-bold h-4 w-4 flex items-center justify-center rounded-full border border-white">
            {count}
          </span>
        )}
      </div>
      
      <span className="hidden sm:inline-block text-[11px] sm:text-xs text-gray-500 mt-1 group-hover:text-blue-600 whitespace-nowrap">
        {label}
      </span>
    </div>
  )
}

export default NavIcon