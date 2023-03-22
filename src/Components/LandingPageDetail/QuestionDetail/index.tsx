import React from 'react';
import Room from "../../../Assets/Images/Room.png";

const Recent = [
  [{ id: 1, text: "Am I a good fit for Hawaii Property Management?", content: "The mug is round. The jar is round. They should call it Roundtine." },
  { id: 5, text: "How much will I earn?", content: "The best way to answer this is to give you a detailed 12-month revenue projection. Give us a call, and we collect the info we need to create an accurate forecast and get back to you in 24hrs." },
  { id: 3, text: "Can I cancel at any time?", content: "The best way to answer this is to give you a detailed 12-month revenue projection. Give us a call, and we collect the info we need to create an accurate forecast and get back to you in 24hrs." },
  { id: 4, text: "Can I stay at my own place?", content: "The best way to answer this is to give you a detailed 12-month revenue projection. Give us a call, and we collect the info we need to create an accurate forecast and get back to you in 24hrs." }],
  [{ id: 2, text: "Do you ever have issues with guests damaging the property?", content: "The mug is round. The jar is round. They should call it Roundtine." },
  { id: 6, text: "How are guests vetted?", content: "The best way to answer this is to give you a detailed 12-month revenue projection. Give us a call, and we collect the info we need to create an accurate forecast and get back to you in 24hrs." },
  { id: 7, text: "Will I have to worry about taxes?", content: "The mug is round. The jar is round. They should call it Roundtine." },
  { id: 8, text: "How do I get started?", content: "The mug is round. The jar is round. They should call it Roundtine." }],
];

const QuestionDetail: React.FC = () => (
  <div className='lg:container 2xl:pl-80 xl:pl-60 lg:pl-30 pl-[20px] pr-[20px]'>
    <div className='font-Leitura md:text-[36px] text-[20px] text-center pt-[70px]'>
      Your questions answered
    </div>
    <div className='flex flex-wrap justify-between pt-[30px]'>
      {Recent?.map((item, index) => (
        <ul key={index}>
          {item.map(res => (
            <div className='pt-[20px]' key={res?.id}>
              <div className='w-auto xl:w-[500px] lg:w-[400px] md:w-[350px] h-auto border-2 rounded-lg font-Arial'>
                <details>
                  <summary className='flex flex-row justify-between cursor-pointer'>
                    <div className='p-[10px] text-[16px]'>{res?.text}</div>
                    <span className='rounded-r'></span>
                  </summary>
                  <div className="mt-3 text-sm text-[16px] pb-[10px] leading-6 pl-[10px]">
                    {res?.content}
                  </div>
                </details>
              </div>
            </div>
          ))}
        </ul>
      ))}
    </div>
    <div className='pt-[50px] pb-[50px]'>
      <div className='relative w-full h-[432px] xl:h-[486px] lg:h-[400px]' style={{ backgroundImage: `url(${Room})` }}>
        <div className='w-[100%] h-[100%] md:w-auto md:h-auto absolute top-[150px] 2xl:top-[190px] 2xl:left-[510px] xl:top-[190px] xl:left-[400px] lg:top-[150px] lg:left-[400px]  md:top-[150px] md:left-[250px] text-center'>
          <div className='font-Leitura text-[36px] text-Neutral000'>
            Ready to Earn?
          </div>
          <div className='pt-[20px] font-Arial'>
            <button className='w-[200px] h-[44px] text-[16px] bg-Green100 text-Neutral000 rounded-lg'>Get Started</button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default QuestionDetail;