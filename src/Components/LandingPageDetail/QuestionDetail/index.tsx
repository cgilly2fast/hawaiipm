import React from 'react';
import Room from "../../../Assets/Images/Room.png";

const QuestionDetail: React.FC = () => (
  <div className='container mx-auto xl:pl-[0px] xl:pr-[0px] pl-[20px] pr-[20px]'>
    <div className='font-Leitura text-[36px] text-center pt-[70px]'>
      Your questions answered
    </div>
    <div className='pt-[50px] lg:flex flex-row justify-around '>
      <div>
        <div className='w-auto xl:w-[550px] h-auto border-2 rounded-lg font-Arial'>
          <details>
            <summary className='flex flex-row justify-between cursor-pointer'>
              <div className='pt-[10px] pl-[10px]'>Am I a good fit for Hawaii Property Management?</div>
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
                <div className='pt-[10px] pl-[10px]'>Do you ever have issues with guests damaging the property?</div>
                <div className='w-[54px] h-auto bg-Neutral300 rounded-r-lg text-center flex justify-center items-center'>+</div>
              </summary>
              <div className="mt-3 text-sm leading-6 pl-[10px]">
                Yes. You can cancel our agreement with us at any time for no fee. Our agreement is simply for documentation and clarity around the services I am providing you and not binding in any way.
              </div>
            </details>
          </div>
        </div>
        <div className='pt-[20px]'>
          <div className='w-auto xl:w-[550px] h-auto border-2 rounded-lg font-Arial'>
            <details>
              <summary className='flex flex-row justify-between cursor-pointer'>
                <div className='pt-[10px] pl-[10px]'>Can I cancel at any time?</div>
                <div className='w-[54px] h-auto bg-Neutral300 rounded-r-lg text-center flex justify-center items-center'>+</div>
              </summary>
              <div className="mt-3 text-sm leading-6 pl-[10px]">
                Yes. You can cancel our agreement with us at any time for no fee. Our agreement is simply for documentation and clarity around the services I am providing you and not binding in any way.
              </div>
            </details>
          </div>
        </div>
        <div className='pt-[20px]'>
          <div className='w-auto xl:w-[550px] h-auto border-2 rounded-lg font-Arial'>
            <details>
              <summary className='flex flex-row justify-between cursor-pointer'>
                <div className='pt-[10px] pl-[10px]'>Can I stay at my own place?</div>
                <div className='w-[54px] h-auto bg-Neutral300 rounded-r-lg text-center flex justify-center items-center'>+</div>
              </summary>
              <div className="mt-3 text-sm leading-6 pl-[10px]">
                Yes. You can cancel our agreement with us at any time for no fee. Our agreement is simply for documentation and clarity around the services I am providing you and not binding in any way.
              </div>
            </details>
          </div>
        </div>
      </div>
      <div>
        <div className='pt-[20px] lg:pt-[0px]'>
          <div className='w-auto xl:w-[550px] h-auto border-2 rounded-lg font-Arial'>
            <details>
              <summary className='flex flex-row justify-between cursor-pointer'>
                <div className='pt-[10px] pl-[10px]'>How much will I earn?</div>
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
                <div className='pt-[10px] pl-[10px]'>How are guests vetted?</div>
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
                <div className='pt-[10px] pl-[10px]'>Will I have to worry about taxes?</div>
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
                <div className='pt-[10px] pl-[10px]'>How do I get started?</div>
                <div className='w-[54px] h-auto bg-Neutral300 rounded-r-lg text-center flex justify-center items-center'>+</div>
              </summary>
              <div className="mt-3 text-sm leading-6 pl-[10px]">
                The mug is round. The jar is round. They should call it Roundtine.
              </div>
            </details>
          </div>
        </div>
      </div>
    </div>
    <div className='pt-[50px] pb-[50px]'>
      <div className='relative w-full h-[432px] xl:h-[486px] lg:h-[400px]' style={{ backgroundImage: `url(${Room})` }}>
        <div className='absolute top-[150px] left-[60px] 2xl:top-[190px] 2xl:left-[670px] xl:top-[190px] xl:left-[560px] lg:top-[150px] lg:left-[400px]  md:top-[150px] md:left-[260px] text-center'>
          <div className='font-Leitura text-[36px] text-Neutral000'>
            Ready to Earn?
          </div>
          <div className='pt-[20px]'>
            <button className='w-[200px] h-[44px] bg-Green100 text-Neutral000 rounded-lg'>Get Started</button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default QuestionDetail;