import React from 'react';

const ContactDetail: React.FC = () => (
  <div className='pb-[50px]'>
    <div className='bg-Neutral100 h-[200px] font-Leitura flex'>
      <div className='text-[48px] lg:container  2xl:pl-80 xl:pl-60 lg:pl-40 flex flex-row items-center ml-[20px]'>
        Contact
      </div>
    </div>
    <div className='lg:container 2xl:pl-80 xl:pr-0 xl:pl-40 pt-[50px] pl-[20px] pr-[20px]'>
      <div className='lg:flex'>
        <div>
          <div className='font-Leitura text-[24px] font-bold'>Contact Form</div>
          <div className='lg:flex'>
            <div className='pt-[20px]'>
              <input placeholder='   Name' className='w-[100%] lg:w-[260px] h-[44px] border-2 rounded-lg' />
            </div>
            <div className='pt-[20px] lg:pl-[20px]'>
              <input placeholder='   Email' className='w-[100%] lg:w-[260px] h-[44px] border-2 rounded-lg' />
            </div>
          </div>
          <div className='pt-[20px]'>
            <input placeholder='   Message' className='w-[100%] lg:w-[550px] h-[160px] border-2 rounded-lg' />
          </div>
          <div className='pt-[20px]'>
            <button className='w-[100%]  md:w-[230px] lg:w-[250px] h-[44px] bg-Green100 text-Neutral000 rounded-lg'>Send</button>
          </div>
        </div>
        <div className='lg:pl-[70px]'>
          <div className='font-Leitura text-[24px] font-bold pt-[20px]'>Contact Form</div>
          <div className='text-Black400 font-Arial'>
            <div className='pt-[20px]'>Lorem ipsum dolor sit amet, sit vocent verear mediocrem ei. Facilis facilisis voluptatibus mei te, eu mea novum animal eligendi. Veri reque scripta cu vis, natum fugit pertinax ad nam. Integre percipitur complectitur his eu, id vocibus fastidii percipitur est.</div>
            <div className='pt-[20px]'>
              <span>Hawaii PM (R-XXXXX)</span><br />
              <span>1221 Kapiolani Blvd. Suite 6A4 </span><br />
              <span>Honolulu, HI 96814</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ContactDetail;