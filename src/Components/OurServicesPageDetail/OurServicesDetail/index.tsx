import React from 'react';
import Location from "../../../Assets/Images/Location.png";
import Homes2 from "../../../Assets/Images/Homes2.png";
import DividerIcon from "../../../Assets/Images/DividerIcon.svg";
import Homes from "../../../Assets/Images/Homes.png";
import Condos from "../../../Assets/Images/Condos.png";
import Townhomes from "../../../Assets/Images/Townhomes.png";
import Apartment from "../../../Assets/Images/Apartment.png";

const Plan = [
  { id: 1, pictures: Homes, text: 'Single Family Homes' },
  { id: 2, pictures: Condos, text: 'Condos' },
  { id: 3, pictures: Townhomes, text: 'Townhomes' },
  { id: 4, pictures: Apartment, text: 'Apartment Buildings' },
];

const OurServicesDetail: React.FC = () => (
  <div className='pb-[50px]'>
    <div className='bg-Neutral100 h-[200px] font-Leitura flex'>
      <div className='text-[48px] lg:container  2xl:pl-80 xl:pl-60 lg:pl-40 flex flex-row items-center ml-[20px]'>
        Our Services
      </div>
    </div>
    <div className='lg:container 2xl:pl-80 2xl:pr-0 xl:pr-0 xl:pl-40 pt-[50px] pl-[20px] pr-[20px]'>
      <img src={Location} alt='Location' className='w-[100%]' />
      <div className='xl:flex flex-row'>
        <div className='xl:pr-[70px]'>
          <div className='font-Leitura text-[24px] font-bold pt-[50px]'>
            Full-Service Property Management
          </div>
          <div className='text-Black400 font-Arial w-[auto]'>
            <div className='pt-[20px]'>
              Et qui eius admodum argumentum, te dicta perpetua est. Sea clita splendide et, splendide complectitur usu ne. Has lorem eloquentiam no, nam volutpat accusamus eu, te vel facilisis adipiscing. Ne laudem deseruisse mei, pro meis delectus argumentum eu. Ad est nullam iisque, ei vel civibus urbanitas, ea usu ullum luptatum invidunt.
            </div>
            <div className='pt-[20px]'>
              For immediate answers to any questions you might have regarding the management of your property please contact <span className='text-Green100'>colbygbemail@email.com</span> or <span className='text-Green100'>000-000-0000.</span>
            </div>
          </div>
        </div>
        <div>
          <div className='font-Arial text-[18px] font-bold pt-[50px]'>
            Services for Property Management
          </div>
          <div className='pt-[50px]'>
            <div className='w-auto xl:w-[550px] h-auto border-2 rounded-lg font-Arial'>
              <details>
                <summary className='flex flex-row justify-between cursor-pointer'>
                  <div className='pt-[10px] pl-[10px]'>Agreement & Leasing</div>
                  <div className='w-[54px] h-auto bg-Neutral300 rounded-r-lg text-center flex justify-center items-center'>+</div>
                </summary>
                <div className="mt-3 text-sm leading-6 pl-[10px]">
                  The mug is round. The jar is round. They should call it Roundtine.
                </div>
              </details>
            </div>
            <div className='pt-[20px]'>
              <div className='w-auto xl:w-[550px] h-auto border-2 rounded-lg font-Arial'>
                <details>
                  <summary className='flex flex-row justify-between cursor-pointer'>
                    <div className='pt-[10px] pl-[10px]'>Marketing</div>
                    <div className='w-[54px] h-auto bg-Neutral300 rounded-r-lg text-center flex justify-center items-center'>+</div>
                  </summary>
                  <div className="mt-3 text-sm leading-6 pl-[10px]">
                    The mug is round. The jar is round. They should call it Roundtine.
                  </div>
                </details>
              </div>
            </div>
            <div className='pt-[20px]'>
              <div className='w-auto xl:w-[550px] h-auto border-2 rounded-lg font-Arial'>
                <details>
                  <summary className='flex flex-row justify-between cursor-pointer'>
                    <div className='pt-[10px] pl-[10px]'>Showings, Screening & Selecting Tenants</div>
                    <div className='w-[54px] h-auto bg-Neutral300 rounded-r-lg text-center flex justify-center items-center'>+</div>
                  </summary>
                  <div className="mt-3 text-sm leading-6 pl-[10px]">
                    The mug is round. The jar is round. They should call it Roundtine.
                  </div>
                </details>
              </div>
            </div>
            <div className='pt-[20px]'>
              <div className='w-auto xl:w-[550px] h-auto border-2 rounded-lg font-Arial'>
                <details>
                  <summary className='flex flex-row justify-between cursor-pointer'>
                    <div className='pt-[10px] pl-[10px]'>Managing</div>
                    <div className='w-[54px] h-auto bg-Neutral300 rounded-r-lg text-center flex justify-center items-center'>+</div>
                  </summary>
                  <div className="mt-3 text-sm leading-6 pl-[10px]">
                    The mug is round. The jar is round. They should call it Roundtine.
                  </div>
                </details>
              </div>
            </div>
            <div className='pt-[20px]'>
              <div className='w-auto xl:w-[550px] h-auto border-2 rounded-lg font-Arial'>
                <details>
                  <summary className='flex flex-row justify-between cursor-pointer'>
                    <div className='pt-[10px] pl-[10px]'>Financial & Reporting</div>
                    <div className='w-[54px] h-auto bg-Neutral300 rounded-r-lg text-center flex justify-center items-center'>+</div>
                  </summary>
                  <div className="mt-3 text-sm leading-6 pl-[10px]">
                    Lorem ipsum dolor sit amet consectetur. Pellentesque elementum sed viverra urna. Elit duis risus bibendum est nec. Leo commodo porttitor praesent rhoncus vitae purus. Sollicitudin vehicula pharetra tellus ipsum blandit. Mauris fusce adipiscing duis quam dignissim nullam id egestas.
                  </div>
                </details>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='pt-[50px] flex justify-center'>
        <img src={DividerIcon} alt='Divider' />
      </div>
      <img src={Homes2} alt='Homes2' className='w-[100%] pt-[50px]' />
      <div className='xl:flex flex-row'>
        <div className='xl:pr-[70px]'>
          <div className='font-Leitura text-[24px] font-bold pt-[50px]'>
            Vacant Home Management
          </div>
          <div className='text-Black400 font-Arial w-[auto]'>
            <div className='pt-[20px]'>
              Et qui eius admodum argumentum, te dicta perpetua est. Sea clita splendide et, splendide complectitur usu ne. Has lorem eloquentiam no, nam volutpat accusamus eu, te vel facilisis adipiscing. Ne laudem deseruisse mei, pro meis delectus argumentum eu. Ad est nullam iisque, ei vel civibus urbanitas, ea usu ullum luptatum invidunt.
            </div>
            <div className='pt-[20px]'>
              For immediate answers to any questions you might have regarding the management of your property please contact <span className='text-Green100'>colbygbemail@email.com</span> or <span className='text-Green100'>000-000-0000.</span>
            </div>
          </div>
        </div>
        <div>
          <div className='font-Arial text-[18px] font-bold pt-[50px]'>
            Services for Property Management
          </div>
          <div className='pt-[50px]'>
            <div className='w-auto xl:w-[550px] h-auto border-2 rounded-lg font-Arial'>
              <details>
                <summary className='flex flex-row justify-between cursor-pointer'>
                  <div className='pt-[10px] pl-[10px]'>Interior Check-list</div>
                  <div className='w-[54px] h-auto bg-Neutral300 rounded-r-lg text-center flex justify-center items-center'>+</div>
                </summary>
                <div className="mt-3 text-sm leading-6 pl-[10px]">
                  The mug is round. The jar is round. They should call it Roundtine.
                </div>
              </details>
            </div>
            <div className='pt-[20px]'>
              <div className='w-auto xl:w-[550px] h-auto border-2 rounded-lg font-Arial'>
                <details>
                  <summary className='flex flex-row justify-between cursor-pointer'>
                    <div className='pt-[10px] pl-[10px]'>Exterior Check-list (single family homes and townhomes)</div>
                    <div className='w-[54px] h-auto bg-Neutral300 rounded-r-lg text-center flex justify-center items-center'>+</div>
                  </summary>
                  <div className="mt-3 text-sm leading-6 pl-[10px]">
                    Lorem ipsum dolor sit amet consectetur. Purus elit urna laoreet aenean varius ullamcorper libero cras. Interdum cras sit augue massa. Vitae habitasse nisl pretium accumsan ipsum adipiscing sed. Nunc consequat dui at viverra pellentesque lorem amet proin.
                  </div>
                </details>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='pt-[50px] flex justify-center'>
        <img src={DividerIcon} alt='Divider' />
      </div>
      <div className='xl:flex justify-between pt-[50px]'>
        {Plan?.map(res => (
          <div key={res.id} className='pt-[20px]'>
            <img src={res?.pictures} alt={`${res?.id}`} className='w-[100%]' />
            <div className='border-x-2 border-b-2 py-[20px] rounded-b-lg text-center font-Arial'>{res.text}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default OurServicesDetail;