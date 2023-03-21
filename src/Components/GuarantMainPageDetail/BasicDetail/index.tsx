import React from 'react';
import GoogleMapReact from 'google-map-react';
import DividerIcon from '../../../Assets/Images/DividerIcon.svg';

const BasicDetail: React.FC = () => (
  <div className="md:pt-[50px]">
    <div className="lg:container 2xl:pl-80 2xl:pr-0 xl:pl-60 pl-[20px] pr-[20px]">
      <div>
        <div className="font-Leitura text-[36px] text-Green100 underline">
          98625 Market Summary
        </div>
        <div className="text-Black400 font-Arial text-[16px]">
          The median rent for 5 bedroom properties in 98625 is $15,500.
        </div>
      </div>
      <div className="pt-[20px] flex flex-row justify-between">
        <div>
          <div className="font-Arial text-[16px]">Median Rent</div>
          <div className="font-Leitura text-[36px] font-bold">$15,500</div>
        </div>
        <div>
          <div className="font-Arial text-[16px]">Month-Over-Month Charge</div>
          <div className="font-Leitura text-[36px] font-bold">-$4,500</div>
        </div>
        <div>
          <div className="font-Arial text-[16px]">Year-Over-Year Charge</div>
          <div className="font-Leitura text-[36px] font-bold">+$8,600</div>
        </div>
        <div>
          <div className="font-Arial text-[16px]">Available Rentals</div>
          <div className="font-Leitura text-[36px] font-bold">7</div>
        </div>
      </div>
      <div className="text-Black400 font-Arial text-[16px] pt-[30px]">
        Source: Hawaii PM Rentals Data
      </div>
      <div className="pt-[50px] flex justify-center">
        <img src={DividerIcon} alt="Divider" />
      </div>
      <div className="pt-[50px]">
        <div className="font-Leitura text-[36px] font-bold">
          Local Rentals Marketplace
        </div>
        <div className="text-Black400 font-Arial text-[16px] pt-[10px]">
          Based on your Rent extimate of $19,999{' '}
          <span className="text-Blue100">Adjust rental price</span>
        </div>
        <div className="w-[100%] h-[500px] pt-[30px]">
          <GoogleMapReact
            bootstrapURLKeys={{ key: '' }}
            defaultCenter={{
              lat: 10.99835602,
              lng: 77.01502627,
            }}
            defaultZoom={11}
            yesIWantToUseGoogleMapApiInternals
          />
        </div>
      </div>
    </div>
  </div>
);

export default BasicDetail;
