import React from 'react';
import Location from '../../../Assets/Images/Location.png';
import Homes2 from '../../../Assets/Images/Homes2.png';
import DividerIcon from '../../../Assets/Images/DividerIcon.svg';
import Homes from '../../../Assets/Images/Homes.png';
import Condos from '../../../Assets/Images/Condos.png';
import Townhomes from '../../../Assets/Images/Townhomes.png';
import Apartment from '../../../Assets/Images/Apartment.png';
import { Link } from 'react-router-dom';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';

const Plan = [
  { id: 1, pictures: Homes, text: 'Single Family Homes' },
  { id: 2, pictures: Condos, text: 'Condos' },
  { id: 3, pictures: Townhomes, text: 'Townhomes' },
  { id: 4, pictures: Apartment, text: 'Apartment Buildings' },
];

const Recent = [
  [
    {
      id: 1,
      text: 'Agreement & Leasing',
      content:
        'The mug is round. The jar is round. They should call it Roundtine.',
    },
    {
      id: 2,
      text: 'Marketing',
      content:
        'The mug is round. The jar is round. They should call it Roundtine.',
    },
    {
      id: 3,
      text: 'Showings, Screening & Selecting Tenants',
      content:
        'The mug is round. The jar is round. They should call it Roundtine.',
    },
    {
      id: 4,
      text: 'Managing',
      content:
        'The mug is round. The jar is round. They should call it Roundtine.',
    },
    {
      id: 5,
      text: 'Financial & Reporting',
      content:
        'Lorem ipsum dolor sit amet consectetur. Pellentesque elementum sed viverra urna. Elit duis risus bibendum est nec. Leo commodo porttitor praesent rhoncus vitae purus. Sollicitudin vehicula pharetra tellus ipsum blandit. Mauris fusce adipiscing duis quam dignissim nullam id egestas.',
    },
  ],
];

const Recent2 = [
  [
    {
      id: 1,
      text: 'Interior Check-list',
      content:
        'The mug is round. The jar is round. They should call it Roundtine.',
    },
    {
      id: 2,
      text: 'Exterior Check-list (single family homes and townhomes)',
      content:
        'Lorem ipsum dolor sit amet consectetur. Purus elit urna laoreet aenean varius ullamcorper libero cras. Interdum cras sit augue massa. Vitae habitasse nisl pretium accumsan ipsum adipiscing sed. Nunc consequat dui at viverra pellentesque lorem amet proin.',
    },
  ],
];

const OurServicesDetail: React.FC = () => (
  <div className="pb-[50px]">
    <div className="bg-Neutral100 h-[110px] lg:h-[200px] font-Leitura flex">
      <div className=" text-[36px] lg:text-[48px] lg:container  2xl:pl-80 xl:pl-60 lg:pl-40 flex flex-row items-center ml-[20px]">
        Our Services
      </div>
    </div>
    <div className="2xl:px-80 xl:px-[16rem] lg:px-48 pt-[50px] pl-[20px] pr-[20px]">
      <img src={Location} alt="Location" className="w-[100%] h-[400px]" />
      <div className="xl:flex flex-row">
        <div className="xl:pr-[50px]">
          <div className="font-Leitura text-[24px] pt-[50px]">
            Full-Service Property Management
          </div>
          <div className="text-Black400 tex-[16px] font-Arial w-[auto]">
            <div className="pt-[20px]">
              Et qui eius admodum argumentum, te dicta perpetua est. Sea clita
              splendide et, splendide complectitur usu ne. Has lorem eloquentiam
              no, nam volutpat accusamus eu, te vel facilisis adipiscing. Ne
              laudem deseruisse mei, pro meis delectus argumentum eu. Ad est
              nullam iisque, ei vel civibus urbanitas, ea usu ullum luptatum
              invidunt.
            </div>
            <div className="pt-[20px]">
              For immediate answers to any questions you might have regarding
              the management of your property please contact{' '}
              <Link to="" className="text-Green100 font-bold outline-none">
                colbygbemail@email.com
              </Link>{' '}
              or{' '}
              <Link to="" className="text-Green100 font-bold outline-none">
                000-000-0000.
              </Link>
            </div>
          </div>
        </div>
        <div className="xl:pl-[20px]">
          <div className="font-Arial text-[18px] font-bold pt-[50px]">
            Services for Property Management
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
      <div className="pt-[50px] flex justify-center">
        <img src={DividerIcon} alt="Divider" />
      </div>
      <img src={Homes2} alt="Homes2" className="w-[100%] h-[350px] pt-[50px]" />
      <div className="xl:flex flex-row">
        <div className="xl:pr-[50px]">
          <div className="font-Leitura text-[24px] pt-[50px]">
            Vacant Home Management
          </div>
          <div className="text-Black400 font-Arial w-[auto]">
            <div className="pt-[20px]">
              Et qui eius admodum argumentum, te dicta perpetua est. Sea clita
              splendide et, splendide complectitur usu ne. Has lorem eloquentiam
              no, nam volutpat accusamus eu, te vel facilisis adipiscing. Ne
              laudem deseruisse mei, pro meis delectus argumentum eu. Ad est
              nullam iisque, ei vel civibus urbanitas, ea usu ullum luptatum
              invidunt.
            </div>
            <div className="pt-[20px]">
              For immediate answers to any questions you might have regarding
              the management of your property please contact{' '}
              <Link to="" className="text-Green100 font-bold outline-none">
                colbygbemail@email.com
              </Link>{' '}
              or{' '}
              <Link to="" className="text-Green100 font-bold outline-none">
                000-000-0000.
              </Link>
            </div>
          </div>
        </div>
        <div className="xl:pl-[20px]">
          <div className="font-Arial text-[18px] font-bold pt-[50px]">
            Services for Property Management
          </div>
          <div className="pt-[10px]">
            <div className="xl:flex flex-wrap justify-around">
              {Recent2?.map(item => (
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
      <div className="pt-[50px] flex justify-center">
        <img src={DividerIcon} alt="Divider" />
      </div>
      <div className="md:flex flex-wrap justify-between pt-[50px]">
        {Plan?.map(res => (
          <div
            key={res.id}
            className="pt-[20px] 2xl:max-w-[270px] xl:max-w-[220px] lg:max-w-[200px] md:max-w-[230px]"
          >
            <img src={res?.pictures} alt={`${res?.id}`} className="w-[100%]" />
            <div className="border-x-2 border-b-2 py-[20px] rounded-b-lg text-center font-Arial">
              {res.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default OurServicesDetail;
