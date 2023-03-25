import { Disclosure } from '@headlessui/react';
import React from 'react';
import Room from '../../../Assets/Images/Room.png';

const Recent = [
  [
    {
      id: 1,
      text: 'Am I a good fit for Hawaii Property Management?',
      content:
        'The mug is round. The jar is round. They should call it Roundtine.',
    },
    {
      id: 5,
      text: 'How much will I earn?',
      content:
        'The best way to answer this is to give you a detailed 12-month revenue projection. Give us a call, and we collect the info we need to create an accurate forecast and get back to you in 24hrs.',
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
  [
    {
      id: 5,
      text: 'Do you ever have issues with guests damaging the property?',
      content:
        'The mug is round. The jar is round. They should call it Roundtine.',
    },
    {
      id: 6,
      text: 'How are guests vetted?',
      content:
        'The best way to answer this is to give you a detailed 12-month revenue projection. Give us a call, and we collect the info we need to create an accurate forecast and get back to you in 24hrs.',
    },
    {
      id: 7,
      text: 'Will I have to worry about taxes?',
      content:
        'The mug is round. The jar is round. They should call it Roundtine.',
    },
    {
      id: 8,
      text: 'How do I get started?',
      content:
        'The mug is round. The jar is round. They should call it Roundtine.',
    },
  ],
];

const QuestionDetail: React.FC = () => (
  <div className="2xl:px-80 xl:px-60 lg:px-32 pl-[20px] pr-[20px]">
    <div className="font-Leitura md:text-[36px] text-[20px] text-center pt-[70px]">
      Your questions answered
    </div>
    <div className="flex flex-wrap justify-between pt-[30px]">
      {Recent?.map((item, index) => (
        <ul key={index}>
          {item.map(res => (
            <div className="pt-[20px]" key={res?.id}>
              <div className="w-auto 2xl:w-[550px] xl:w-[450px] md:w-[350px] border-[1px] rounded-lg font-Arial">
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="w-[100%]">
                        <div className="flex w-[100%] justify-between text-left font-medium focus:outline-none">
                          <p
                            className={`${
                              open ? 'font-bold' : ''
                            } pl-4 text-[16px] w-[85%] py-[10px]`}
                          >
                            {res?.text}
                          </p>
                          {!open ? (
                            <div className="bg-Neutral300 text-[30px] flex justify-center items-center w-[55px]">
                              +
                            </div>
                          ) : (
                            <div className="rounded-r transition flex w-[55px] text-[30px] justify-center items-center">
                              -
                            </div>
                          )}
                        </div>
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-[16px] text-Black100 leading-6">
                        {res?.content}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>
            </div>
          ))}
        </ul>
      ))}
    </div>
    <div className="pt-[50px] pb-[50px]">
      <div
        className="relative w-full h-[432px] xl:h-[486px] lg:h-[400px]"
        style={{ backgroundImage: `url(${Room})` }}
      >
        <div className="w-[100%] h-[100%] md:w-auto md:h-auto absolute top-[150px] 2xl:top-[190px] 2xl:left-[510px] xl:top-[190px] xl:left-[400px] lg:top-[150px] lg:left-[260px]  md:top-[150px] md:left-[250px] text-center">
          <div className="font-Leitura text-[36px] text-Neutral000">
            Ready to Earn?
          </div>
          <div className="pt-[20px] font-Arial">
            <button className="w-[200px] h-[44px] text-[16px] bg-Green100 text-Neutral000 rounded-lg outline-none">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default QuestionDetail;
