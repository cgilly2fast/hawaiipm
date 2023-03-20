import React from 'react';
import Question from "../../../Assets/Images/Question.svg";
interface PropertyDetailProps {
  setOpen: any;
  open: any;
}

const PropertyRetBox: React.FC<PropertyDetailProps> = ({
  setOpen,
  open
}: PropertyDetailProps) => {
  // const PropertyRetBox: React.FC = () => (
  return (

    <div className='w-auto h-[380px] top-[25px] left-[13px] right-[13px] flex flex-col absolute 2xl:flex 2xl:top-[40px] 2xl:left-[1125px] rounded-lg items-start xl:flex xl:left-[780px] xl:top-[70px] lg:w-[420px] lg:h-[350px] md:w-[370px] md:h-[390px] lg:flex bg-Neutral000 lg:top-[25px] lg:left-[400px] md:flex md:left-[340px] md:top-[20px]'>
      <div className='pl-[30px] font-Arial'>
        <div className='text-[26px] font-bold pt-[30px]'>
          Property Management
        </div>
        <div className='lg:flex pt-[10px] text-[14px]'>
          <div>Qualified tenant in 30 days or we pay you.</div>
          <button className='text-Green100 underline'>
            Learn more
          </button>
        </div>
        <div className='text-[16px] pt-[20px]'>
          Find out what you could earn
        </div>
        <div>
          <input type="text" placeholder="   Address entry" className='w-[100%] md:w-[300px] lg:w-[340px] h-[44px] border-2 rounded-lg' />
        </div>
        <div className='text-[14px] pt-[20px] flex justify-around'>
          <div>
            Short Term Invest
          </div>
          <div>
            Short Term Invest
          </div>
        </div>
        
        <div className='flex pt-[10px]'>
          <div className='font-bold text-[30px]'>$3333</div>
          <div className='flex items-center pl-[10px]'>
            <div className='text-[16px]'>per month</div><img src={Question} alt='Question' className='pl-[]'/>
          </div>
        </div>
        <div className='pt-[10px]'>
          <button className='w-[100%] md:w-[300px] lg:w-[350px] h-[44px] bg-Green100 text-Neutral000 rounded-lg' onClick={() => { setOpen(open - 1) }}>Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default PropertyRetBox;