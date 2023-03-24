import React from 'react';
import LeftIcon from '../../../Assets/Images/LeftIcon.svg';
import User from '../../../Assets/Images/User.png';
import InstagramIcon from '../../../Assets/Images/InstagramIcon.svg';
import YoutubeIcon from '../../../Assets/Images/YoutubeIcon.svg';
import FacebookIcon from '../../../Assets/Images/FacebookIcon.svg';
import YesIcon from '../../../Assets/Images/YesIcon.svg';
import NoIcon from '../../../Assets/Images/NoIcon.svg';
import { Link } from 'react-router-dom';

const Promoted = [
  { id: 1, text: 'General Lease Terms' },
  { id: 2, text: 'Common Reasons to be Declined' },
  { id: 3, text: 'How to Apply' },
  { id: 4, text: 'Background Check Disclosure' },
  { id: 5, text: 'Application Policies and Disclosures' },
];

const Recently = [
  [
    {
      id: 1,
      text: 'Why did I receive a notice when I paid the rent on the 2nd of the month?',
    },
    { id: 2, text: 'Can I have a satellite dish?' },
    { id: 3, text: 'Why can I not clean the carpet myself?' },
  ],
  [
    { id: 4, text: 'How to Apply' },
    { id: 5, text: 'Application Policies and Disclosures' },
  ],
];

