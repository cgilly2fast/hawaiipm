import React from 'react';

const OwnerLoginDetail: React.FC = () => (
  <div className="pb-[50px]">
    <div className="bg-Neutral100 h-[110px] lg:h-[200px] font-Leitura flex">
      <div className="lg:text-[48px] text-[36px] font-bold lg:container  2xl:pl-80 xl:pl-60 lg:pl-40 flex flex-row items-center ml-[20px]">
        Owner Login
      </div>
    </div>
    <div className="lg:container 2xl:pl-80 2xl:pr-0 xl:pl-60 lg:px-40 pt-[50px] pl-[20px] pr-[20px]">
      <div className="font-Arial text-Black400 w-auto text-[16px]">
        <div>Aloha Owners,</div>
        <div className="pt-[30px]">
          By clicking on the Owner Login button below a new browser window or
          tab will open up that will take you to our partner site where you can
          login to view your statement. To return to the Pinnacle website
          tab,please close that browser tab.
        </div>
        <div className="pt-[30px]">
          <span>Thank you,</span>
          <br />
          <span>Hawaii PM</span>
        </div>
      </div>
      <div className="pt-[20px] font-Arial">
        <button className="w-[100%] text-[16px] md:w-[180px] lg:w-[250px] h-[44px] bg-Green100 text-Neutral000 rounded-lg">
          Owner Login
        </button>
      </div>
    </div>
  </div>
);

export default OwnerLoginDetail;
