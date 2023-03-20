import React from 'react';

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
  <div className='md:pt-[50px] pb-[50px]'>
    <div className='lg:container 2xl:pl-80 2xl:pr-0 xl:pl-60 pl-[20px] pr-[20px]'>
      <div className='container mx-auto xl:pl-[0px] xl:pr-[0px] pl-[20px] pr-[20px]'>
        <div className='font-Leitura text-[36px] font-bold'>
          Your questions answered
        </div>
        <div className='flex flex-wrap justify-around'>
          {Recent?.map(item => (
            <ul>
              {item.map(res => (
                <div className='pt-[20px]' key={res?.id}>
                  <div className='w-[350px] xl:w-[550px] lg:w-[400px] md:w-[350px] h-auto border-2 rounded-lg font-Arial'>
                    <details>
                      <summary className='flex flex-row justify-between cursor-pointer'>
                        <div className='p-[10px]'>{res?.text}</div>
                        <span className='rounded-r'></span>
                      </summary>
                      <div className="mt-3 text-sm leading-6 pl-[10px]">
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
);

export default QuestionDetail;