import React from 'react';
import Background3 from '../../../Assets/Images/Background3.png';
import Question from '../../../Assets/Images/Question.svg';

const RentDetail: React.FC = () => (
  <div>
    <div
      className="relative w-full h-[432px] xl:h-[398px] lg:h-[400px]"
      style={{ backgroundImage: `url(${Background3})` }}
    >
      <div className="">
        <div className="font-Arial absolute 2xl:top-[128px] 2xl:left-[375px] xl:top-[128px] xl:left-[250px]">
          <div className="text-[30px] text-Neutral000">960 Kanakou PI</div>
          <div className="text-[16px] text-Neutral000 pt-[10px]">
            Honolulu, HI 96825
          </div>
          <div className="flex text-Neutral000 justify-between pt-[10px]">
            <div>5 bed</div>
            <div className="flex items-center justify-center">
              <div className="w-[4px] h-[4px] bg-Neutral000 rounded-full"></div>
            </div>
            <div>5 bath</div>
            <div className="flex items-center justify-center">
              <div className="w-[4px] h-[4px] bg-Neutral000 rounded-full"></div>
            </div>
            <div>3800 Sq Ft</div>
          </div>
          <div className="text-[16px] text-Blue100 underline pt-[10px]">
            Try another address
          </div>
        </div>
        <div className="w-[370px] h-[298px] bg-Neutral000 rounded-lg absolute 2xl:top-[50px] 2xl:left-[1080px] xl:top-[50px] xl:left-[830px] font-Arial">
          <div className="pl-[30px] pr-[30px] pt-[30px]">
            <div className="font-bold">Your Rent Extimate</div>
            <div className="flex pt-[20px]">
              <div className="font-bold text-[30px]">$3333</div>
              <div className="flex items-center pl-[10px]">
                <div className="text-[16px]">per month</div>
                <img src={Question} alt="Question" className="pl-[10px]" />
              </div>
            </div>
            <div className="text-[14px] pt-[10px]">
              Rent Estimate range: $20,000 - $20,000
            </div>
            <div className="pt-[20px]">
              <button className="w-[250px]  md:w-[400px] lg:w-[310px] h-[44px] bg-Green100 text-Neutral000 rounded-lg">
                List your home for rent
              </button>
            </div>
            <div className="text-[14px] pt-[10px]">
              Are you the owner? Claim your home to edit beds, baths, and square
              footage.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default RentDetail;