const GeneralLeaseDetail: React.FC = () => (
  <div className="md:pt-[30px] pb-[50px]">
    <div className="2xl:px-80 xl:px-60 lg:px-44 pl-[20px] pr-[20px]">
      <div className="md:flex justify-between lg:pt-[50px]">
        <div className="font-Arial md:flex md:block hidden">
          <span className="text-Green100  min-w-[100px]">Colby Gilbert</span>
          <img src={LeftIcon} alt="LeftIcon" className="w-[20px] h-[20px]" />
          <span className="text-Green100 min-w-[150px]">Long Term Tenants</span>
          <img src={LeftIcon} alt="LeftIcon" className="w-[20px] h-[20px]" />
          <span className="text-Green100  min-w-[200px]">
            Application Process
          </span>
        </div>

        <div className="lg:pl-[20px] md:pt-[0px] pt-[20px]">
          <form className="flex items-center">
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
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus-visible:outline-none focus:outline rounded-lg block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border dark:placeholder-gray-400 dark:text-white dark:focus:border"
                placeholder="Search"
                required
              />
            </div>
          </form>
        </div>
      </div>
      <div className="pt-[10px] xl:flex">
        <div className="hidden xl:block">
          <div className="font-Arial font-bold text-[24px] pt-[20px]">
            Articles in this section
          </div>
          <div className="pt-[20px]">
            {Promoted?.map(res => (
              <div className="pt-[10px]" key={res?.id}>
                <div className="w-auto xl:w-[270px] min-h-[44px] border-2 rounded-lg font-Arial bg-Neutral200 hover:bg-Green100 hover:text-Neutral000">
                  <button className="w-[auto] pl-[10px] pt-[10px] outline-none">{res.text}</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="xl:hidden">
          <div className="w-auto flex items-center justify-between xl:w-[270px] min-h-[44px] border-2 rounded-lg font-Arial bg-Green100 text-Neutral000">
            <button className="w-[auto] pl-[10px] outline-none">General Lease Terms</button>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-[20px]"
            >
              <path
                d="M19.6677 9.33802C19.5615 9.23091 19.4351 9.1459 19.2958 9.08788C19.1566 9.02987 19.0072 9 18.8564 9C18.7055 9 18.5562 9.02987 18.4169 9.08788C18.2776 9.1459 18.1513 9.23091 18.045 9.33802L12.8113 14.5717C12.7051 14.6788 12.5787 14.7638 12.4395 14.8218C12.3002 14.8799 12.1509 14.9097 12 14.9097C11.8491 14.9097 11.6998 14.8799 11.5605 14.8218C11.4213 14.7638 11.2949 14.6788 11.1887 14.5717L5.95497 9.33802C5.84874 9.23091 5.72235 9.1459 5.5831 9.08788C5.44385 9.02987 5.29449 9 5.14363 9C4.99278 9 4.84342 9.02987 4.70417 9.08788C4.56491 9.1459 4.43853 9.23091 4.3323 9.33802C4.11946 9.55212 4 9.84175 4 10.1436C4 10.4455 4.11946 10.7352 4.3323 10.9493L9.57742 16.1944C10.2202 16.8364 11.0915 17.197 12 17.197C12.9085 17.197 13.7798 16.8364 14.4226 16.1944L19.6677 10.9493C19.8805 10.7352 20 10.4455 20 10.1436C20 9.84175 19.8805 9.55212 19.6677 9.33802Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        <div className="xl:pl-[70px] w-[100%]">
          <div className="font-Leitura text-[36px] pt-[20px]">
            General Lease Terms
          </div>
          <div>
            <div className="font-Arial md:flex flex-row justify-between ">
              <div>
                <ul className="md:p-6 pt-6 divide-y divide-slate-200">
                  <li className="flex py-4 first:pt-0 last:pb-0">
                    <img className="h-10 w-10 rounded-full" src={User} alt="" />
                    <div className="ml-3 overflow-hidden">
                      <p className="text-sm font-[16px] text-Green100">
                        Colby Gilbert
                      </p>
                      <p className="text-sm text-Black400 truncate">
                        4 years ago
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="p-6 font-Arial text-center">
                <button className="w-[100%] md:w-[150px] h-[44px] text-Green100 border-2 border-Green100 rounded-lg outline-none">
                  Follow
                </button>
              </div>
            </div>
            <div className="font-Arial w-auto md:pl-[70px] pt-[20px]">
              <div>
                1. Unless otherwise stated in the listed, the lease term will be
                for one year.
              </div>
              <div className="pt-[10px]">
                2. The security deposit is equivalent to one monthsrent but may
                increase if the tenant has a pet.
              </div>
              <div className="pt-[10px]">
                3. Rent to be paid by the first of each month and considered
                late on the second; there is no grace period.
              </div>
              <div className="pt-[10px]">
                4. In order to help protect the tenant insurance, they must
                obtain a Renters insurance policy. Prior to receiving the keys,
                the tenant must provide proof of insurance. A landlord insurance
                policy will not cover the tenant belongings or against their
                personal liability.
              </div>
              <div className="pt-[10px]">
                5. We encourage you to contact your auto insurance provider in
                order to obtain renters insurance if you do not already have a
                policy in place.
              </div>
              <div className="pt-[10px]">
                6. All lease agreements include a standard clause that releases
                military personnel if they are redeployed during the term of the
                lease.
              </div>
              <div className="pt-[10px]">
                7. The Lease Rental Agreement requires a 45 day written notice
                to vacate to terminate the lease.
              </div>
              <div className="w-[112px] flex flex-row items-start gap-[20px] w-[50%] sm:w-[25%] pt-[20px]">
                <img src={FacebookIcon} alt="facebook" />
                <img src={InstagramIcon} alt="instagram" />
                <img src={YoutubeIcon} alt="youtube" />
              </div>
            </div>
          </div>
          <div className="lg:border-r-2 mt-[50px] border-b-2"></div>
          <div className="pt-[50px] font-Arial">
            <div className="text-center font-Arial font-bold">
              Was this article helpful?
            </div>
            <div className="flex justify-center pt-[20px]">
              <div className="font-Arial text-center ">
                <button className="w-[100px] md:w-[150px] outline-none h-[44px] text-Green100 border-2 border-Green100 rounded-lg flex justify-center items-center">
                  <img src={YesIcon} alt="YesIcon" />
                  <span className="pl-[10px]">Yes</span>
                </button>
              </div>
              <div className="font-Arial text-center pl-[10px]">
                <button className="w-[100px] md:w-[150px] outline-none h-[44px] text-Red600 border-2 border-Red600 rounded-lg flex justify-center items-center">
                  <img src={NoIcon} alt="NoIcon" />
                  <span className="pl-[10px]">No</span>
                </button>
              </div>
            </div>
            <div className="text-center pt-[20px]">
              Have more questions?{' '}
              <button className="text-Green100 outline-none">Submit a request</button>
            </div>
          </div>
          <div className="lg:border-r-2 mt-[50px] border-b-2"></div>
          <div className="font-Arial pt-[50px]">
            <div className="text-[24px] font-bold">
              Recently viewed articles
            </div>
            <div>
              <div className="xl:flex flex-wrap justify-between text-Green100">
                {Recently?.map((item, index) => (
                  <ul key={index}>
                    {item?.map(res => (
                      <div
                        className="2xl:w-[365px] xl:w-[300px] pt-[20px]"
                        key={res.id}
                      >
                        <Link to="" className="font-Arial text-[16px] outline-none">
                          {res.text}
                        </Link>
                      </div>
                    ))}
                  </ul>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:border-r-2 mt-[50px] border-b-2"></div>
          <div className="font-Arial pt-[50px]">
            <div className="text-[24px] font-bold">Related articles</div>
            <div>
              <div className="text-Green100">
                <div className="pt-[20px]">
                  <div>
                    <Link to="" className="font-Arial text-[16px] outline-none">
                      Hawaii PM’s Communication Policy
                    </Link>
                  </div>
                  <div className='pt-[10px]'>
                    <Link to="" className="font-Arial text-[16px] outline-none">
                      Common Reasons to be Declined
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:border-r-2 mt-[50px] border-b-2"></div>
          <div className="font-Arial pt-[50px]">
            <div className="text-[24px] font-bold">Comments</div>
            <div>
              <div className="text-Black400">
                <div className="pt-[20px]">
                  <div className="font-Arial text-[16px]">0 comments</div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:border-r-2 mt-[50px] border-b-2"></div>
          <div className="pt-[50px] font-Arial text-[16px]">
            Please <button className="text-Green100 outline-none">Sign In</button> to leave a
            comment.
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default GeneralLeaseDetail;
