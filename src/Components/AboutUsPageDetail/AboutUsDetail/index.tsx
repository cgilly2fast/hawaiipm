import React from 'react';

const AboutUsDetail: React.FC = () => (
  <div className='pb-[50px]'>
    <div className='bg-Neutral100 h-[200px] font-Leitura flex'>
      <div className='text-[48px] lg:container  2xl:pl-80 xl:pl-60 lg:pl-40 flex flex-row items-center ml-[20px]'>
        About Us
      </div>
    </div>
    <div className='lg:container 2xl:pl-80 2xl:pr-0 xl:pl-60 lg:px-40 pt-[50px] pl-[20px] pr-[20px]'>
      <div className='font-Leitura text-[36px]'>
        Quality-Integrity-Experience
      </div>
      <div className='font-Arial pt-[50px] w-auto text-Black400'>
        <div>
          Hawaii PM is a locally owned full-service property management and real estate company based in Honolulu. A company with combined 50 years of experience.
        </div>
        <div className='pt-[30px]'>
          We specialize in managing single family homes, condos, townhomes and apartment buildings. We care for over 700 properties throughout Oahu.
          We have grown exponentially by referral of satisfied clients, realtors, vendors and tenants. Our success comes from following our guiding principles: Quality, Integrity and Experience.
        </div>
        <div className='pt-[30px]'>
          <span className='text-Black100 font-bold'>Quality...</span>We are committed to providing quality customer service that meet the highest standards of excellence to each and every client.
        </div>
        <div className='pt-[30px]'>
          <span className='text-Black100 font-bold'>Integrity...</span>We take pride in working with the highest standards, following strong moral principles and strictly adhering to all Fair Housing and Hawaii's Landlord-Tenant Code.
        </div>
        <div className='pt-[30px]'>
          <span className='text-Black100 font-bold'>Experience...</span>Founded by professional experienced real estate investor, resulting in superior understanding of maximizing the return on owner's investment while maintaining good tenant relations.
        </div>
        <div className='pt-[30px]'>
          We would welcome the opportunity to earn your trust and deliver you the best service in the industry.
        </div>
      </div>
    </div>
  </div >
);

export default AboutUsDetail;