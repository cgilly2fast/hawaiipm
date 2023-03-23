import React from 'react';
import Location from '../../../Assets/Images/Location.png';
import Homes2 from '../../../Assets/Images/Homes2.png';
import DividerIcon from '../../../Assets/Images/DividerIcon.svg';
import Homes from '../../../Assets/Images/Homes.png';
import Condos from '../../../Assets/Images/Condos.png';
import Townhomes from '../../../Assets/Images/Townhomes.png';
import Apartment from '../../../Assets/Images/Apartment.png';

const Plan = [
  { id: 1, pictures: Homes, text: 'Single Family Homes' },
  { id: 2, pictures: Condos, text: 'Condos' },
  { id: 3, pictures: Townhomes, text: 'Townhomes' },
  { id: 4, pictures: Apartment, text: 'Apartment Buildings' },
];

const Recent = [
  [
    {
      id: 1,
      text: 'Am I a good fit for Hawaii Property Management?',
      content:
        'The mug is round. The jar is round. They should call it Roundtine.',
    },
    {
      id: 2,
      text: 'Do you ever have issues with guests damaging the property?',
      content:
        'The mug is round. The jar is round. They should call it Roundtine.',
    },
    {
      id: 3,
      text: 'Can I cancel at any time?',
      content:
        'The best way to answer this is to give you a detailed 12-month revenue projection. Give us a call, and we collect the info we need to create an accurate forecast and get back to you in 24hrs.',
    },
    {
      id: 4,
      text: 'Can I stay at my own place?',
      content:
        'The best way to answer this is to give you a detailed 12-month revenue projection. Give us a call, and we collect the info we need to create an accurate forecast and get back to you in 24hrs.',
    },
  ],
];

const OurServicesDetail: React.FC = () => (
  <div className="pb-[50px]">
    <div className="bg-Neutral100 h-[110px] lg:h-[200px] font-Leitura flex">
      <div className=" text-[36px] lg:text-[48px] lg:container  2xl:pl-80 xl:pl-60 lg:pl-40 flex flex-row items-center ml-[20px]">
        Our Services
      </div>
    </div>
    <div className="2xl:px-80 xl:px-[16rem] lg:px-48 pt-[50px] pl-[20px] pr-[20px]">
      <img src={Location} alt="Location" className="w-[100%] h-[400px]" />
      <div className="xl:flex flex-row">
        <div className="xl:pr-[50px]">
          <div className="font-Leitura text-[24px] pt-[50px]">
            Full-Service Property Management
          </div>
          <div className="text-Black400 tex-[16px] font-Arial w-[auto]">
            <div className="pt-[20px]">
              Et qui eius admodum argumentum, te dicta perpetua est. Sea clita
              splendide et, splendide complectitur usu ne. Has lorem eloquentiam
              no, nam volutpat accusamus eu, te vel facilisis adipiscing. Ne
              laudem deseruisse mei, pro meis delectus argumentum eu. Ad est
              nullam iisque, ei vel civibus urbanitas, ea usu ullum luptatum
              invidunt.
            </div>
            <div className="pt-[20px]">
              For immediate answers to any questions you might have regarding
              the management of your property please contact{' '}
              <button className="text-Green100 font-bold">colbygbemail@email.com</button> or{' '}
              <button className="text-Green100 font-bold">000-000-0000.</button>
            </div>
          </div>
        </div>
        <div className="xl:pl-[20px]">
          <div className="font-Arial text-[18px] font-bold pt-[50px]">
            Services for Property Management
          </div>
          <div className="pt-[30px]">
            <div className="xl:flex flex-wrap justify-around">
              {Recent?.map(item => (
                <ul>
                  {item.map(res => (
                    <div className="pt-[20px]" key={res?.id}>
                      <div className="w-auto xl:w-[530px] h-auto border-2 rounded-lg font-Arial">
                        <details>
                          <summary className="flex flex-row justify-between cursor-pointer text-[16px]">
                            <div className="p-[10px]">{res?.text}</div>
                            <i className="rounded-r"></i>
                          </summary>
                          <div className="mt-3 text-sm leading-6 pl-[10px] pb-[10px]">
                            {res?.content}
                          </div>
                        </details>
                      </div>
                    </div>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="pt-[50px] flex justify-center">
        <img src={DividerIcon} alt="Divider" />
      </div>
      <img src={Homes2} alt="Homes2" className="w-[100%] h-[350px] pt-[50px]" />
      <div className="xl:flex flex-row">
        <div className="xl:pr-[50px]">
          <div className="font-Leitura text-[24px] pt-[50px]">
            Vacant Home Management
          </div>
          <div className="text-Black400 font-Arial w-[auto]">
            <div className="pt-[20px]">
              Et qui eius admodum argumentum, te dicta perpetua est. Sea clita
              splendide et, splendide complectitur usu ne. Has lorem eloquentiam
              no, nam volutpat accusamus eu, te vel facilisis adipiscing. Ne
              laudem deseruisse mei, pro meis delectus argumentum eu. Ad est
              nullam iisque, ei vel civibus urbanitas, ea usu ullum luptatum
              invidunt.
            </div>
            <div className="pt-[20px]">
              For immediate answers to any questions you might have regarding
              the management of your property please contact{' '}
              <button className="text-Green100 font-bold">colbygbemail@email.com</button> or{' '}
              <button className="text-Green100 font-bold">000-000-0000.</button>
            </div>
          </div>
        </div>
        <div className="xl:pl-[20px]">
          <div className="font-Arial text-[18px] font-bold pt-[50px]">
            Services for Property Management
          </div>
          <div className="pt-[20px]">
            <div className="xl:flex flex-wrap justify-around">
              {Recent?.map(item => (
                <ul>
                  {item.map(res => (
                    <div className="pt-[20px]" key={res?.id}>
                      <div className="w-auto xl:w-[530px] h-auto border-2 rounded-lg font-Arial">
                        <details>
                          <summary className="flex flex-row justify-between cursor-pointer text-[16px]">
                            <div className="p-[10px]">{res?.text}</div>
                            <i className="rounded-r"></i>
                          </summary>
                          <div className="mt-3 text-sm leading-6 pl-[10px] pb-[10px]">
                            {res?.content}
                          </div>
                        </details>
                      </div>
                    </div>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="pt-[50px] flex justify-center">
        <img src={DividerIcon} alt="Divider" />
      </div>
      <div className="md:flex flex-wrap justify-between pt-[50px]">
        {Plan?.map(res => (
          <div key={res.id} className="pt-[20px] 2xl:max-w-[250px] xl:max-w-[200px] lg:max-w-[200px] md:max-w-[230px]">
            <img src={res?.pictures} alt={`${res?.id}`} className="w-[100%]" />
            <div className="border-x-2 border-b-2 py-[20px] rounded-b-lg text-center font-Arial">
              {res.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default OurServicesDetail;
