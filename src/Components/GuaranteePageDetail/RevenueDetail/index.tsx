import React from 'react';
import Background2 from '../../../Assets/Images/Background2.png';

const RevenueDetail: React.FC = () => (
  <div>
    <div
      className="relative w-full h-[432px] xl:h-[570px] lg:h-[590px] md:h-[560px] h-[600px]"
      style={{ backgroundImage: `url(${Background2})` }}
    >
      <div className="w-auto top-[40px] left-[13px] right-[13px] flex flex-col text-center absolute 2xl:flex 2xl:top-[20px] 2xl:left-[1060px] items-center rounded-lg items-start xl:flex xl:left-[780px] xl:top-[20px] lg:w-[470px] lg:h-[524px] md:w-[370px] md::h-[524px] lg:flex bg-Neutral000 lg:top-[35px] lg:left-[400px] md:flex md:left-[340px] md:top-[20px]">
        <div className="font-Leitura justify-center text-Black100 ">
          <div className="text-[26px] pt-[20px] w-[auto] font-bold">
            Your Revenue, Our Guarantee
          </div>
          <div className="lg:w-[410px] text-[14px]">
            Be Confident in Your Vacation Rental Performance With Our Custom
            Revenue Guarantee.
          </div>
        </div>
        <div className="pt-[20px] font-Arial text-[14px]">
          <div className="p-[10px] h-[44px] mt-[20px] border-2 rounded-lg">
            <input
              placeholder="First Name *"
              className="w-[330px] md:w-[350px] lg:w-[410px] focus-visible:outline-none focus:outline"
            />
          </div>
          <div className="p-[10px] h-[44px] mt-[20px] border-2 rounded-lg">
            <input
              placeholder="Last Name *"
              className="w-[330px] md:w-[350px] lg:w-[410px] focus-visible:outline-none focus:outline"
            />
          </div>
          <div className="p-[10px] h-[44px] mt-[20px] border-2 rounded-lg">
            <input
              placeholder="Email *"
              className="w-[330px] md:w-[350px] lg:w-[410px] focus-visible:outline-none focus:outline"
            />
          </div>
          <div className="p-[10px] h-[44px] mt-[20px] border-2 rounded-lg">
            <input
              placeholder="Phone *"
              className="w-[330px] md:w-[350px] lg:w-[410px] focus-visible:outline-none focus:outline"
            />
          </div>
          <div className="p-[10px] h-[44px] mt-[20px] border-2 rounded-lg">
            <input
              placeholder="Number of Listing"
              className="w-[330px] md:w-[350px] lg:w-[410px] focus-visible:outline-none focus:outline"
            />
          </div>
          <div className="pt-[20px]">
            <button className="w-[330px] text-[16px] md:w-[350px] lg:w-[410px] h-[44px] bg-Green100 text-Neutral000 rounded-lg">
              Learn More
            </button>
          </div>
          <div className="pt-[10px] text-Black400">
            Or Call:{' '}
            <span className="text-Black100 font-bold">415-209-5847</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default RevenueDetail;
