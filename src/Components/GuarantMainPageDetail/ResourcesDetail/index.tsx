import React from 'react';
import DividerIcon from '../../../Assets/Images/DividerIcon.svg';

const Promoted = [
  { id: 1, text: 'What is your rent estimate?' },
  { id: 2, text: 'Determining rental price tutorial' },
  { id: 3, text: 'Guide to raising rent' },
  { id: 4, text: 'Collect rent online' },
  { id: 5, text: 'Landlord tools & resources' },
  { id: 6, text: 'What is your rent estimate?' },
  { id: 7, text: 'Determining rental price tutorial' },
  { id: 8, text: 'Guide to raising rent' },
];

const ReaoutcesDetail: React.FC = () => (
  <div className="md:pt-[50px]">
    <div className="lg:container 2xl:pl-80 2xl:pr-0 xl:pl-60 pl-[20px] pr-[20px]">
      <div className="font-Leitura text-[36px] font-bold">
        Resources for Pricing and Renting your Property
      </div>
      <div className="md:flex flex-wrap">
        {Promoted?.map(res => (
          <div className="md:min-w-[450px] pt-[20px]" key={res.id}>
            <div className="font-Arial text-[16px] text-Green100">
              {res.text}
            </div>
          </div>
        ))}
      </div>
      <div className="pt-[50px] flex justify-center">
        <img src={DividerIcon} alt="Divider" />
      </div>
    </div>
  </div>
);

export default ReaoutcesDetail;
