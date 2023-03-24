import React from 'react';
import Background from '../../../Assets/Images/Background.png';
import Application from '../../../Assets/Images/Application.svg';
import FaqIcon from '../../../Assets/Images/FaqIcon.svg';
import BookIcon from '../../../Assets/Images/BookIcon.svg';
import ChecklistIcon from '../../../Assets/Images/ChecklistIcon.svg';
import RepairIcon from '../../../Assets/Images/RepairIcon.svg';
import TaxIcon from '../../../Assets/Images/TaxIcon.svg';
import DividerIcon from '../../../Assets/Images/DividerIcon.svg';
import StareIcon from '../../../Assets/Images/StareIcon.svg';

const Plan = [
  {
    id: 1,
    pictures: Application,
    text: 'Application Process',
    mas: '5 Articles',
  },
  { id: 2, pictures: FaqIcon, text: 'FAQ', mas: '4 Articles' },
  { id: 3, pictures: BookIcon, text: 'Tenant Manual', mas: '35 Articles' },
  {
    id: 4,
    pictures: ChecklistIcon,
    text: 'Moving Checklist',
    mas: '3 Articles',
  },
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
  {
    id: 3,
    pictures: StareIcon,
    text: 'Why can I not clean the carpet myself?',
  },
  { id: 3, pictures: StareIcon, text: 'Tenant Maintenance Responsibilities' },
  { id: 3, pictures: StareIcon, text: 'Move Out Process' },
  { id: 3, pictures: StareIcon, text: 'Safety Tips' },
  { id: 3, pictures: StareIcon, text: 'Common Move-Out Repairs' },
  { id: 3, pictures: StareIcon, text: 'Move-Out Checklist' },
];
const HelpDetail: React.FC = () => (
  <div className="pb-[50px]">
    <img
      className="relative w-full h-[432px] xl:h-[486px] lg:h-[400px]"
      src={Background}
      alt="Background"
    />
    <div className="2xl:px-80 xl:px-40 lg:px-44 pt-[50px] pl-[20px] pr-[20px]">
      <div className="font-Leitura text-[36px] text-center">
        Long Term Tenants
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 pt-[20px]">
        {Plan?.map(res => (
          <div
            key={res.id}
            className="border-2 max-w-[370px] w-[100%] rounded-lg h-[251px] flex justify-center items-center max-h-[251px] text-center"
          >
            <div className="text-center">
              <div className="flex justify-center">
                <img src={res?.pictures} alt={`${res?.id}`} />
              </div>
              <div className="font-Arial text-[18px] pt-[20px]">{res.text}</div>
              <div className="font-Arial text-[16px] pt-[10px]">{res.mas}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="pt-[50px] flex justify-center">
        <img src={DividerIcon} alt="Divider" />
      </div>
      <div className="font-Leitura text-[36px] text-center pt-[50px]">
        Property Owners
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 pt-[20px]">
        {Plans?.map(res => (
          <div
            key={res.id}
            className="border-2 max-w-[370px] w-[100%] rounded-lg h-[251px] flex justify-center items-center max-h-[251px] text-center"
          >
            <div className="text-center">
              <div className="flex justify-center">
                <img src={res?.pictures} alt={`${res?.id}`} />
              </div>
              <div className="font-Arial text-[18px] pt-[20px]">{res.text}</div>
              <div className="font-Arial text-[16px] pt-[10px]">{res.mas}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="pt-[50px] flex justify-center">
        <img src={DividerIcon} alt="Divider" />
      </div>
      <div className="pt-[50px] font-Leitura text-[36px]">
        Promoted articles:
      </div>
      <div className="md:flex flex-wrap">
        {Promoted?.map(res => (
          <div
            className="flex 2xl:min-w-[400px] xl:min-w-[370px] md:min-w-[336px] pt-[20px]"
            key={res.id}
          >
            <img src={res?.pictures} alt={`${res?.id}`} />
            <div className="font-Arial text-[18px]">{res.text}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default HelpDetail;
