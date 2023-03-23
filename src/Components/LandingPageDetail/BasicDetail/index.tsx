import React from 'react';
import Owner from "../../../Assets/Images/Owner.png";
import DividerIcon from "../../../Assets/Images/DividerIcon.svg";

const BasicDetail: React.FC = () => (
  <>
    <div className='lg:flex flex-row justify-between 2xl:px-80 xl:px-60 lg:px-32 pl-[20px] pr-[20px]' >
      <div className='md:pt-[50px] pt-[20px]'>
        <div className='font-Leitura text-[20px] md:text-[24px]'>
          Why Hawaii Property Management?
        </div>
        <div className='md:w-[740px] xl:w-[500px] lg:w-[400px] font-Arial text-[16px] text-Black400 pt-[20px]'>
          <div>
            We guarantee your revenue. We find qualified tenants for long-term rentals in 30 days or less, or cover the rent until we do. Vacation rentals earn at least $5,000 in the first year with us or we'll make up the difference.
          </div>
          <div className='pt-[20px]'>
            Hawaii Property Management specializes in managing rentals for property owners, both long and short-term, handling all aspects of property management for you in the beautiful state of Hawaii.
          </div>
          <div className='pt-[20px]'>
            We are especially attentive to continually optimizing your listing on multiple listing platforms to ensure maximum visibility and revenue.
          </div>
          <div className='pt-[20px] font-bold'>
            Our promise is to protect your property, increase your rental income, and save you time.
          </div>
        </div>
      </div>
      <div className='text-center font-Leitura pt-[30px] lg:pt-[50px] lg:pl-[50px]'>
        <div className='md:pl-[90px] lg:pl-[0px]'>
          <img src={Owner} alt='Owner' className='xl:h-[300px] lg:h-[400px]'/>
        </div>
        <div className='pt-[20px]'>
          <div>Colby Gilbert</div>
          <div className='text-Black400'>Owner RS-XXXXXX</div>
        </div>
      </div>
    </div>
    <div className='pt-[30px] flex justify-center'>
      <img src={DividerIcon} alt='Divider' />
    </div>
    <div className='pt-[50px] 2xl:px-80 xl:px-60 lg:px-32 pl-[20px] pr-[20px]'>
      <div className='xl:flex flex-row justify-evenly bg-Neutral200 rounded-lg'>
        <div className='pt-[50px] xl:pb-[30px]'>
          <div className='flex justify-center'>
            <div className='font-Leitura max-w-[341px] text-center text-[24px]'>
              Results from two of my earliest
              short-term clients:
            </div>
          </div>
          <div className='pt-[20px] flex justify-center'>
            <img src={DividerIcon} alt='Divider' />
          </div>
          <div className='font-Arial text-Black400 xl:max-w-[404px] pl-[10px] pr-[10px]'>
            <div className='pt-[20px]'>
              <span className='text-Black100 font-bold'>Client A:</span> had a record year, <i className='underline font-bold'>earning $11,928 more than the previous year.</i> Their property was invited to Airbnb Plus, which on average, results in an additional 22% increase in income.
            </div>
            <div className='pt-[20px]'>
            <span className='text-Black100 font-bold'>Client B:</span> before working with me was making, on average, $2,148 per month. Now they are averaging $9,572 per month. <i className='underline font-bold'>They will see an $89,093 increase in yearly revenue.</i>
            </div>
          </div>
        </div>
        <div className='lg:border-r-2 mt-[50px] lg:mb-[50px] border-b-2'></div>
        <div className='xl:pt-[50px] pb-[30px]'>
          <div className='text-center font-Arial text-Black100 pl-[10px] pr-[10px]'>
            <div className='xl:max-w-[405px] pb-[20px] border-b-2'>
              “I highly recommend Colby as he takes care of property as if it were his own”
            </div>
            <div className='xl:w-[450px] md:w-[700px] pt-[20px] pb-[20px] border-b-2'>
              “He knows how to screen tenants well, and then maintain an on-going and respectful relationship with them after they sign a lease.”
            </div>
            <div className='xl:w-[450px] md:w-[700px] pt-[20px]'>
              “Colby is very hands on, has great ideas for amenities that will delight guests and his judgment on which guests he allows on to my property has always been prudent.”
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='pt-[50px] flex justify-center'>
      <img src={DividerIcon} alt='Divider' />
    </div>
  </>
);

export default BasicDetail;