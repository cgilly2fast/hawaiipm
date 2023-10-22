import React from 'react';

const AboutUsDetail: React.FC = () => (
  <div className="pb-[50px]">
    <div className="bg-Neutral100 h-[110px] lg:h-[200px] font-Leitura flex">
      <div className="text-[36px] md:text-[48px] lg:container  2xl:pl-80 xl:pl-60 lg:pl-40 flex flex-row items-center ml-[20px]">
        About Us
      </div>
    </div>
    <div className="2xl:px-80 xl:px-60 lg:px-44 lg:pt-[50px] pt-[20px] pl-[20px] pr-[20px]">
      <div className="font-Leitura text-[24px] md:text-[36px] md:w-auto w-[300px]">
        A Letter From The Owner
      </div>
      <div className="font-Arial lg:pt-[50px] pt-[20px] w-auto text-Black400 text-[16px]">
        <div className="italic">
          To Our Valued Clients and Prospective Team Members,
        </div>
        <div className="pt-[30px]">
          When I embarked on my journey as a property manager in Stinson Beach,
          California, I noticed a critical void in the market. Many property
          management companies had grown complacent, neglecting their commitment
          to delivering exceptional results to their clients.
        </div>
        <div className="pt-[30px]">
          Stinson Beach, though a small and secluded haven with a population of
          under 500 residents, is a treasure trove of vacation rentals. I
          founded a property management company there to address this disparity,
          and the results were truly remarkable. Our clients witnessed their
          annual revenues surge by 2-4 times, thanks to our unwavering
          dedication to proper care and strategic marketing.
        </div>
        <div className="pt-[30px]">
          While Stinson Beach served as an excellent launchpad, my journey
          didn't end there. The events during COVID led me to the enchanting
          shores of Hawaii, a place I now call home. I plan to stay here for
          many years to come, nurturing the growth of Hawaii PM.
        </div>
        <div className="pt-[30px]">
          As we evolve and expand, the mission I set for the company is alway
          the same and quite simple:
        </div>
        <div className="pt-[30px] font-bold text-Black100">
          Deliver amazing results to our clients.
        </div>
        <div className="pt-[30px]">
          This commitment means going above and beyond, ensuring swift
          communication with contractors, proactively addressing issues before
          they surface, and doing whatever it takes to uphold our promise:
          <span className="italic underline">
            safeguarding your property, elevating your rental income, and giving
            you the gift of time.
          </span>
        </div>
        <div className="pt-[30px]">
          This is what sets us apart. If this business ethos resonates with you,
          I encourage you to reach out. Whether or not you opt for our services,
          I'm here as a resource.
        </div>
        <div className="pt-[30px]">Mahalo,</div>
        <div className="pt-[30px]">
          <br />
          <br />
          Colby Gilbert
          <br />
          Phone: 415-209-4835 <br />
          Email: Colby@HawaiiPM.com <br />
          Website: www.HawaiiPM.com
        </div>
        {/* <div className="pt-[30px]">Phone: 415-209-4835</div>

        <div className="pt-[30px]">
          We would welcome the opportunity to earn your trust and deliver you
          the best service in the industry.
        </div> */}
      </div>
    </div>
  </div>
);

export default AboutUsDetail;
