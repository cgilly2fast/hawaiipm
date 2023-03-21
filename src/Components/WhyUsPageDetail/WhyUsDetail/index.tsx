import React from 'react';
import WhyUs from '../../../Assets/Images/WhyUs.png';
import Homes from '../../../Assets/Images/Homes.png';
import Condos from '../../../Assets/Images/Condos.png';
import Townhomes from '../../../Assets/Images/Townhomes.png';
import Apartment from '../../../Assets/Images/Apartment.png';
import DividerIcon from '../../../Assets/Images/DividerIcon.svg';

const Plan = [
  { id: 1, pictures: Homes, text: 'Single Family Homes' },
  { id: 2, pictures: Condos, text: 'Condos' },
  { id: 3, pictures: Townhomes, text: 'Townhomes' },
  { id: 4, pictures: Apartment, text: 'Apartment Buildings' },
];

const WhyUsDetail: React.FC = () => (
  <div className="pb-[50px]">
    <div className="bg-Neutral100 h-[110px] lg:h-[200px] font-Leitura flex">
      <div className="lg:text-[48px] text-[36px] font-bold lg:container  2xl:pl-80 xl:pl-60 lg:pl-40 flex flex-row items-center ml-[20px]">
        Why Us
      </div>
    </div>
    <div className="lg:container 2xl:pl-80 xl:pr-0 xl:pl-40 pt-[50px] pl-[20px] pr-[20px]">
      <div className="font-Leitura text-[36px] font-bold">Why Hawaii PM?</div>
      <div className="pt-[50px] xl:flex flex-row">
        <img src={WhyUs} alt="WhyUs" className="w-[100%]" />
        <div className="text-Black400 text-[16px] font-Arial w-auto xl:pl-[70px] xl:pt-[0px] pt-[30px]">
          <div>
            Lorem ipsum dolor sit amet consectetur. Odio nam dictum donec
            eleifend consequat volutpat fermentum malesuada. Orci libero duis
            venenatis a. Accumsan lacus vestibulum et leo sed egestas amet
            viverra. Volutpat risus senectus quis egestas.
          </div>
          <div className="pt-[30px]">
            Consequat sollicitudin mauris sed elementum auctor non. Netus
            viverra cursus purus neque aliquet justo. Volutpat turpis metus
            mattis habitant purus id. Orci sit vulputate interdum porta lectus.
            Molestie sed proin vitae pellentesque ut nam lectus metus. Commodo
            tempor tortor semper facilisi. Nunc sagittis cras lacus mattis
            dolor. Sed commodo sit molestie purus lobortis enim molestie mattis
            non. Tristique nec adipiscing auctor sem mi scelerisque arcu. Id
            interdum tempor est volutpat ante ultrices.
          </div>
          <div className="pt-[30px]">
            For immediate answers to any questions you might have regarding the
            management of your property please contact{' '}
            <span className="text-Green100">colbygbemail@email.com</span> or{' '}
            <span className="text-Green100">000-000-0000.</span>
          </div>
        </div>
      </div>
      <div className="pt-[50px] flex justify-center">
        <img src={DividerIcon} alt="Divider" />
      </div>
      <div className="font-Leitura text-[24px] font-bold pt-[50px]">
        Residential Specialists in:
      </div>
      <div className="md:flex flex-wrap justify-between pt-[50px]">
        {Plan?.map(res => (
          <div key={res.id} className="pt-[20px]">
            <img src={res?.pictures} alt={`${res?.id}`} className="w-[100%]" />
            <div className="border-x-2 border-b-2 text-[16px] py-[20px] rounded-b-lg text-center font-Arial">
              {res.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default WhyUsDetail;
