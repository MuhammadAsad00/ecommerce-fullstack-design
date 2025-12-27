// Helper component for menu items
const MenuLink = ({ icon, label, to, onClick }) => (
  <NavLink 
    to={to} 
    onClick={onClick}
    className="flex items-center gap-4 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
  >
    <span className="text-gray-400">{icon}</span>
    <span className="text-[15px] font-medium">{label}</span>
  </NavLink>
);