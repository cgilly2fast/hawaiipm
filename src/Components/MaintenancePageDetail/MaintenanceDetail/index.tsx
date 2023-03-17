import React from 'react';
import Maintenance from "../../../Assets/Images/Maintenance.png";

const MaintenanceDetail: React.FC = () => (
  <div className='pb-[50px]'>
    <div className='bg-Neutral100 h-[200px] font-Leitura flex'>
      <div className='text-[48px] lg:container  2xl:pl-80 xl:pl-60 lg:pl-40 flex flex-row items-center ml-[20px]'>
        Maintenance
      </div>
    </div>
    <div className='lg:container 2xl:pl-80 2xl:pr-0 xl:pr-0 xl:pl-40 pt-[50px] pl-[20px] pr-[20px]'>
      <img src={Maintenance} alt='Maintenance' className='w-[100%] pt-[50px]' />
      <div className='xl:flex flex-row'>
        <div className='xl:pr-[70px]'>
          <div className='font-Leitura text-[24px] font-bold pt-[50px]'>
            Repair and Maintenance of Your Home
          </div>
          <div className='text-Black400 font-Arial w-[auto]'>
            <div className='pt-[20px]'>
              For repair requests during business hours, call Tenant Services at <span className='text-Green100'>000.000.0000</span> or send the request to <span className='text-Green100'>colbygbemail@email.com.</span>
            </div>
            <div className='pt-[20px]'>
              For repair requests after hours or on weekends, contact your Property Manager or call <span className='text-Green100'>000-000-0000.</span>
            </div>
            <div className='pt-[20px]'>
              Before sending the request please read the Maintenance Request-Tips and Trouble Shooting Guide. Completing these steps can save you time and money!
            </div>
          </div>
        </div>
        <div>
          <div className='font-Arial text-[18px] font-bold pt-[50px]'>
            Maintenance Request-tips and Trouble Shooting Guide
          </div>
          <div className='pt-[50px]'>
            <div className='w-auto xl:w-[550px] h-auto border-2 rounded-lg font-Arial'>
              <details>
                <summary className='flex flex-row justify-between cursor-pointer'>
                  <div className='pt-[10px] pl-[10px]'>Information needed to help us expedite your request</div>
                  <div className='w-[54px] h-auto bg-Neutral300 rounded-r-lg text-center flex justify-center items-center'>+</div>
                </summary>
                <div className="mt-3 text-sm leading-6 pl-[10px]">
                  The mug is round. The jar is round. They should call it Roundtine.
                </div>
              </details>
            </div>
            <div className='pt-[20px]'>
              <div className='w-auto xl:w-[550px] h-auto border-2 rounded-lg font-Arial'>
                <details>
                  <summary className='flex flex-row justify-between cursor-pointer'>
                    <div className='pt-[10px] pl-[10px]'>Trouble Shooting Guide - Please read before sending us a request</div>
                    <div className='w-[54px] h-auto bg-Neutral300 rounded-r-lg text-center flex justify-center items-center'>+</div>
                  </summary>
                  <div className="mt-3 text-sm leading-6 pl-[10px]">
                    Lorem ipsum dolor sit amet consectetur. Purus elit urna laoreet aenean varius ullamcorper libero cras. Interdum cras sit augue massa. Vitae habitasse nisl pretium accumsan ipsum adipiscing sed. Nunc consequat dui at viverra pellentesque lorem amet proin.
                  </div>
                </details>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default MaintenanceDetail;