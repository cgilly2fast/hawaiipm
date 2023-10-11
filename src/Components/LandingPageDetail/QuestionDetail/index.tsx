import { Disclosure } from '@headlessui/react';
import React from 'react';
import Room from '../../../Assets/Images/Room.png';

const Recent = [
  [
    {
      id: 1,
      text: 'Am I a good fit for Hawaii PM?',
      content:
        'We exclusively take on clients who have properties in Hawaii and right now only the Honolulu metro area. Staying focused allows us to maximize revenue for clients.',
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
        'Yes. You can cancel our agreement with us at any time for no fee. Our agreement is simply for documentation and clarity around the services I am providing you and not binding in any way.',
    },
    {
      id: 4,
      text: 'Can I stay at my own place?',
      content:
        "Of course, it's your place! We do not limit homeowner use of vacation rentals.",
    },
  ],
  [
    {
      id: 5,
      text: 'Do guests ever damage the property?',
      content:
        "This is a very rare occupancy. People that can afford vacations in Hawaii are usually types that respect their home. If this did ever happen, you are still covered. In addition to our general liability insurance we gather evidence and submit a claim through Airbnb or VRBO's Resolution Center to charge the guest that provides protection for up to $1,000,000 in the rare event of guest damages. Homes are inspected for damage every turnover, so nothing is missed.",
    },
    {
      id: 6,
      text: 'How are guests vetted?',
      content:
        "For long term rental properties we evaluate payment history, previous landlord references, tenant and employment status to ensure the best fit for you. For short-term rental properties, we have developed a system that examines the guest profile, previous reviews, and message content to determine guest quality in addition to requiring a verified ID by Airbnb/VRBO's Trust & Safety Department.",
    },
    {
      id: 7,
      text: 'Will I have to worry about taxes?',
      content:
        'We take care of all collecting and remitting all County taxes, permits, and licenses for you.',
    },
    {
      id: 8,
      text: 'How do I get started?',
      content:
        'The fastest way to get started is to give us a call at 415-209-5847 or give us an email at Colby@HawaiiPM.com',
    },
  ],
];

const QuestionDetail: React.FC = () => (
  <div className="mx-auto max-w-[1920px] 2xl:px-80 xl:px-60 lg:px-32 pl-[20px] pr-[20px]">
    <div className="font-Leitura md:text-[36px] text-[24px] text-center pt-[70px]">
      Your questions answered
    </div>
    <div className="flex flex-wrap justify-center pt-[30px]">
      {Recent?.map((item, index) => (
        <ul key={index}>
          {item.map(res => (
            <div className="pt-[20px]" key={res?.id}>
              <div className="w-auto min-w-[320px] md:w-[365px] md:mr-4 lg:mr-6  border-[1px] rounded-lg font-Arial">
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
                            <div className="flex w-[55px] text-[30px] justify-center items-center">
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
    <div className="pt-[50px] pb-[50px] text-center">
      <div
        className="mx-auto block relative w-full max-w-[1170px] h-[336px] xl:h-[336px] lg:h-[400px]"
        style={{ backgroundImage: `url(${Room})` }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center">
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
