import React from 'react';
import DividerIcon from "../../../Assets/Images/DividerIcon.svg";
import ShieldLockIcon from "../../../Assets/Images/ShieldLockIcon.svg";
import VerifiedIcon from "../../../Assets/Images/VerifiedIcon.svg";
import ClockIcon from "../../../Assets/Images/ClockIcon.svg";
import PathIcon from "../../../Assets/Images/PathIcon.svg";
import MaskGroup from "../../../Assets/Images/MaskGroup.png";

const Plan = [
  { id: 1, text: 'Receive your action plan', content: 'Set up a meeting with a Homeowner Advisor to receive a detailed action plan to take your property to the next level.' },
  { id: 2, text: 'We prepare your property', content: 'We put the plan into motion and your property gets upgraded and integrated into our management system.' },
  { id: 3, text: 'Welcome your guest or tenant', content: 'Once your property is live, qualified renters are selected and Homeowner payouts begin.' },
];

const Plandata = [
  { id: 1, pictures: ShieldLockIcon, text: 'We protect homeowners', content: 'We do frequent inspections with checklists, install smart locks for vacation rentals, and keep you informed of the properties performance and status.' },
  { id: 2, pictures: VerifiedIcon, text: 'Renters are verified', content: 'Hawaii PM only allows kind, laid back renters that can pass ID screening, credit check, and have verified income to stay in your home. This catches bad actors before they can even make a booking or sign a lease.' },
  { id: 3, pictures: ClockIcon, text: 'Save you time', content: 'At Hawaii Property Management, we takes care of all the day-to-day tasks of managing your property, allowing you to sit back and relax while we handle everything making your investment become truly passive.' },
];

const PlanDetail: React.FC = () => (
  <div className='lg:container 2xl:pl-80 xl:pl-60 lg:pl-30 pl-[20px] pr-[20px]'>
    <div className='font-Leitura text-[24px] md:text-[36px] text-center pt-[70px]'>
      Earn more in 3 Steps
    </div>
    <div className='lg:flex flex-row justify-between pt-[50px]'>
      {Plan?.map(res => (
        <div key={res.id}>
          <div className='text-[36px] font-Leitura pt-[10px]'>
            {res.id}.
          </div>
          <div className='font-Arial font-bold pt-[20px] text-[20px]'>
            {res.text}
          </div>
          <div className='font-Arial lg:w-[320px] text-Black100 pt-[20px] text-[16px]'>
            {res.content}
          </div>
        </div>
      ))}
    </div>
    <div className='pt-[50px] font-Arial text-center'>
      <button className='w-[250px] lg:w-[250px] h-[44px] text-Green100 border-2 border-Green100 rounded-lg text-[16px]'>Learn how to get started</button>
    </div>
    <div className='pt-[50px] flex justify-center'>
      <img src={DividerIcon} alt='Divider' />
    </div>
    <div className='lg:flex flex-row justify-between pt-[50px]'>
      {Plandata?.map(res => (
        <div key={res.id}>
          <div className='text-[36px] font-Leitura font-semibold pt-[10px]'>
            <img src={res?.pictures} alt={`${res?.id}`} />
          </div>
          <div className='font-Arial font-semibold pt-[20px] text-[20px]'>
            {res.text}
          </div>
          <div className='font-Arial lg:w-[300px] text-Black100 pt-[20px] text-[16px]'>
            {res.content}
          </div>
        </div>
      ))}
    </div>
    <div className='pt-[50px] flex justify-center'>
      <img src={DividerIcon} alt='Divider' />
    </div>
    <div className='font-Leitura md:text-[36px] text-[24px] text-center pt-[70px]'>
      Homeowner Stories
    </div>
    <div className='md:flex flex-row justify-between  pt-[50px]'>
      <div>
        <img src={MaskGroup} alt='Owner' />
      </div>
      <div className='lg:pt-[100px] pt-[20px] 2xl:pl-[0px] md:pl-[40px]'>
        <img src={PathIcon} alt='Owner' />
        <div className='md:w-[450px] font-Leitura pt-[20px] md:text-[24px] text-[20px] text-Black400'>
          When we had a glitch or trouble, Colby was quick to step up with solutions and to improve/rectify the issue.
        </div>
        <div className='font-Arial pt-[30px] text-[16px] text-Black400'>
          Kathleen, Stinson Beach, CA
        </div>
        <div className='pt-[30px] font-Arial'>
          <button className='w-[100%] text-[16px] md:w-[200px] lg:w-[250px] h-[44px] text-Green100 border-2 border-Green100 rounded-lg'>Learn their story</button>
        </div>
      </div>
    </div>
    <div className='pt-[50px] flex justify-center'>
      <img src={DividerIcon} alt='Divider' />
    </div>
  </div>
);

export default PlanDetail;