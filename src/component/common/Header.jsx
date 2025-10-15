import { FaAngleDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa6";
import Vector from '../../assets/Vector.png'
const Header = () => {
  return (
    <header className="bg-[#487C9A]  border-b border-gray-200">
      <div className=" flex items-center justify-between px-8 py-2">
        
        {/* Logo */}
        <div className="font-extrabold text-2xl tracking-wide cursor-pointer hover:scale-105 transition-transform duration-200">
          <span className="text-white">LOGO</span>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-10">
          <Link to="/" className="text-white hover:text-gray-300 transition-colors duration-200">
            Business Setup
          </Link>

          <div className="relative">
            <button className="flex items-center gap-1 text-white font-semibold transition-colors duration-200">
              Our Services <FaAngleDown className="text-xs mt-[2px]" />
            </button>
          </div>

          <Link to="/about" className="text-white hover:text-gray-300 transition-colors duration-200">
            About Us
          </Link>

          <Link to="/contact" className="text-white hover:text-gray-300 transition-colors duration-200">
            Contact Us
          </Link>

          <Link to="/cost" className="text-black bg-[#FFC310] transition-colors duration-200 py-2 px-8 rounded-xl font-bold">
            Cost Calculator
          </Link>
          
    <div className="flex gap-2 text-white border-l-1  border-r-1  p-4 h-full">
    <img src={Vector} alt="" />
    <p>ENG</p>
</div>

          <button className=" px-5 py-2 rounded-lg font-semibold text-white transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
<FaBars/>          </button>
        </nav>

      </div>
    </header>
  );
};

export default Header;
