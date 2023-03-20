import React from 'react';
import Maintenance from "../../../Assets/Images/Maintenance.png";

const Recent = [
  [{ id: 1, text: "Am I a good fit for Hawaii Property Management?", content: "The mug is round. The jar is round. They should call it Roundtine." },
  { id: 2, text: "Do you ever have issues with guests damaging the property?", content: "The mug is round. The jar is round. They should call it Roundtine." },
  { id: 3, text: "Can I cancel at any time?", content: "The best way to answer this is to give you a detailed 12-month revenue projection. Give us a call, and we collect the info we need to create an accurate forecast and get back to you in 24hrs." },
  { id: 4, text: "Can I stay at my own place?", content: "The best way to answer this is to give you a detailed 12-month revenue projection. Give us a call, and we collect the info we need to create an accurate forecast and get back to you in 24hrs." }],
];

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
          <div className='pt-[20px]'>
            <div className='flex flex-wrap justify-around'>
              {Recent?.map(item => (
                <ul>
                  {item.map(res => (
                    <div className='pt-[20px]' key={res?.id}>
                      <div className='w-[350px] xl:w-[550px] lg:w-[400px] md:w-[350px] h-auto border-2 rounded-lg font-Arial'>
                        <details>
                          <summary className='flex flex-row justify-between cursor-pointer'>
                            <div className='p-[10px]'>{res?.text}</div>
                            <span className='rounded-r'></span>
                          </summary>
                          <div className="mt-3 text-sm leading-6 pl-[10px]">
                            {res?.content}
                          </div>
                        </details>
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