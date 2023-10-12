import React, { useState } from 'react';
import Background from '../../../Assets/Images/Background.png';
import PropertyManagementBox from '../PropertyManagementBox';

const BannerDetail: React.FC = () => {
  const [open, setOpen] = useState<number>(1);
  return (
    <div>
      <div>
        <div className="bg-Neutral100 md:h-[160px] h-[140px] font-Leitura flex justify-center">
          <span className="md:max-w-[600px] max-w-[220px] md:pt-[30px] md:text-[36px] text-[24px] pt-[20px] text-Green100 text-center">
            Tenant in 30 days | Earn $5000 more Or We Pay You
          </span>
        </div>
      </div>
      <div
        className="relative w-full max-w-[1920px] h-[450px] mx-auto flex justify-center"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <PropertyManagementBox setOpen={setOpen} open={open} />
      </div>
    </div>
  );
};

export default BannerDetail;
