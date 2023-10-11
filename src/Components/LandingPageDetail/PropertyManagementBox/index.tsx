import React from 'react';
import { Link } from 'react-router-dom';
interface PropertyDetailProps {
  setOpen: any;
  open: any;
}

const PropertyManagementBox: React.FC<PropertyDetailProps> = ({
  setOpen,
  open,
}: PropertyDetailProps) => {
  return (
    <div className="w-auto [h-[440px] top-[25px] ml-[13px] mr-[13px] md:pl-[13px] md:pr-[13px] pb-[30px] bg-Neutral000 absolute items-center rounded-lg items-start flex justify-center">
      <div className="max-w-[500px] h-auto lg:pt-[0px] md:pt-[20px] ml-[20px] mr-[20px]">
        <div className="flex justify-center">
          <div className="max-w-[75%] font-Leitura text-Black100 lg:text-[24px] lg:text-Black100 lg:pt-[30px] text-center">
            <span className="text-4xl font-normal leading-[50px]">
              Property Management
            </span>
          </div>
        </div>
        <div className="lg:flex pt-[18px] text-[14px]">
          <div className="text-Black100">
            Revenue guaranteed or we pay you.{' '}
            <button className="lg:text-Green100 text-Green400 underline focus-visible:outline-none focus:outline">
              <Link to="/guarantee">Learn more</Link>
            </button>
          </div>
        </div>
        <div className="pt-[20px] font-Arial">
          <div className="text-[16px] pt-[10px] font-bold text-Black100">
            Find out what you could earn
          </div>
          <div className="w-[100%] md:w-[400px] lg:w-[510px] bg-Neutral000 p-[10px] h-[44px] border-2 rounded-lg">
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Rental Address"
              className="w-[100%] focus-visible:outline-none focus:outline"
              autoComplete="shipping address-level2"
            />
          </div>
          <div className="w-[100%] md:w-[400px] lg:w-[510px] bg-Neutral000 p-[10px] h-[44px] border-2 mt-[20px] rounded-lg">
            <input
              placeholder="Email"
              className="w-[100%] focus-visible:outline-none focus:outline"
            />
          </div>
          <div className="flex flex-wrap  pt-[20px]">
            <div className="flex items-center mr-2 md:mr-4">
              <input
                type="radio"
                id="radioOption1"
                name="radioGroup"
                className="h-4 w-4 accent-Green100"
              />
              <label
                htmlFor="radioOption1"
                className="ml-2 text-[14px] text-Black100"
              >
                Short Term Rental
              </label>
            </div>

            <div className="flex items-center mr-2 md:mr-4 ">
              <input
                type="radio"
                id="radioOption2"
                name="radioGroup"
                className="h-4 w-4 accent-Green100"
              />
              <label
                htmlFor="radioOption2"
                className="ml-2 text-[14px] text-Black100"
              >
                Long Term Rental
              </label>
            </div>
          </div>
          <div className="pt-[20px]">
            <button
              className="w-[100%] md:w-[400px] lg:w-[510px] h-[44px] bg-Green100 text-Neutral000 rounded-lg focus-visible:outline-none focus:outline"
              onClick={() => {
                // setOpen(open + 1);
              }}
            >
              <Link to="/quote">
                <span className="underline">Start</span> Maximizing Your Income
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyManagementBox;
