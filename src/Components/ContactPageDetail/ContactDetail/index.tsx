import React from 'react';

const ContactDetail: React.FC = () => (
  <div className="pb-[50px]">
    <div className="bg-Neutral100 h-[110px] lg:h-[200px] font-Leitura flex">
      <div className="text-[36px] lg:text-[48px] lg:container  2xl:pl-80 xl:pl-60 lg:pl-40 flex flex-row items-center ml-[20px]">
        Contact
      </div>
    </div>
    <div className="2xl:px-80 xl:px-64 lg:px-44 pt-[30px] pl-[20px] pr-[20px]">
      <div className="md:flex">
        <div>
          <div className="font-Leitura text-[24px]">Contact Form</div>
          <div className="xl:flex font-Arial justify-between">
            <div className="h-[44px] p-[10px] mt-[10px] border-2 rounded-lg">
              <input
                placeholder="Name"
                className="w-[100%] md:w-[240px] xl:w-[240px] lg:w-[200px] focus-visible:outline-none focus:outline"
              />
            </div>
            <div className="h-[44px] p-[10px] mt-[10px] border-2 rounded-lg">
              <input
                placeholder="Email"
                className="w-[100%] md:w-[240px] xl:w-[240px] lg:w-[200px] focus-visible:outline-none focus:outline"
              />
            </div>
          </div>
          <div className="mt-[20px] p-[10px] font-Arial border-2 rounded-lg">
            <textarea
              placeholder="Message"
              className="w-[100%] xl:w-[520px] lg:w-[300px] h-[160px] focus-visible:outline-none focus:outline"
            />
          </div>
          <div className="pt-[20px] font-Arial">
            <button className="w-[100%]  md:w-[230px] lg:w-[250px] h-[44px] bg-Green100 text-Neutral000 rounded-lg outline-none">
              Send
            </button>
          </div>
        </div>
        <div className="md:pl-[50px]">
          <div className="font-Leitura text-[24px] pt-[10px]">Contact info</div>
          <div className="text-Black400 text-[16px] font-Arial">
            <div className="pt-[20px]">
              <span className="font-bold">Phone</span>
              <br />
              <span>(808) 777-7777</span>
            </div>
            <div className="pt-[20px]">
              <span className="font-bold">Mailing Address</span>
              <br />
              <span>7192 Kalanianaole Hwy</span>
              <br />
              <span>Ste A-143A # 372</span>
              <br />
              <span>Honolulu, HI 96825</span>
            </div>
            {/* <div className="pt-[20px]">
              <span className="font-bold">Office</span>
              <br />
              <span>1221 Kapiolani Blvd. Suite 6A4 </span>
              <br />
              <span>Honolulu, HI 96814</span>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ContactDetail;
