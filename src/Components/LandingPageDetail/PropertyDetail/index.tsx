import React, { useState } from 'react';
import Background from "../../../Assets/Images/Background.png";
import PropertyManagementBox from '../PropertyManagementBox';
import PropertyRetBox from '../PropertyRetBox';

const PropertyDetail: React.FC = () => {
  const [open, setOpen] = useState<number>(1);
  return (
    <div>
      <div className='relative w-full h-[432px] xl:h-[486px] lg:h-[400px]' style={{ backgroundImage: `url(${Background})` }}>
        {open === 1 ?
          <PropertyManagementBox
            setOpen={setOpen} open={open} />
          :
          <PropertyRetBox
            setOpen={setOpen} open={open} />
        }
      </div>
      <div>
        <div className='bg-Neutral100 h-[160px] font-Leitura flex justify-center'>
          <span className='md:max-w-[530px] max-w-[271px] md:pt-[30px] text-[36px] text-Green100 text-center'>
            Tenant in 30 days | Earn $5000 more
            Or We Pay you
          </span>
        </div>
      </div>
    </div>
  );
}

export default PropertyDetail;