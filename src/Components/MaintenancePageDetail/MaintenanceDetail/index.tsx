import { Disclosure } from '@headlessui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import Maintenance from '../../../Assets/Images/Maintenance.png';
import { ChevronUpIcon } from '@heroicons/react/20/solid';

const Recent = [
  [
    {
      id: 1,
      text: 'Information needed to help us expedite your request',
      content:
        'The mug is round. The jar is round. They should call it Roundtine.',
    },
    {
      id: 2,
      text: 'Trouble Shooting Guide - Please read before sending us a request',
      content:
        'Lorem ipsum dolor sit amet consectetur. Pellentesque elementum sed viverra urna. Elit duis risus bibendum est nec. Leo commodo porttitor praesent rhoncus vitae purus. Sollicitudin vehicula pharetra tellus ipsum blandit. Mauris fusce adipiscing duis quam dignissim nullam id egestas.',
    },
  ],
];

const MaintenanceDetail: React.FC = () => (
  <div className="pb-[50px]">
    <div className="bg-Neutral100 h-[110px] lg:h-[200px] font-Leitura flex">
      <div className="text-[36px] lg:text-[48px] lg:container  2xl:pl-80 xl:pl-60 lg:pl-40 flex items-center ml-[20px]">
        Maintenance
      </div>
    </div>
    <div className="2xl:px-80 xl:px-[16rem] lg:px-48 pl-[20px] pr-[20px]">
      <img
        src={Maintenance}
        alt="Maintenance"
        className="w-[100%] h-[400px] pt-[50px]"
      />
      <div className="xl:flex flex-row">
        <div className="xl:pr-[50px]">
          <div className="font-Leitura text-[24px] pt-[50px]">
            Repair and Maintenance of Your Home
          </div>
          <div className="text-Black400 font-Arial w-[auto]">
            <div className="pt-[20px]">
              For repair requests during business hours, call Tenant Services at{' '}
              <Link to="" className="text-Green100 font-bold outline-none">
                000.000.0000
              </Link>{' '}
              or send the request to{' '}
              <Link to="" className="text-Green100 font-bold outline-none">
                colbygbemail@email.com.
              </Link>
            </div>
            <div className="pt-[20px]">
              For repair requests after hours or on weekends, contact your
              Property Manager or call{' '}
              <Link to="" className="text-Green100 font-bold outline-none">
                000-000-0000.
              </Link>
            </div>
            <div className="pt-[20px]">
              Before sending the request please read the Maintenance
              Request-Tips and Trouble Shooting Guide. Completing these steps
              can save you time and money!
            </div>
          </div>
        </div>
        <div>
          <div className="font-Arial text-[18px] font-bold pt-[50px]">
            Maintenance Request-tips and Trouble Shooting Guide
          </div>
          <div className="pt-[10px]">
            <div className="xl:flex flex-wrap justify-around">
              {Recent?.map(item => (
                <ul>
                  {item.map(res => (
                    <div className="pt-[20px]" key={res?.id}>
                      <div className="w-auto xl:w-[530px] h-auto border-[1px] rounded-lg font-Arial">
                        <Disclosure>
                          {({ open }) => (
                            <>
                              <Disclosure.Button className="font-Arial flex w-full justify-between rounded-lg px-4 py-2 text-left text-[16px] font-medium focus:outline-none">
                                <span
                                  className={`${
                                    open ? 'font-bold' : ''
                                  } w-[85%] pt-1`}
                                >
                                  {res?.text}
                                </span>
                                <ChevronUpIcon
                                  className={`${
                                    open ? 'rotate-180 transform' : ''
                                  } h-7 w-7`}
                                />
                              </Disclosure.Button>
                              <Disclosure.Panel className="px-4 pt-4 pb-2 text-[16px] text-Black100 leading-6">
                                {res?.content}
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      </div>
                    </div>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default MaintenanceDetail;
