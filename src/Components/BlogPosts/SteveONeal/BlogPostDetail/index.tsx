import React from 'react';
import Blog2 from '../../../../Assets/Images/Blog2.png';
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
  { id: 2, text: 'Quality Of Service' },
  { id: 3, text: 'Long-Term Rental' },
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
      <img src={Blog2} alt="Blog2" className="w-[100%] h-[400px]" />
      <div className="rext-center md:flex justify-between pt-[20px] xl:pl-[80px] lg:px-[30px]">
        <div className="lg:w-[600px] font-Leitura text-[24px] xl:text-[36px]">
          Home Owner Story: Steve O'Neal
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
          We're back with another captivating homeowner story, and this time, we
          dive into the real estate world of Steve O'Neal. Steve, a landlord
          with 7 units in San Francisco and 4 units in Berkeley, shares his
          experiences working with Colby and his property management business,
          Stinson Beach Property Management (now Hawaii PM). This story
          showcases the profound effect of a dedicated property manager on a
          real estate portfolio.
        </div>
        <div className="pt-[20px]">Here is her story:</div>
        <div className="pt-[40px] ml-6">"Dear Sir/Madam,</div>
        <div className="pt-[20px] ml-6">
          I hope this finds you well. I am a landlord with 7 units in San
          Francisco and 4 units in Berkeley and wanted to write a reference for
          Colby Gilbert and his property management business.
        </div>
        <div className="pt-[20px] ml-6">
          Colby is a great guy, and I’ve watched him get his company off the
          ground and provide real value to his clients. His focus and
          single-mindedness is impressive.
        </div>
        <div className="pt-[20px] ml-6">
          He knows how to screen tenants well, and then maintain an on-going and
          respectful relationship with them after they sign a lease. Previous
          managers never quite understood the disastrous and costly effects of
          having tenant relationships sour.
        </div>
        <div className="pt-[20px] ml-6">
          Colby has a broad general knowledge of the trades and often saves me
          money on maintenance calls by fixing things himself and
          troubleshooting with tenants directly, often saving either of us a
          trip to the building.
        </div>
        <div className="pt-[20px] ml-6">
          Colby is committed to excellence and takes full ownership of his
          responsibilities. He is reliable, responsible, and professional and
          has my highest recommendation.
        </div>
        <div className="pt-[20px] ml-6">
          Sincerely,
          <br />
          <br />
          Steve O’Neal"
        </div>
        <div className="pt-[40px] font-bold">The Hawaii PM Difference:</div>
        <div className="pt-[20px]">
          For homeowners and landlords seeking a trustworthy and capable
          property manager, the journey of Steve O'Neal with Colby's property
          management business serves as a compelling example of the power of
          professional property management.
        </div>
        <div className="pt-[20px]">
          If you're looking to elevate your real estate investment, consider the
          impact that a dedicated property manager can have, just as Steve did.
          Steve's recommendation and experiences are a testament to the value of
          a trusted partnership in real estate management.
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
