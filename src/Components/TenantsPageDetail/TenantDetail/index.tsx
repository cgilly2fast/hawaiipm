import React from 'react';
import Key from '../../../Assets/Images/Key.png';
import DividerIcon from '../../../Assets/Images/DividerIcon.svg';

const TenantDetail: React.FC = () => (
  <div className="pb-[50px]">
    <div className="bg-Neutral100 h-[110px] lg:h-[200px] font-Leitura flex">
      <div className="text-[36px] lg:text-[48px] lg:container  2xl:pl-80 xl:pl-60 lg:pl-40 flex flex-row items-center ml-[20px]">
        Applying for Rental
      </div>
    </div>
    <div className="2xl:px-80 xl:px-64 lg:px-44 pt-[50px] pl-[20px] pr-[20px]">
      <div className="xl:flex flex-row">
        <img src={Key} alt="key" className="w-[100%] h-[400px] xl:w-[50%]" />
        <div className="text-Black400 font-Arial w-auto xl:pl-[50px] xl:pt-[0px] lg:pt-[20px] pt-[30px]">
          <div className="font-Leitura text-Black100 text-[24px]">
            Thank You for considering one of Hawaii PM's rental unit as your
            potential new home.
          </div>
          <div className="pt-[30px] text-[16px]">
            Et qui eius admodum argumentum, te dicta perpetua est. Sea clita
            splendide et, splendide complectitur usu ne. Has lorem eloquentiam
            no, nam volutpat accusamus eu, te vel facilisis adipiscing. Ne
            laudem deseruisse mei, pro meis delectus argumentum eu. Ad est
            nullam iisque, ei vel civibus urbanitas, ea usu ullum luptatum
            invidunt.
          </div>
          <div className="pt-[30px] text-[16px]">
            For immediate answers to any questions you might have regarding the
            management of your property please contact{' '}
            <span className="text-Green100 font-bold">colbygbemail@email.com</span> or{' '}
            <span className="text-Green100 font-bold">000-000-0000.</span>
          </div>
        </div>
      </div>
      <div className="pt-[50px] flex justify-center">
        <img src={DividerIcon} alt="Divider" />
      </div>
      <div className="font-Leitura text-[24px] pt-[50px]">
        Application Forms
      </div>
      <div className="font-Arial text-Black400 pt-[20px] text-[16px ]">
        <div>
          <span className="font-bold text-Black100">IMPORTANT:</span> Please thoroughly read
          and follow{' '}
          <span className="font-bold text-Black100">
            "Important Requirements and Instructions"
          </span>{' '}
          section on the application form. If you have any questions please
          contact <span className="text-Green100 font-bold">colbygbemail@email.com</span>{' '}
          or <span className="text-Green100 font-bold">000-000-0000.</span>
        </div>
        <div className="pt-[20px]">
          By clicking on the Apply Online button below a new browser window or
          tab will open up that will take you to our partner site where you can
          apply and pay the application fee. To return to the Pinnacle website
          tab, please close that browser.
        </div>
      </div>
      <div className="md:flex font-Arial pt-[10px]">
        <div className="pt-[20px] text-[16px]">
          <button className="w-[100%] md:w-[200px] lg:w-[250px] h-[44px] bg-Green100 text-Neutral000 rounded-lg">
            Apply Online
          </button>
        </div>
        <div className="md:pl-[50px] pt-[20px]">
          <button className="w-[100%] md:w-[230px] lg:w-[250px] h-[44px] bg-Green100 text-Neutral000 rounded-lg">
            Download Printable Form
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default TenantDetail;
