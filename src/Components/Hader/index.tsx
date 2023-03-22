import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import TenantsIcon from '../../Assets/Images/TenantsIcon.svg';
import DownArrowIcon from '../../Assets/Images/DownArrowIcon.svg';
import UserIcon from '../../Assets/Images/UserIcon.svg';
import LogoIcon from '../../Assets/Images/LogoIcon.svg';
import Logo from '../../Assets/Images/Logo.svg';
import MenuIcon from '../../Assets/Images/MenuIcon.svg';
import { Link } from 'react-router-dom';

const Hader: React.FC = () => (
  <div className="relative">
    <div className="pl-[30px] hidden sm:block lg:block md:hidden absolute z-10">
      <div className="flex w-[312px] xl:h-[156px] h-[130px] bg-Green100 absolute flex flex-col justify-center items-center rounded-b-lg md:w-[150px] h-[120px]  2xl:w-[300px] xl:w-[230px]">
        <img src={LogoIcon} alt="logo" className="lg:w-[125px] 2xl:w-[232px] xl:w-[200px]" />
      </div>
    </div>
    <div className="text-Black400 bg-Neutral200 p-[10px] h-[40px] block sm:hidden md:block lg:hidden">
      <div className="flex justify-between flex-row font-Arial md:flex justify-between flex-row">
        <div>
          <Link to="login">Login</Link>
        </div>
        <div>
          <Link to="/guarantee">Referrals</Link>
        </div>
        <div>
          <Link to="/blog">Blog</Link>
        </div>
        <div>415-209-5847</div>
      </div>
    </div>
    <div className="text-Black400 bg-Neutral200 sm:flex flex-col items-center p-[10px] h-[40px] hidden md:hidden lg:block lg:flex flex-col items-center">
      <div className="w-[650px] text-[14px] flex justify-between flex-row items-center font-Arial">
        <div>
          <Link to="/blogexpanded">Resident Login</Link>
        </div>
        <div>
          <Link to="/guarantee">Realtor Referrals</Link>
        </div>
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center items-center hover:bg-gray-50">
              <img src={TenantsIcon} alt="Tenants" /> <div>Tenants</div>
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
                      to="/available"
                      className={`${
                        active ? 'bg-Green500 text-Green100' : 'text-gray-700'
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
                      to="/tenantslogin"
                      className={`${
                        active ? 'bg-Green500 text-Green100' : 'text-gray-700'
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
                        active ? 'bg-Green500 text-Green100' : 'text-gray-700'
                      }
                        block px-4 py-2 text-sm`}
                    >
                      maintenance
                    </Link>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center items-center hover:bg-gray-50">
              <img src={UserIcon} alt="user" /> <div>Owners</div>{' '}
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
                        active ? 'bg-Green500 text-Green100' : 'text-gray-700'
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
                      to="/ourservices"
                      className={`${
                        active ? 'bg-Green500 text-Green100' : 'text-gray-700'
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
                        active ? 'bg-Green500 text-Green100' : 'text-gray-700'
                      }
                        block px-4 py-2 text-sm`}
                    >
                      Why us
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/testimonials"
                      className={`${
                        active ? 'bg-Green500 text-Green100' : 'text-gray-700'
                      }
                        block px-4 py-2 text-sm`}
                    >
                      Testimonials
                    </Link>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
        <div>
          <Link to="/blog">Blog</Link>
        </div>
        <div>415-209-5847</div>
      </div>
    </div>
    <div>
      <div>
        <div className="sm:h-[56px] bg-Green100 p-[16px] flex justify-between sm:hidden md:flex lg:hidden">
          <img src={Logo} alt="logo" />
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex w-full justify-center">
                <img
                  src={MenuIcon}
                  alt="manu"
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
              <Menu.Items className="absolute right-0 bg-Neutral000 z-10 mt-2 w-32 origin-top-right ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/aboutus"
                        className={`${
                          active ? 'bg-Green500 text-Green100' : 'text-gray-700'
                        }
                        block px-4 py-2 text-sm`}
                      >
                        About Us
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/guarantee"
                        className={`${
                          active ? 'bg-Green500 text-Green100' : 'text-gray-700'
                        }
                        block px-4 py-2 text-sm`}
                      >
                        Out team
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/contact"
                        className={`${
                          active ? 'bg-Green500 text-Green100' : 'text-gray-700'
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
        </div>
      </div>
    </div>
    <div className="sm:flex hidden justify-end pt-[20px] md:hidden lg:flex hidden justify-end pb-[20px] pr-[50px] text-[18px]">
      <div className="w-[760px] flex justify-between items-center font-Arial">
        <div>
          <Link to="/">Home</Link>
        </div>
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center items-center hover:bg-gray-50">
              Options
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
                        active ? 'bg-Green500 text-Green100' : 'text-gray-700'
                      }
                        block px-4 py-2 text-sm`}
                    >
                      About Us
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/guarantee"
                      className={`${
                        active ? 'bg-Green500 text-Green100' : 'text-gray-700'
                      }
                        block px-4 py-2 text-sm`}
                    >
                      Out team
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/contact"
                      className={`${
                        active ? 'bg-Green500 text-Green100' : 'text-gray-700'
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
        <div>
          <Link to="/available">Available rentals</Link>
        </div>
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center items-center hover:bg-gray-50">
              Owners
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
                        active ? 'bg-Green500 text-Green100' : 'text-gray-700'
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
                      to="/ourservices"
                      className={`${
                        active ? 'bg-Green500 text-Green100' : 'text-gray-700'
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
                        active ? 'bg-Green500 text-Green100' : 'text-gray-700'
                      }
                        block px-4 py-2 text-sm`}
                    >
                      Why us
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/testimonials"
                      className={`${
                        active ? 'bg-Green500 text-Green100' : 'text-gray-700'
                      }
                        block px-4 py-2 text-sm`}
                    >
                      Testimonials
                    </Link>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center items-center hover:bg-gray-50">
              Tenants
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
                      to="/available"
                      className={`${
                        active ? 'bg-Green500 text-Green100' : 'text-gray-700'
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
                      to="/tenantslogin"
                      className={`${
                        active ? 'bg-Green500 text-Green100' : 'text-gray-700'
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
                        active ? 'bg-Green500 text-Green100' : 'text-gray-700'
                      }
                        block px-4 py-2 text-sm`}
                    >
                      maintenance
                    </Link>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
        <div>
          <Link to="/agentReferral">Agent referral program</Link>
        </div>
        <div>
          <Link to="/help">Help</Link>
        </div>
      </div>
    </div>
  </div>
);

export default Hader;
