import React from 'react';
import Background from "../../../Assets/Images/Background.png";
import Application from "../../../Assets/Images/Application.svg";
import FaqIcon from "../../../Assets/Images/FaqIcon.svg";
import BookIcon from "../../../Assets/Images/BookIcon.svg";
import ChecklistIcon from "../../../Assets/Images/ChecklistIcon.svg";
import RepairIcon from "../../../Assets/Images/RepairIcon.svg";
import TaxIcon from "../../../Assets/Images/TaxIcon.svg";
import DividerIcon from "../../../Assets/Images/DividerIcon.svg";
import StareIcon from "../../../Assets/Images/StareIcon.svg";

const Plan = [
  { id: 1, pictures: Application, text: 'Application Process', mas: '5 Articles' },
  { id: 2, pictures: FaqIcon, text: 'FAQ', mas: '4 Articles' },
  { id: 3, pictures: BookIcon, text: 'Tenant Manual', mas: '35 Articles' },
  { id: 4, pictures: ChecklistIcon, text: 'Moving Checklist', mas: '3 Articles' },
  { id: 4, pictures: RepairIcon, text: 'Repair Request', mas: '4 Articles' },
];

const Plans = [
  { id: 1, pictures: FaqIcon, text: 'FAQ', mas: '29 Articles' },
  { id: 2, pictures: BookIcon, text: 'Owner Manual', mas: '25 Articles' },
  { id: 3, pictures: TaxIcon, text: 'Tax Information', mas: '47 Articles' },
];

const Promoted = [
  { id: 1, pictures: StareIcon, text: 'General Lease Terms' },
  { id: 2, pictures: StareIcon, text: 'Common Reasons to be Declined' },
  { id: 3, pictures: StareIcon, text: 'How to Apply' },
  { id: 3, pictures: StareIcon, text: 'Why can I not clean the carpet myself?' },
  { id: 3, pictures: StareIcon, text: 'Tenant Maintenance Responsibilities' },
  { id: 3, pictures: StareIcon, text: 'Move Out Process' },
  { id: 3, pictures: StareIcon, text: 'Safety Tips' },
  { id: 3, pictures: StareIcon, text: 'Common Move-Out Repairs' },
  { id: 3, pictures: StareIcon, text: 'Move-Out Checklist' },
];
const HelpDetail: React.FC = () => (
  <div className='pb-[50px]'>
    <img className='relative w-full h-[432px] xl:h-[486px] lg:h-[400px]' src={Background} alt='Background' />
    <div className='lg:container 2xl:pl-80 2xl:pr-0 xl:pr-0 xl:pl-40 pt-[50px] pl-[20px] pr-[20px]'>
      <div className='font-Leitura text-[36px] text-center'>
        Long Term Tenants
      </div>
      <div className='md:flex md:flex-wrap'>
        {Plan?.map(res => (
          <div className='2xl:p-4 xl:p-6 lg:p-9 md:p-10 pt-[20px] text-center'>
            <div className='2xl:w-[370px] w-auto md:w-[250px] h-[200px] 2xl:h-[251px] xl:w-[300px] border-2 rounded-lg flex justify-center items-center' key={res.id}>
              <div className='text-center'>
                <div className='flex justify-center'>
                  <img src={res?.pictures} alt={`${res?.id}`} />
                </div>
                <div className='font-Arial text-[18px] pt-[20px]'>{res.text}</div>
                <div className='font-Arial text-[16px] pt-[10px]'>{res.mas}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='pt-[50px] flex justify-center'>
        <img src={DividerIcon} alt='Divider' />
      </div>
      <div className='font-Leitura text-[36px] text-center pt-[50px]'>
        Property Owners
      </div>
      <div className='md:flex flex-wrap pt-[30px]'>
        {Plans?.map(res => (
          <div className='2xl:p-4 xl:p-6 lg:p-9 md:p-10 pt-[20px]'>
            <div className='2xl:w-[370px] w-auto md:w-[250px] h-[200px] 2xl:h-[251px] xl:w-[300px] border-2 rounded-lg flex justify-center items-center' key={res.id}>
              <div className='text-center'>
                <div className='flex justify-center'>
                  <img src={res?.pictures} alt={`${res?.id}`} />
                </div>
                <div className='font-Arial text-[18px] pt-[20px]'>{res.text}</div>
                <div className='font-Arial text-[16px] pt-[10px]'>{res.mas}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='pt-[50px] flex justify-center'>
        <img src={DividerIcon} alt='Divider' />
      </div>
      <div className='pt-[50px] font-Leitura text-[36px]'>
        Promoted articles:
      </div>
      <div className='md:flex flex-wrap'>
        {Promoted?.map(res => (
          <div className='flex md:min-w-[370px] pt-[20px]' key={res.id}>
            <img src={res?.pictures} alt={`${res?.id}`} />
            <div className='font-Arial text-[18px]'>{res.text}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default HelpDetail;