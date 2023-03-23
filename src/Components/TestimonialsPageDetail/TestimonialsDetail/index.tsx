import React from 'react';
import TestimonialsIcon from '../../../Assets/Images/TestimonialsIcon.svg';
import User from '../../../Assets/Images/User.png';
import DividerIcon from '../../../Assets/Images/DividerIcon.svg';

const xyz = [
  [
    {
      id: 1,
      pictures: User,
      name: 'Kathryn Murphy',
      text: 'Acme Corporation',
      content:
        'Lorem ipsum dolor sit amet consectetur. Proin consequat amet elementum elementum magna et morbi massa. Praesent at tellus habitasse commodo faucibus eros cursus faucibus. Molestie in nibh tincidunt at. Magna tincidunt tellus nisl eget praesent mi.',
    },
    {
      id: 2,
      pictures: User,
      name: 'Leslie Alexander',
      text: 'C.A.G Novus',
      content:
        'Lorem ipsum dolor sit amet consectetur. Egestas nulla lobortis adipiscing nunc nulla neque. Egestas tristique ipsum dictum fermentum ultrices. Sagittis posuere aliquet enim aliquet blandit enim arcu suscipit diam. Sed in viverra eget purus. Lorem volutpat fermentum malesuada praesent viverra habitasse felis at. Risus enim consequat cras ut sem risus senectus cursus. Integer ultrices mauris justo vitae odio in.',
    },
    {
      id: 3,
      pictures: User,
      name: 'Cody Fisher',
      text: 'Forrit',
      content:
        'Lorem ipsum dolor sit amet consectetur. Proin consequat amet elementum elementum magna et morbi massa. Praesent at tellus habitasse commodo faucibus eros cursus faucibus. Molestie in nibh tincidunt at. Magna tincidunt tellus nisl eget praesent mi.',
    },
  ],
  [
    {
      id: 4,
      pictures: User,
      name: 'Jane Cooper',
      text: 'Clerk.io',
      content:
        'Lorem ipsum dolor sit amet consectetur. Egestas nulla lobortis adipiscing nunc nulla neque. Egestas tristique ipsum dictum fermentum ultrices. Sagittis posuere aliquet enim aliquet blandit enim arcu suscipit diam. Sed in viverra eget purus. Lorem volutpat fermentum malesuada praesent viverra habitasse felis at. Risus enim consequat cras ut sem risus senectus cursus. Integer ultrices mauris justo vitae odio in.',
    },
    {
      id: 5,
      pictures: User,
      name: 'Cameron Williamson',
      text: 'Solid Media AS',
      content:
        'Lorem ipsum dolor sit amet consectetur. Proin consequat amet elementum elementum magna et morbi massa. Praesent at tellus habitasse commodo faucibus eros cursus faucibus. Molestie in nibh tincidunt at. Magna tincidunt tellus nisl eget praesent mi.',
    },
    {
      id: 6,
      pictures: User,
      name: 'Devon Lane',
      text: 'Mediafy',
      content:
        'Lorem ipsum dolor sit amet consectetur. Proin consequat amet elementum elementum magna et morbi massa. Praesent at tellus habitasse commodo faucibus eros cursus faucibus. Molestie in nibh tincidunt at. Magna tincidunt tellus nisl eget praesent mi.',
    },
  ],
  [
    {
      id: 7,
      pictures: User,
      name: 'Wade Warren',
      text: 'LM Care',
      content:
        'Lorem ipsum dolor sit amet consectetur. Proin consequat amet elementum elementum magna et morbi massa. Praesent at tellus habitasse commodo faucibus eros cursus faucibus. Molestie in nibh tincidunt at. Magna tincidunt tellus nisl eget praesent mi.',
    },
    {
      id: 8,
      pictures: User,
      name: 'Jenny Wilson',
      text: 'MT Sales',
      content:
        'Lorem ipsum dolor sit amet consectetur. Proin consequat amet elementum elementum magna et morbi massa. Praesent at tellus habitasse commodo faucibus eros cursus faucibus. Molestie in nibh tincidunt at. Magna tincidunt tellus nisl eget praesent mi.',
    },
    {
      id: 9,
      pictures: User,
      name: 'Theresa Webb',
      text: 'Tilitoimisto Lemon Tree Oy',
      content:
        'Lorem ipsum dolor sit amet consectetur. Egestas nulla lobortis adipiscing nunc nulla neque. Egestas tristique ipsum dictum fermentum ultrices. Sagittis posuere aliquet enim aliquet blandit enim arcu suscipit diam. Sed in viverra eget purus. Lorem volutpat fermentum malesuada praesent viverra habitasse felis at. Risus enim consequat cras ut sem risus senectus cursus. Integer ultrices mauris justo vitae odio in.',
    },
  ],
];

const TestimonialsDetail: React.FC = () => {
  return (
    <div className="pb-[50px]">
      <div className="bg-Neutral100 h-[110px] lg:h-[200px] font-Leitura flex">
        <div className="text-[36px] text-[48px] lg:container  2xl:pl-80 xl:pl-60 lg:pl-40 flex flex-row items-center ml-[20px]">
          Testimonials
        </div>
      </div>
      <div className="2xl:px-80 xl:px-64 lg:px-44 pt-[50px] pl-[20px] pr-[20px]">
        <div className="font-Leitura text-[36px]">
          Testimonials and Thank You Notes
        </div>
        <div className="font-Arial text-[16px] text-Black400 pt-[50px]">
          Hawaii PM is committed to maximizing each and every clients
          investments. Our clients can say more about us than we ever could.
          Here are some testimonials and thank you notes from satisfied clients.
        </div>
        <div className="pt-[30px] grid grid-cols-1 gap-6 lg:gap-8 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 items-start">
          {xyz?.map(item => (
            <ul className="space-y-8">
              {item?.map(res => (
                <li className="2xl:w-[370px] xl:w-[300px] lg:w-[230px] h-auto border-2 rounded-lg text-sm leading-6">
                  <div className="text-center font-Arial text-Black-400 pt-[20px] pb-[20px] pl-[20px] pr-[20px]">
                    <div className="flex justify-center">
                      <img src={TestimonialsIcon} alt="TestimonialsIcon" />
                    </div>
                    <div className="pt-[20px] text-[16px] text-Black400">{res.content}</div>
                    <div className="pt-[50px] flex justify-center">
                      <img src={DividerIcon} alt="Divider" />
                    </div>
                    <div>
                      <ul className="divide-y divide-slate-200 pt-[30px]">
                        <li className="first:pt-0 last:pb-0">
                          <div className="flex justify-center">
                            <img src={res?.pictures} alt={`${res?.id}`} />
                          </div>
                          <div className="ml-3 overflow-hidden">
                            <p className="font-bold text-Black100 text-[16px]">{res.name}</p>
                            <p className="truncate text-Black400 text-[12px]">{res.text}</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ))}
        </div>
        <div className="pt-[30px] text-center font-Arial">
          <button className="w-[100%]  md:w-[230px] lg:w-[250px] h-[44px] text-Green100 border-2 border-Green100 rounded-lg">
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsDetail;
