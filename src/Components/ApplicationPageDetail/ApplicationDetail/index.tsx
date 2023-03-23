import React from 'react';
import LeftIcon from '../../../Assets/Images/LeftIcon.svg';
import StareIcon from '../../../Assets/Images/StareIcon.svg';
import FileIcon from '../../../Assets/Images/FileIcon.svg';

const Promoted = [
  {
    id: 1,
    picture: FileIcon,
    pictures: StareIcon,
    text: 'General Lease Terms',
  },
  {
    id: 2,
    picture: FileIcon,
    pictures: StareIcon,
    text: 'Common Reasons to be Declined',
  },
  { id: 3, picture: FileIcon, pictures: StareIcon, text: 'How to Apply' },
  { id: 4, picture: FileIcon, text: 'Background Check Disclosure' },
  { id: 5, picture: FileIcon, text: 'Application Policies and Disclosures' },
];

const ApplicationDetail: React.FC = () => (
  <div className="md:pt-[30px] pb-[50px]">
    <div className="2xl:px-80 xl:px-60 lg:px-36 md:pt-[50px] md:pb-[200px] pl-[20px] pr-[20px]">
      <div className="md:flex justify-between pt-[20px]">
        <div className="font-Arial md:flex md:block hidden">
          <span className="text-Green100  min-w-[100px]">Colby Gilbert</span>
          <img src={LeftIcon} alt="LeftIcon" className="w-[20px] h-[20px]" />
          <span className="text-Green100 min-w-[150px]">Long Term Tenants</span>
          <img src={LeftIcon} alt="LeftIcon" className="w-[20px] h-[20px]" />
          <span className="text-Green100  min-w-[150px]">
            Application Process
          </span>
        </div>
        <div className="lg:pl-[20px]">
          <form className="flex items-center w-auto xl:w-[300px]">
            <label className="sr-only">Search</label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search"
                required
              />
            </div>
          </form>
        </div>
      </div>
      <div className="md:flex">
        <div className="md:pt-[20px] pt-[20px]">
          <div className="font-Leitura text-[36px]">
            Application Process
          </div>
          <div className="md:flex flex-wrap">
            {Promoted?.map(res => (
              <div
                className="flex md:min-w-[370px] pt-[20px] items-center"
                key={res.id}
              >
                {res?.picture ? (
                  <img src={res?.picture} alt={`${res?.id}`} />
                ) : null}
                {res?.pictures ? (
                  <img src={res?.pictures} alt={`${res?.id}`} />
                ) : null}
                <div className="font-Arial text-[18px] pl-[10px]">
                  {res.text}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="pt-[50px] font-Arial text-center">
            <button className="w-[100%] md:w-[250px] h-[44px] text-Green100 border-2 border-Green100 rounded-lg">
              Follow
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ApplicationDetail;
