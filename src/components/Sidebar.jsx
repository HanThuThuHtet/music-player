import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiCloseLine } from 'react-icons/ri'

import { logo , spotify ,blue } from '../assets'
import { links } from "../assets/constants";
import { HiOutlineMenu } from "react-icons/hi";

const NavLinks = ({handleClick}) => (
  <div className="mt-10">
    {links.map((link) => (
      <NavLink 
        key={link.name}
        to={link.to}
        className="flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400"
        onClick={() => handleClick && handleClick()}
      >
        <link.icon className="w-6 h-6 mr-2" />
        {link.name}
      </NavLink>
    ))}
  </div>
);

const Sidebar = () => {
  const [ mobileMenuOpen , setMobileMenuOpen ] = useState(false);

  return(
    <>

    {/* Desktop */}
      {/* <div className="md:flex hidden flex-col w-[200px] py-10 px-4 bg-[#191624]">
        <img src={spotify} alt="logo" className="w-full h-14 object-contain" />
        <NavLinks />
      </div> */}

    {/* Mobile */}
    <div className="absolute top-12 left-3">
      { mobileMenuOpen ? 
        ( <HiOutlineMenu className="w-6 h-6 text-white mr-2" 
                       onClick={()=>setMobileMenuOpen(false)}
          /> ) 
        : 
        ( <HiOutlineMenu className="w-6 h-6 text-white mr-2"
                         onClick={()=>setMobileMenuOpen(true)}
           /> ) }
    </div>

    <div className={`absolute top-0 h-screen lg:w-1/5 md:w-2/3 bg-gradient-to-tl from-black to-[#0f0d20] backdrop-blur-lg z-10 p-6  smooth-transition ${mobileMenuOpen ? 'left-0' : '-left-full'}`}>
        <div className="flex flex-row">
          <div className="absolute top-12 left-3">
            { mobileMenuOpen ? 
              ( <HiOutlineMenu className="w-6 h-6 text-white mr-2" 
                            onClick={()=>setMobileMenuOpen(false)}
                /> ) 
              : 
              ( <HiOutlineMenu className="w-6 h-6 text-white mr-2"
                              onClick={()=>setMobileMenuOpen(true)}
                /> ) }
          </div>
        <img src={spotify} alt="logo" className="w-full h-14 object-contain" />
        </div>
        <NavLinks handleClick={() => setMobileMenuOpen(false)} />
      </div>

    </>
  );
}

export default Sidebar;
