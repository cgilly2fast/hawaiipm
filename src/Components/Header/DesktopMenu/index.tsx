import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react';
import DownArrowIcon from '../../../Assets/Images/DownArrowIcon.svg';
import Logo from '../../../Assets/Images/Logo.svg';

const DesktopMenu: React.FC = () => (
  <div className="mx-auto max-w-[1920px]">
    <div className="pl-[30px] hidden sm:block lg:block md:hidden absolute z-10">
      <Link to="/">
        <div className="flex w-[312px] xl:h-[156px] h-[130px] bg-Green100 absolute flex flex-col justify-center items-center rounded-b-lg md:w-[150px] h-[120px]  2xl:w-[300px] xl:w-[230px]">
          <img
            src={Logo}
            alt="logo"
            className="lg:w-[125px] 2xl:w-[232px] xl:w-[200px]"
          />
        </div>
      </Link>
    </div>
    <div className="text-Black400 bg-Neutral200 sm:flex flex-col items-center p-[10px] h-[40px] hidden md:hidden lg:block lg:flex flex-col items-center">
      <div className="w-[400px] text-[14px] flex justify-between flex-row items-center font-Arial">
        <div>
          <Link to="/blogexpanded" className="outline-none">
            Login
          </Link>
        </div>
        <div>
          <Link to="/guarantee" className="outline-none">
            Guarantee
          </Link>
        </div>
        <div>
          <Link to="/blog" className="outline-none">
            Blog
          </Link>
        </div>
        <div className="outline-none">415-209-5847</div>
      </div>
    </div>

    <div className=" text-Black100 justify-end pt-[20px] md:hidden lg:flex hidden font-Arial justify-end pb-[20px] pr-[50px] text-[18px]">
      <div className="w-[660px] flex justify-between items-center">
        <div>
          <Link to="/available" className="outline-none">
            Available Rentals
          </Link>
        </div>
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center gap-[5px] items-center hover:bg-gray-50 outline-none">
              <div>Our Company</div>
              <img
                src={DownArrowIcon}
                alt="down"
                className="-mr-1 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/aboutus"
                      className={`${
                        active ? 'bg-Green500 text-Green100' : 'text-gray-500'
                      }
                  block px-4 py-2 text-sm`}
                    >
                      About Us
                    </Link>
                  )}
                </Menu.Item>
                {/* <Menu.Item>
              {({ active }) => (
                <Link
                  to="/guarantee"
                  className={`${
                    active ? 'bg-Green500 text-Green100' : 'text-gray-500'
                  }
                  block px-4 py-2 text-sm`}
                >
                  Our Team
                </Link>
              )}
            </Menu.Item> */}
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/contact"
                      className={`${
                        active ? 'bg-Green500 text-Green100' : 'text-gray-500'
                      }
                  block px-4 py-2 text-sm`}
                    >
                      Contact Us
                    </Link>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center gap-[5px] items-center hover:bg-gray-50 outline-none">
              <div>Owners</div>
              <img
                src={DownArrowIcon}
                alt="down"
                className="-mr-1 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/owner"
                      className={`${
                        active ? 'bg-Green500 text-Green100' : 'text-gray-500'
                      }
                  block px-4 py-2 text-sm`}
                    >
                      Owner Login
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/services"
                      className={`${
                        active ? 'bg-Green500 text-Green100' : 'text-gray-500'
                      }
                  block px-4 py-2 text-sm`}
                    >
                      Services
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/whyus"
                      className={`${
                        active ? 'bg-Green500 text-Green100' : 'text-gray-500'
                      }
                  block px-4 py-2 text-sm`}
                    >
                      Why Us
                    </Link>
                  )}
                </Menu.Item>
                {/* <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/testimonials"
                      className={`${
                        active ? 'bg-Green500 text-Green100' : 'text-gray-500'
                      }
                  block px-4 py-2 text-sm`}
                    >
                      Testimonials
                    </Link>
                  )}
                </Menu.Item> */}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center gap-[5px] items-center hover:bg-gray-50 outline-none">
              <div>Tenants</div>
              <img
                src={DownArrowIcon}
                alt="down"
                className="-mr-1 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/available"
                      className={`${
                        active ? 'bg-Green500 text-Green100' : 'text-gray-500'
                      }
                  block px-4 py-2 text-sm`}
                    >
                      Applying for Rental
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/tenants"
                      className={`${
                        active ? 'bg-Green500 text-Green100' : 'text-gray-500'
                      }
                  block px-4 py-2 text-sm`}
                    >
                      Tenant Login
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/maintenance"
                      className={`${
                        active ? 'bg-Green500 text-Green100' : 'text-gray-500'
                      }
                  block px-4 py-2 text-sm`}
                    >
                      Maintenance
                    </Link>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
        {/* <div>
          <Link to="/agentReferral" className="outline-none">
            Agent referral program
          </Link>
        </div> */}
        <div>
          <Link to="/maintenance" className="outline-none">
            Help
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default DesktopMenu;

{
  /* <div className="text-Black400 bg-Neutral200 p-[10px] h-[40px] block sm:hidden md:block lg:hidden">
        <div className="flex justify-between flex-row font-Arial md:flex justify-between flex-row">
          <div>
            <Link to="login" className="outline-none">
              Login
            </Link>
          </div>
          <div>
            <Link to="/guarantee" className="outline-none">
              Guarantee
            </Link>
          </div>
          <div>
            <Link to="/blog" className="outline-none">
              Blog
            </Link>
          </div>
          <div>
            <Link to="/contact" className="outline-none">
              415-209-5847
            </Link>
          </div>
        </div>
      </div> */
}
{
  /* <div>
        <div>
          <div className="sm:h-[56px] bg-Green100 p-[16px] flex justify-between sm:hidden md:flex lg:hidden">
            <Link to="/">
              <img src={Logo} alt="logo" className="sm: h-[20px] " />
            </Link>
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex w-full justify-center outline-none">
                  <img
                    src={MenuIcon}
                    alt="menu"
                    className="h-6 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 bg-Neutral000 z-10 mt-2 w-32 origin-top-right ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      <Link
                        to="/available"
                        className="text-gray-500 block px-4 py-2 text-sm"
                      >
                        Available Rentals
                      </Link>
                    </Menu.Item>
                    <Menu.Item>
                      <div>
                        <button
                          onClick={toggleCompany}
                          className="text-gray-500 block px-4 py-2 text-sm"
                        >
                          Our Company
                        </button>
                        {expandCompany && (
                          <ul>
                            <li>
                              <Link
                                to="/aboutus"
                                className="text-gray-500 block px-4 py-2 text-sm"
                              >
                                About Us
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/contact"
                                className="text-gray-500 block px-4 py-2 text-sm"
                              >
                                Contact
                              </Link>
                            </li>
                          </ul>
                        )}
                      </div>
                    </Menu.Item>
                    <Menu.Item>
                      <Menu.Items>
                        <Menu.Item>
                          <span>Owners</span>
                        </Menu.Item>
                        <Menu.Item>
                          <span>Owner Login</span>
                        </Menu.Item>
                      </Menu.Items>
                    </Menu.Item>
                    <Menu.Item>
                      <Link
                        to="/contact"
                        className="text-gray-500 block px-4 py-2 text-sm"
                      >
                        Contact Us
                      </Link>
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </div> */
}
