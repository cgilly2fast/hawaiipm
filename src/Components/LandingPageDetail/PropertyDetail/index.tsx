import React from 'react';
import Background from "../../../Assets/Images/Background.png";

const PropertyDetail: React.FC = () => (
  <div>
    <div className='relative w-full h-[432px] xl:h-[486px] lg:h-[400px]' style={{ backgroundImage: `url(${Background})` }}>
      {/* <img src={Background} alt='background' className='w-[360px] h-[432px] 2xl:w-[100%] 2xl:h-[100%] xl:w-[100%] xl:h-[100%] lg:w-[100%] lg:h-[400px]'/> */}
      <div className='w-full lg:flex lg:flex-col text-center absolute left-[0px] 2xl:flex 2xl:top-[82px] 2xl:left-[600px] items-center rounded-lg items-start xl:flex xl:left-[440px] xl:top-[80px] lg:w-[570px] lg:h-[322px] lg:flex lg:bg-Neutral000 lg:top-[35px] lg:left-[230px]'>
        <div className='w-full font-Leitura text-[36px] text-Neutral000 justify-center lg:text-[24px] lg:text-Black100 lg:pt-[30px] flex'>
          <span className='max-w-[320px]'> Property Management</span>
        </div>
        <div className='pt-[20px] font-Arial'>
          <div>
            <input type="text" placeholder="   Address entry" className='w-[250px] md:w-[400px] lg:w-[510px] h-[44px] border-2 rounded-lg' />
          </div>
          <div className='pt-[20px]'>
            <input type="text" placeholder="   Email" className='w-[250px]  md:w-[400px] lg:w-[510px] h-[44px] border-2 rounded-lg' />
          </div>
          <div className='lg:flex pt-[20px]'>
            <div className='text-Neutral000 lg:text-Black100'>Qualified tenant in 30 days or we pay you.</div>
            <button className='text-Green100 underline'>
              Learn more
            </button>
          </div>
          <div className='pt-[20px]'>
            <button className='w-[250px]  md:w-[400px] lg:w-[510px] h-[44px] bg-Green100 text-Neutral000 rounded-lg'>Get Started</button>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div className='bg-Neutral100 h-[160px] font-Leitura flex justify-center'>
        <span className='md:max-w-[530px] max-w-[271px] md:pt-[30px] text-[36px] text-Green100 text-center'>
          Tenant in 30 days | Earn $5000 more
          Or We Pay you
        </span>
      </div>
    </div>
  </div>
);

export default PropertyDetail;