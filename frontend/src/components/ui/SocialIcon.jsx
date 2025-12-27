const SocialIcon = ({ Icon }) => {
  return (
    <div className="w-15 h-7 rounded-full bg-gray-400 flex items-center justify-center text-white hover:bg-blue-600 hover:text-white cursor-pointer transition">
      <Icon size={20}/>
    </div>
  );
};
export default SocialIcon;