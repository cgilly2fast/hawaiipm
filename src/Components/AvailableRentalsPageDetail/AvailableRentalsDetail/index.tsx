import React from 'react';

const AvailableRentalsDetail: React.FC = () => (
  <div className="pb-[50px]">
    <div className="bg-Neutral100 h-[110px] lg:h-[200px] font-Leitura flex">
      <div className="text-[36px] lg:text-[48px] lg:container  2xl:pl-80 xl:pl-60 lg:pl-40 flex flex-row items-center ml-[20px]">
        Available Rentals
      </div>
    </div>
    <div className="2xl:px-80 xl:px-64 lg:px-44 pt-[50px] pl-[20px] pr-[20px]">
      <div className="font-Arial text-Black400 w-auto text-[16px]">
        <div>Aloha,</div>
        <div className="pt-[30px]">
          You will be redirected to a new tab to view all of our available
          rentals.
        </div>
        <div className="pt-[30px]">
          <span>Mahalo,</span>
          <br />
          <span>Hawaii PM</span>
        </div>
      </div>
      <div className="pt-[20px] font-Arial">
        <button className="w-[100%] text-[16px] md:w-[180px] lg:w-[250px] h-[44px] bg-Green100 text-Neutral000 rounded-lg outline-none">
          Available Rentals
        </button>
      </div>
    </div>
  </div>
);

export default AvailableRentalsDetail;
