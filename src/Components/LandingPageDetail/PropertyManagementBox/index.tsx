import React from 'react';
interface PropertyDetailProps {
  setOpen: any;
  open: any;
}

const PropertyManagementBox: React.FC<PropertyDetailProps> = ({
  setOpen,
  open,
}: PropertyDetailProps) => {
  return (
    <div className="w-[100%] pb-[30px] lg:max-w-[570px] absolute items-center left-[0px] 2xl:flex 2xl:top-[82px] 2xl:left-[600px]  xl:left-[440px] xl:top-[80px] lg:top-[35px] lg:left-[230px] rounded-lg items-start flex justify-center lg:bg-Neutral000">
      <div className="max-w-[500px] h-auto lg:pt-[0px] pt-[30px] ml-[20px] mr-[20px]">
        <div className="flex justify-center">
          <div className="max-w-[75%] font-Leitura text-Neutral000 lg:text-[24px] lg:text-Black100 lg:pt-[30px] text-center">
            <span className="text-4xl font-normal leading-[50px]">
              Property Management
            </span>
          </div>
        </div>
        <div className="pt-[20px] font-Arial">
          <div className="w-[100%] md:w-[400px] lg:w-[510px] bg-Neutral000 p-[10px] h-[44px] border-2 rounded-lg">
            <input
              placeholder="Address entry"
              className="w-[100%] focus-visible:outline-none focus:outline"
            />
          </div>
          <div className="w-[100%] md:w-[400px] lg:w-[510px] bg-Neutral000 p-[10px] h-[44px] border-2 mt-[20px] rounded-lg">
            <input
              placeholder="Email"
              className="w-[100%] focus-visible:outline-none focus:outline"
            />
          </div>
          <div className="lg:flex pt-[20px]">
            <div className="text-Neutral000 lg:text-Black100 font-bold">
              Qualified tenant in 30 days or we pay you.
            </div>
            <button className="lg:text-Green100 text-Green400 underline focus-visible:outline-none focus:outline">
              Learn more
            </button>
          </div>
          <div className="pt-[20px]">
            <button
              className="w-[100%] md:w-[400px] lg:w-[510px] h-[44px] bg-Green100 text-Neutral000 rounded-lg focus-visible:outline-none focus:outline"
              onClick={() => {
                setOpen(open + 1);
              }}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyManagementBox;
