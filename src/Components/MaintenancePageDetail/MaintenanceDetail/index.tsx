import { Disclosure } from '@headlessui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import Maintenance from '../../../Assets/Images/Maintenance.png';
import { ChevronUpIcon } from '@heroicons/react/20/solid';

const content = [
  {
    id: 1,
    text: 'Plumbing issue',
    content:
      'The mug is round. The jar is round. They should call it Roundtine.',
  },
  {
    id: 2,
    text: 'Trouble Shooting Guide - Please read before sending us a request',
    content:
      'Lorem ipsum dolor sit amet consectetur. Pellentesque elementum sed viverra urna. Elit duis risus bibendum est nec. Leo commodo porttitor praesent rhoncus vitae purus. Sollicitudin vehicula pharetra tellus ipsum blandit. Mauris fusce adipiscing duis quam dignissim nullam id egestas.',
  },
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
        className="max-w-[1170] h-auto pt-[50px] mx-auto"
      />

      <div>
        <div className="font-Leitura text-[24px] text-Red600 text-center font-bold pt-[50px]">
          Before you make a repair request, please read through the information
          below.
        </div>
        <div className="pt-[10px]">
          <div className="w-full  flex-wrap justify-around">
            <ul>
              <div className="pt-[20px]">
                <div className="w-auto max-w-[1920px]  h-auto border-[1px] rounded-lg font-Arial">
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="font-Arial flex w-full justify-between rounded-lg px-4 py-2 text-left text-[16px] font-medium focus:outline-none">
                          <span
                            className={`${
                              open ? 'font-bold' : ''
                            } w-[85%] pt-1`}
                          >
                            Plumbing Issues
                          </span>
                          <ChevronUpIcon
                            className={`${
                              open ? 'rotate-180 transform' : ''
                            } h-7 w-7`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className=" w-[90%] px-4 pt-4 pb-2 text-[16px] text-Black100 leading-6">
                          <span className="font-bold text-Black100">
                            Toilet Clogs
                          </span>
                          <br />
                          If your toilet clogs and won't flush, use a plunger to
                          push any clogs through the pipe. If the toilet still
                          won't flush, you may also want to lift the cover on
                          the tank to make certain the chain is still correctly
                          attached.
                          <br />
                          <br />
                          <span className="font-bold text-Black100">
                            Drain Problems
                          </span>
                          <br />
                          If your sink or bathtub isn't draining, you can use a
                          plunger on these drains, too. Many hardware stores
                          also sell drain cleaning products you can use to
                          dislodge anything stuck in the system.
                          <br />
                          <br />
                          Please be careful when using cleaning chemicals, as
                          corrosive liquids may damage the pipes.
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </div>
              </div>

              <div className="pt-[20px]">
                <div className="w-auto max-w-[1920px]  h-auto border-[1px] rounded-lg font-Arial">
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="font-Arial flex w-full justify-between rounded-lg px-4 py-2 text-left text-[16px] font-medium focus:outline-none">
                          <span
                            className={`${
                              open ? 'font-bold' : ''
                            } w-[85%] pt-1`}
                          >
                            Electrical Outages
                          </span>
                          <ChevronUpIcon
                            className={`${
                              open ? 'rotate-180 transform' : ''
                            } h-7 w-7`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className=" w-[90%] px-4 pt-4 pb-2 text-[16px] text-Black100 leading-6">
                          <span className="font-bold text-Black100">
                            Outlets Not Working
                          </span>
                          <br />
                          Rule out equipment failure by trying to power the
                          equipment from another outlet. If you suspect that the
                          outlet is the problem, reset the breaker to see if
                          this resolves the issue. You may need to reset the
                          GFCI.
                          <br />
                          <br />
                          <span className="font-bold text-Black100">
                            Part of the property is without power
                          </span>
                          <br />
                          If your part of your property is the only one without
                          power, it is likely caused by a breaker that has been
                          tripped. Locate the breaker box and reset the breaker
                          to see if the power is restored.
                          <br />
                          <br />
                          <span className="font-bold text-Black100">
                            Entire property is without power
                          </span>
                          <br />
                          If the entire property is out call your utility
                          company to determine the cause of the issue. Most
                          outages are the result of temporary grid problems.
                          There could also be a problem with your account that
                          needs to be addressed to restore access.
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </div>
              </div>

              <div className="pt-[20px]">
                <div className="w-auto max-w-[1920px]  h-auto border-[1px] rounded-lg font-Arial">
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="font-Arial flex w-full justify-between rounded-lg px-4 py-2 text-left text-[16px] font-medium focus:outline-none">
                          <span
                            className={`${
                              open ? 'font-bold' : ''
                            } w-[85%] pt-1`}
                          >
                            No Hot Water
                          </span>
                          <ChevronUpIcon
                            className={`${
                              open ? 'rotate-180 transform' : ''
                            } h-7 w-7`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className=" w-[90%] px-4 pt-4 pb-2 text-[16px] text-Black100 leading-6">
                          If your hot water heater isn't producing enough (or
                          any) hot water, check the settings on the tank. Some
                          tanks have a vacation mode that limits the amount of
                          water available. If you have a gas water heater, you
                          should also check that the pilot is still lit.
                          <br />
                          <br />
                          If you make any changes to the settings, wait at least
                          fifteen to twenty minutes before testing the water
                          temperature again.
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </div>
              </div>

              <div className="pt-[20px]">
                <div className="w-auto max-w-[1920px]  h-auto border-[1px] rounded-lg font-Arial">
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="font-Arial flex w-full justify-between rounded-lg px-4 py-2 text-left text-[16px] font-medium focus:outline-none">
                          <span
                            className={`${
                              open ? 'font-bold' : ''
                            } w-[85%] pt-1`}
                          >
                            The air conditioning is not functioning
                          </span>
                          <ChevronUpIcon
                            className={`${
                              open ? 'rotate-180 transform' : ''
                            } h-7 w-7`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className=" w-[90%] px-4 pt-4 pb-2 text-[16px] text-Black100 leading-6">
                          Depending on the type of AC system in your rental,
                          there may be a variety of issues. For window units and
                          standalone units, check to ensure the outlet is
                          working, by plugging another device like a light or
                          phone charger. If the outlet is dead, you may need to
                          check the circuit breaker. For Larger systems, like
                          split or central air, it could be a larger issue. In
                          that case, submit a request.
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </div>
              </div>

              <div className="pt-[20px]">
                <div className="w-auto max-w-[1920px]  h-auto border-[1px] rounded-lg font-Arial">
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="font-Arial flex w-full justify-between rounded-lg px-4 py-2 text-left text-[16px] font-medium focus:outline-none">
                          <span
                            className={`${
                              open ? 'font-bold' : ''
                            } w-[85%] pt-1`}
                          >
                            <span className="font-bold">
                              My maintenance issue is an emergency!
                            </span>
                          </span>
                          <ChevronUpIcon
                            className={`${
                              open ? 'rotate-180 transform' : ''
                            } h-7 w-7`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className=" w-[90%] px-4 pt-4 pb-2 text-[16px] text-Black100 leading-6">
                          In a dangerous situation where you feel personally
                          threatened, call 911 for help. For maintenance
                          emergencies, call our office.
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </div>
              </div>

              <div className="pt-[20px]">
                <div className="w-auto max-w-[1920px]  h-auto border-[1px] rounded-lg font-Arial">
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="font-Arial flex w-full justify-between rounded-lg px-4 py-2 text-left text-[16px] font-medium focus:outline-none">
                          <span
                            className={`${
                              open ? 'font-bold' : ''
                            } w-[85%] pt-1`}
                          >
                            The issue is not listed here...
                          </span>
                          <ChevronUpIcon
                            className={`${
                              open ? 'rotate-180 transform' : ''
                            } h-7 w-7`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className=" w-[90%] px-4 pt-4 pb-2 text-[16px] text-Black100 leading-6">
                          <div>
                            Other common issues include:
                            <ul>
                              <li>
                                Lights not working - replace the lightbulb and
                                check and reset the power breaker
                              </li>
                              <li>
                                Beeping smoke detector - replace the batteries
                                and reset the system
                              </li>
                              <li>
                                Sink or dishwasher will not drain - check for a
                                blockage or use an unblocking solution
                              </li>
                              <li>
                                Refrigerator is not working - check the
                                temperature to see if it is too high/too low,
                                check the grill and drain hole
                              </li>
                            </ul>
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div className="xl:pr-[50px]">
        <div className="font-Leitura text-[24px] text-Black500 text-center font-bold pt-[50px]">
          Still having trouble? Make a maintenance request below.
        </div>
        <div className="pt-[20px] flex justify-center font-Arial">
          <button className="w-[100%] text-[16px] md:w-[180px] lg:w-[250px] h-[44px] bg-Green100 text-Neutral000 rounded-lg outline-none">
            Tenant Login
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default MaintenanceDetail;
