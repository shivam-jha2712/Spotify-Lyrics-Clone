import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiOutlineMenu } from 'react-icons/hi';
import { RiCloseLine } from 'react-icons/ri';

import { logo } from '../assets';
import { links } from '../assets/constants';

//In order to euse our NavBar Component on both mobile and desktop devices thus we need to make a navigation componenet here it self just above the sidebar.
const NavLinks = (handleClick) => (
  <div className="mt-10">
    {links.map((item) => (
      <NavLink
        key={item.name}
        to={item.to}
        className="flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-cyan-400"
        onClick={() => handleClick && handleClick()}
      >
        <item.icon className="w-6 h-6 mr-2" />
        {item.name}
      </NavLink>
    ))}
    {/* The idea of calling handleClick is done only on the mobile devices and since it is done on mobile devices the first handleClick is used to check whether the device is mobile pr not and then calling the fucntion of handleClick itself */}
  </div>
);


const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  //Checking if in mobile device and if yes showing menu accordingly.

  return (
    <>
      {/* This is responsible to wrap our entire NavBar */}
      <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#191624]">
        <img src={logo} alt="logo" className="w-full h-14 object-contain"></img>
        <NavLinks />
      </div>

      {/* Mobile menu - The tricky section */}
      <div className="absolute md:hidden block top-6 right-3">
        {mobileMenuOpen ? (
          <RiCloseLine className="w-6 h-6 text-white mr-2" onClick={() => setMobileMenuOpen(false)} />
        ) : <HiOutlineMenu className="w-6 h-6 text-white mr-2" onClick={() => setMobileMenuOpen(true)} />}
      </div>

      {/* This is a dynamic section of the NavBar */}
      <div className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#483d8b] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${mobileMenuOpen ? 'left-0' : 'left-full'}`}>
        <img src={logo} alt="logo" className="w-full h-14 object-contain"></img>
        <NavLinks handleClick={() => setMobileMenuOpen(false)} />
        {/* This handleClick is done to justify the opening of the menu item and in order to do this we do need to make changes in the RiCloseLine and HiOutline as well */}
      </div>

    </>
  )
};

export default Sidebar;
