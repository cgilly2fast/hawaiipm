import React from 'react';
import LeftIcon from "../../../Assets/Images/LeftIcon.svg";
import User from "../../../Assets/Images/User.png";
import InstagramIcon from "../../../Assets/Images/InstagramIcon.svg";
import YoutubeIcon from "../../../Assets/Images/YoutubeIcon.svg";
import FacebookIcon from "../../../Assets/Images/FacebookIcon.svg";

const Promoted = [
  { id: 1, text: 'General Lease Terms' },
  { id: 2, text: 'Common Reasons to be Declined' },
  { id: 3, text: 'How to Apply' },
  { id: 4, text: 'Background Check Disclosure' },
  { id: 5, text: 'Application Policies and Disclosures' }
];

const Recently = [
  { id: 1, text: 'Why did I receive a notice when I paid the rent on the 2nd of the month?' },
  { id: 2, text: 'Can I have a satellite dish?' },
  { id: 3, text: 'Why can I not clean the carpet myself?' },
  { id: 4, text: 'How to Apply' },
  { id: 5, text: 'Application Policies and Disclosures' }
];

const GeneralLeaseDetail: React.FC = () => (
  <div className='md:pt-[30px] pb-[50px]'>
    <div className='lg:container 2xl:pl-80 2xl:pr-0 xl:pl-60 md:pt-[50px] pl-[20px] pr-[20px]'>
      <div className='md:flex justify-between pt-[20px]'>
        <div className='font-Arial md:flex md:block hidden'>
          <span className='text-Green100  min-w-[100px]'>
            Colby Gilbert
          </span>
          <img src={LeftIcon} alt='LeftIcon' className='w-[20px] h-[20px]' />
          <span className='text-Green100 min-w-[150px]'>
            Long Term Tenants
          </span>
          <img src={LeftIcon} alt='LeftIcon' className='w-[20px] h-[20px]' />
          <span className='text-Green100  min-w-[150px]'>
            Application Process
          </span>
        </div>
        <div className='lg:pl-[20px]'>
          <form className="flex items-center">
            <label className="sr-only">Search</label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
              </div>
              <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
            </div>
          </form>
        </div>
      </div>
      <div className='pt-[10px] lg:flex'>
        <div>
          <div className='font-Arial font-bold text-[24px] pt-[20px]'>
            Articles in this section
          </div>
          <div className='pt-[20px]'>
            {Promoted?.map(res => (
              <div className='pt-[10px]'>
                <div className='w-auto lg:w-[270px] min-h-[44px] border-2 rounded-lg font-Arial bg-Neutral200 hover:bg-Green100 hover:text-Neutral000'>
                  <div className='w-[auto] pl-[10px] pt-[10px]'>{res.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='lg:pl-[70px] w-[100%]'>
          <div className='font-Arial font-bold text-[36px] pt-[20px]'>
            General Lease Terms
          </div>
          <div>
            <div className='font-Arial md:flex flex-row justify-between '>
              <div>
                <ul className="md:p-6 pt-6 divide-y divide-slate-200">
                  <li className="flex py-4 first:pt-0 last:pb-0">
                    <img className="h-10 w-10 rounded-full" src={User} alt="" />
                    <div className="ml-3 overflow-hidden">
                      <p className="text-sm font-[16px] text-Green100">Colby Gilbert</p>
                      <p className="text-sm text-Black400 truncate">4 years ago</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className='p-6 font-Arial text-center'>
                <button className='w-[300px] md:w-[150px] h-[44px] text-Green100 border-2 border-Green100 rounded-lg'>Follow</button>
              </div>
            </div>
            <div className='font-Arial w-auto md:pl-[70px] pt-[20px]'>
              <div>
                1. Unless otherwise stated in the listed, the lease term will be for one year.
              </div>
              <div className='pt-[10px]'>
                2. The security deposit is equivalent to one monthsrent but may increase if the tenant has a pet.
              </div>
              <div className='pt-[10px]'>
                3. Rent to be paid by the first of each month and considered late on the second; there is no grace period.
              </div>
              <div className='pt-[10px]'>
                4. In order to help protect the tenant insurance, they must obtain a Renters insurance policy. Prior to receiving the keys, the tenant must provide proof of insurance. A landlord insurance policy will not cover the tenant belongings or against their personal liability.
              </div>
              <div className='pt-[10px]'>
                5. We encourage you to contact your auto insurance provider in order to obtain renters insurance if you do not already have a policy in place.
              </div>
              <div className='pt-[10px]'>
                6. All lease agreements include a standard clause that releases military personnel if they are redeployed during the term of the lease.
              </div>
              <div className='pt-[10px]'>
                7. The Lease Rental Agreement requires a 45 day written notice to vacate to terminate the lease.
              </div>
              <div className='w-[112px] flex flex-row items-start gap-[20px] w-[50%] sm:w-[25%] pt-[20px]'>
                <img src={FacebookIcon} alt='facebook' />
                <img src={InstagramIcon} alt="instagram" />
                <img src={YoutubeIcon} alt='youtube' />
              </div>
            </div>
          </div>
          <div className='lg:border-r-2 mt-[50px] border-b-2'></div>
          <div className='pt-[50px] font-Arial'>
            <div className='text-center font-Arial font-bold'>
              Was this article helpful?
            </div>
            <div className='flex justify-center pt-[20px]'>
              <div className='font-Arial text-center '>
                <button className='w-[100px] md:w-[150px] h-[44px] text-Green100 border-2 border-Green100 rounded-lg'>Yes</button>
              </div>
              <div className='font-Arial text-center pl-[10px]'>
                <button className='w-[100px] md:w-[150px] h-[44px] text-Red600 border-2 border-Red600 rounded-lg'>No</button>
              </div>
            </div>
            <div className='text-center pt-[20px]'>
              Have more questions? <span className='text-Green100'>Submit a request</span>
            </div>
          </div>
          <div className='lg:border-r-2 mt-[50px] border-b-2'></div>
          <div className='font-Arial pt-[50px]'>
            <div className='text-[24px] font-bold'>
              Recently viewed articles
            </div>
            <div>
              <div className='2xl:flex flex-wrap text-Green100'>
                {Recently?.map(res => (
                  <div className='2xl:w-[365px] pt-[20px]' key={res.id}>
                    <div className='font-Arial text-[18px]'>{res.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className='lg:border-r-2 mt-[50px] border-b-2'></div>
          <div className='font-Arial pt-[50px]'>
            <div className='text-[24px] font-bold'>
              Related articles
            </div>
            <div>
              <div className='text-Green100'>
                <div className='pt-[20px]'>
                  <div className='font-Arial text-[18px]'>Hawaii PM’s Communication Policy</div>
                  <div className='font-Arial text-[18px] pt-[10px]'>Common Reasons to be Declined</div>
                </div>
              </div>
            </div>
          </div>
          <div className='lg:border-r-2 mt-[50px] border-b-2'></div>
          <div className='font-Arial pt-[50px]'>
            <div className='text-[24px] font-bold'>
              Comments
            </div>
            <div>
              <div className='text-Black400'>
                <div className='pt-[20px]'>
                  <div className='font-Arial text-[18px]'>0 comments</div>
                </div>
              </div>
            </div>
          </div>
          <div className='lg:border-r-2 mt-[50px] border-b-2'></div>
          <div className='pt-[50px] font-Arial'>
            Please <span className='text-Green100'>Sign In</span> to leave a comment.
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default GeneralLeaseDetail;