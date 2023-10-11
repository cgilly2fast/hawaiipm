import React from 'react';
import Background2 from '../../../Assets/Images/Background2.png';

const RevenueDetail: React.FC = () => (
  <div>
    <div
      className="relative w-full h-[432px] xl:h-[570px] lg:h-[590px] md:h-[560px] h-[600px]"
      style={{ backgroundImage: `url(${Background2})` }}
    >
      <div className="w-auto top-[30px] left-[13px] right-[13px] flex flex-col text-center absolute 2xl:flex 2xl:top-[40px] 2xl:left-[1040px] items-center rounded-lg items-start xl:flex xl:left-[730px] xl:top-[35px] lg:w-[470px] md:w-[370px] lg:flex bg-Neutral000 lg:top-[45px] lg:left-[400px] md:flex md:left-[340px] md:top-[30px]">
        <div className="font-Leitura justify-center">
          <div className="flex justify-center">
            <div className="lg:w-auto max-w-[80%] md:max-w-[100%] font-Leitura text-[24px] lg:text-[26px] lg:text-Black100 lg:pt-[10px] text-center">
              <span className="font-normal leading-[32px]">
                Your Revenue, Our Guarantee
              </span>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="max-w-[80%]  font-Arial lg:w-[410px] text-[14px] text-Black400">
              Be Confident in Your Vacation Rental Performance With Our Custom
              Revenue Guarantee.
            </div>
          </div>
        </div>
        <div className="w-[100%] px-[30px] pt-[10px] font-Arial text-[14px]">
          <div className="w-[100%] lg:w-[410px] p-[10px] h-[44px] border-2 rounded-lg">
            <input
              placeholder="First Name *"
              className="w-[100%] focus-visible:outline-none focus:outline"
            />
          </div>
          <div className="w-[100%]  lg:w-[410px] p-[10px] h-[44px] mt-[20px] border-2 rounded-lg">
            <input
              placeholder="Last Name *"
              className="w-[100%] focus-visible:outline-none focus:outline"
            />
          </div>
          <div className="w-[100%]  lg:w-[410px] p-[10px] h-[44px] mt-[20px] border-2 rounded-lg">
            <input
              placeholder="Email *"
              className="w-[100%] focus-visible:outline-none focus:outline"
            />
          </div>
          <div className="w-[100%]  lg:w-[410px] p-[10px] h-[44px] mt-[20px] border-2 rounded-lg">
            <input
              placeholder="Phone *"
              className="w-[100%] focus-visible:outline-none focus:outline"
            />
          </div>
          <div className="w-[100%]  lg:w-[410px] p-[10px] h-[44px] mt-[20px] border-2 rounded-lg">
            <input
              placeholder="Number of units"
              className="w-[100%] focus-visible:outline-none focus:outline"
            />
          </div>
          <div className="pt-[20px]">
            <button className="w-[100%] text-[16px]  lg:w-[410px] h-[44px] bg-Green100 text-Neutral000 rounded-lg outline-none">
              Get Started
            </button>
          </div>
          <div className="pt-[10px] pb-[10px] w-[100%] text-Black400 text-[16px]">
            Or Call:{' '}
            <span className="text-Black100 font-bold">415-209-5847</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default RevenueDetail;
