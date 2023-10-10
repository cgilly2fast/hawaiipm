import React from 'react';
import Question from '../../../Assets/Images/Question.svg';
interface PropertyDetailProps {
  setOpen: any;
  open: any;
}

const PropertyRetBox: React.FC<PropertyDetailProps> = ({
  setOpen,
  open,
}: PropertyDetailProps) => {
  return (
    <div className="w-auto h-[380px] top-[25px] left-[13px] right-[13px] bg-Neutral000  rounded-lg">
      <div className="md:pl-[30px] pl-[20px] font-Arial">
        <div className="text-[26px] font-bold font-Leitura pt-[30px]">
          Property Management
        </div>
        <div className="lg:flex pt-[10px] text-[14px]">
          <div>Qualified tenant in 30 days or we pay you.</div>
          <button className="text-Green100 underline">Learn more</button>
        </div>
        <div className="text-[16px] pt-[10px]">
          Find out what you could earn
        </div>
        <div className="p-[10px] h-[44px] mt-[10px] border-2 rounded-lg">
          <input
            placeholder="Address entry"
            className="w-[100%] md:w-[300px] lg:w-[340px] focus-visible:outline-none focus:outline"
          />
        </div>
        <div className="text-[14px] pt-[20px] flex justify-start">
          <div>
            <input
              id="draft"
              className="peer/draft accent-Green100 cursor-pointer"
              type="radio"
              name="status"
              checked
            />
            <label className="peer-checked/draft:text-Green100 pl-[5px]">
              Short Term Invest
            </label>
          </div>
          <div className="pl-[50px]">
            <input
              id="published"
              className="peer/published accent-Green100 cursor-pointer"
              type="radio"
              name="status"
            />
            <label className="peer-checked/published:text-Green100 pl-[5px]">
              Long Term Invest
            </label>
          </div>
        </div>

        <div className="flex pt-[10px]">
          <div className="font-bold text-[30px]">$3333</div>
          <div className="flex items-center pl-[10px]">
            <div className="text-[16px]">per month</div>
            <img src={Question} alt="Question" className="pl-[5px]" />
          </div>
        </div>
        <div className="pt-[10px]">
          <button
            className="w-[100%] md:w-[300px] lg:w-[350px] h-[44px] bg-Green100 text-Neutral000 rounded-lg"
            onClick={() => {
              setOpen(open - 1);
            }}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyRetBox;
