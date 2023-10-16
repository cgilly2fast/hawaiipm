import React from 'react';
import Blog2 from '../../../../Assets/Images/LisaL.jpeg';
import InstagramIcon from '../../../Assets/Images/InstagramIcon.svg';
import YoutubeIcon from '../../../../Assets/Images/YoutubeIcon.svg';
import FacebookIcon from '../../../../Assets/Images/FacebookIcon.svg';
import DividerIcon from '../../../../Assets/Images/DividerIcon.svg';
import Recent1 from '../../../../Assets/Images/Recent1.png';
import Recent2 from '../../../../Assets/Images/Recent2.png';
import Recent3 from '../../../../Assets/Images/Recent3.png';
import Recent4 from '../../../../Assets/Images/Recent4.png';

const Button = [
  { id: 1, text: 'Owner Testimonial' },
  { id: 2, text: 'Increased Revenue' },
  { id: 3, text: 'Quality Of Service' },
  { id: 4, text: 'Short-Term Rental' },
];

const Plan = [
  { id: 1, pictures: Recent1 },
  { id: 2, pictures: Recent2 },
  { id: 3, pictures: Recent3 },
  { id: 4, pictures: Recent4 },
];

const BlogPostDetail: React.FC = () => (
  <div className="pb-[50px]">
    <div className="2xl:px-96 xl:px-72 lg:px-48 xl:pt-[70px] pt-[50px] pl-[20px] pr-[20px]">
      <img
        src={Blog2}
        alt="Blog2"
        className="mx-auto max-w-[550px] max-h-[550px]"
      />
      <div className="rext-center md:flex justify-between pt-[20px] xl:pl-[80px] lg:px-[30px]">
        <div className="lg:w-[600px] font-Leitura text-[24px] xl:text-[36px]">
          Home Owner Story: Lisa Levin
        </div>
        {/* <div className="w-[112px] flex flex-row items-start gap-[20px] sm:w-[25%] pt-[10px]">
          <img src={FacebookIcon} alt="facebook" />
          <img src={InstagramIcon} alt="instagram" />
          <img src={YoutubeIcon} alt="youtube" />
        </div> */}
      </div>
      <div className="font-Arial text-Black400 text-[14px] xl:pl-[80px] lg:pl-[30px] pt-[20px]">
        By Colby Gilbert on September 3rd, 2023
      </div>
      <div className="font-Arial text-Black100 text-[16px] xl:pl-[80px] lg:pl-[30px] xl:pr-[150px] lg:pr-[100px]">
        <div className="lg:border-r-2 mt-[30px] border-b-2"></div>
        <div className="pt-[20px]">
          Meet Lisa Levin, a homeowner who, like many others, was initially
          hesitant about entrusting her rental property to a property management
          company. In her case, it was Colby and his company, Stinson Beach
          Property Management (now Hawaii PM). However, Lisa's story is a
          testament to the transformative and positive experience that can come
          from finding the right property management partner.
        </div>
        <div className="pt-[20px]">Here is her story:</div>
        <div className="pt-[40px] ml-6">"To Whom It May Concern,</div>
        <div className="pt-[20px] ml-6">
          My name is Lisa Levin, and I began working with Colby and his company,
          Stinson Beach Property Management, in May of 2019.
        </div>
        <div className="pt-[20px] ml-6">
          I have worked with other property managers. At the time I met Colby, I
          was managing my rental myself because I felt like no one would take as
          good care of my house as I would, but Colby has changed my view on
          that. He completely freed up my time, takes care of my home like his
          own, and has been able to increase my revenue in 2019 by 20%.
        </div>
        <div className="pt-[20px] ml-6">
          He is very hands on, has great ideas for amenities that will delight
          guests and his judgment on which guests he allows on to my property
          has always been prudent.
        </div>
        <div className="pt-[20px] ml-6">
          Colby shares my vision of providing an amazing guest experience. I
          trust him to keep my beach house in sparkling condition and highly
          recommend him to all property owners.
        </div>
        <div className="pt-[20px] ml-6">
          Sincerely,
          <br />
          <br />
          Lisa Levin"
        </div>
        <div className="pt-[40px] font-bold">The Hawaii PM Difference:</div>
        <div className="pt-[20px]">
          I want Hawaii PM to be known for a hands-on, proactive approach to
          property management. This means striving to deliver exceptional
          service and elevate the guest experience, aligning seamlessly with
          Lisa's vision for her beachfront property.
        </div>
        <div className="pt-[20px]">
          Lisa Levin's experience with Stinson Beach Property Management is a
          testament to the power of finding the right property manager. Her
          trust in Colby and his team to keep her beach house in sparkling
          condition is a testament to the professional relationship they've
          built.
        </div>
        <div className="pt-[20px]">
          If you're a homeowner like Lisa, seeking a trusted partner to manage
          your property, Hawaii PM may be the key to your success.
        </div>
        <div className="flex flex-wrap">
          {Button.map(res => (
            <div
              className="pr-[20px] pt-[20px] font-Arial text-center"
              key={res.id}
            >
              <button className="pt-[10px] pl-[20px] pr-[20px] pb-[10px] text-[16px] text-Green100 border-2 border-Green100 rounded-full outline-none">
                {res.text}
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="pt-[50px] font-Arial text-center">
        <button className="w-[100%] md:w-[250px] h-[44px] bg-Green100 border-2 text-Neutral000 rounded-lg outline-none">
          Contact Us
        </button>
      </div>
      <div className="pt-[50px] flex justify-center">
        <img src={DividerIcon} alt="Divider" />
      </div>
      {/* <div className="font-Arial pt-[50px]">
        <div className="text-[24px] font-bold">Related Blog Posts</div>
        <div>
          <div className="md:flex flex-wrap justify-between pt-[30px] font-Arial">
            {Plan?.map(res => (
              <div
                key={res.id}
                className="pt-[20px] 2xl:max-w-[250px] xl:max-w-[200px] lg:max-w-[210px] md:max-w-[230px]"
              >
                <img
                  src={res?.pictures}
                  alt={`${res?.id}`}
                  className="w-[100%]"
                />
                <div className="border-x-2 border-b-2 py-[20px] rounded-b-lg text-center font-Arial px-[10px]">
                  <div className="text-[14px] font-bold">
                    Unlocking the Secrets of Mastering Time Management
                  </div>
                  <div className="pt-[10px] text-[14px] text-Black400">
                    Unlocking the Secrets of Mastering Time Management: A
                    Beginner's Guide" is an in-depth look at the...
                  </div>
                  <button className="pt-[10px] text-[14px] text-Green100 outline-none">
                    Read more
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </div>
  </div>
);

export default BlogPostDetail;
