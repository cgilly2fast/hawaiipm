import React, { Fragment, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import DownArrowIcon from '../../../Assets/Images/DownArrowIcon.svg';
import Logo from '../../../Assets/Images/Logo.svg';
import MenuIcon from '../../../Assets/Images/MenuIcon.svg';
import { Link } from 'react-router-dom';

const MobileMenu: React.FC = () => {
  const [expandMenu, setExpandMenu] = useState(false);
  const [expandCompany, setExpandCompany] = useState(false);
  const [expandOwners, setExpandOwners] = useState(false);
  const [expandTenants, setExpandTenants] = useState(false);

  const toggleMenu = () => {
    if (expandMenu) {
      setExpandCompany(false);
      setExpandOwners(false);
      setExpandTenants(false);
    }
    setExpandMenu(!expandMenu);
  };

  const toggleCompany = () => {
    setExpandCompany(!expandCompany);
  };

  const toggleOwners = () => {
    setExpandOwners(!expandOwners);
  };

  const toggleTenants = () => {
    setExpandTenants(!expandTenants);
  };

  return (
    <div>
      <div className="sm:h-[56px] bg-Green100 p-[16px] flex justify-between sm:hidden md:flex lg:hidden">
        <Link to="/">
          <img src={Logo} alt="logo" className="sm: h-[20px] " />
        </Link>
        <button onClick={toggleMenu}>
          <img
            src={MenuIcon}
            alt="menu"
            className="h-6 w-6 text-gray-400"
            aria-hidden="true"
          />
        </button>
      </div>
      {expandMenu && (
        <div className="fixed inset-0 font-Arial z-50 transition-all ease-in-out duration-300">
          <div className="fixed inset-y-0  right-0 w-4/5 bg-Green100 bg-opacity-95 text-[20px] text-white  shadow-lg">
            <button
              className="justify-left pt-[20px] pl-[20px]"
              onClick={toggleMenu}
            >
              X
            </button>
            <ul className="p-4 text-right">
              <li className="pt-[10px] mr-7">Available Rentals</li>
              <li className="pt-[10px]">
                <button onClick={toggleCompany}>
                  Our Company
                  <span className="ml-2">{expandCompany ? '▲' : '▼'}</span>
                </button>
              </li>
              {expandCompany && (
                <ul className="bg-Neutral100 text-gray-700 pt-[10px] pb-[10px]">
                  <li className="mr-7">About Us</li>
                  <li className="mr-7">Contact</li>
                </ul>
              )}
              <li className="pt-[10px]">
                <button onClick={toggleOwners}>
                  Owners<span className="ml-2">{expandOwners ? '▲' : '▼'}</span>
                </button>
              </li>
              {expandOwners && (
                <ul className="bg-Neutral100 text-gray-700 pt-[10px] pb-[10px]">
                  <li className="mr-7">Owner Login</li>
                  <li className="mr-7">Services</li>
                  <li className="mr-7">Why Us</li>
                </ul>
              )}
              <li className="pt-[10px]">
                <button onClick={toggleTenants}>
                  Tenants
                  <span className="ml-2">{expandTenants ? '▲' : '▼'}</span>
                </button>
                {expandTenants && (
                  <ul className="bg-Neutral100 text-gray-700 pt-[10px] pb-[10px]">
                    <li className="mr-7">Apply for rental</li>
                    <li className="mr-7">Tenant Login</li>
                    <li className="mr-7">Maintenance</li>
                  </ul>
                )}
              </li>
              <li className="pt-[10px] mr-7">Help</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
