import React from 'react';
import Blog2 from '../../../../Assets//Images/Blog2.png';
import InstagramIcon from '../../../../Assets//Images/InstagramIcon.svg';
import YoutubeIcon from '../../../../Assets//Images/YoutubeIcon.svg';
import FacebookIcon from '../../../../Assets//Images/FacebookIcon.svg';
import DividerIcon from '../../../../Assets//Images/DividerIcon.svg';
import Recent1 from '../../../../Assets//Images/Recent1.png';
import Recent2 from '../../../../Assets//Images/Recent2.png';
import Recent3 from '../../../../Assets//Images/Recent3.png';
import Recent4 from '../../../../Assets//Images/Recent4.png';

const Button = [
  { id: 1, text: 'Real Estate Investment' },
  { id: 2, text: 'Property Manager Benefits' },
  { id: 3, text: 'Property Maintenance' },
  { id: 4, text: 'Tenant Screening' },
  { id: 5, text: 'Rent Collection Efficiency' },
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
          The Benefits of Hiring a Property Manager: Elevate Your Real Estate
          Investment
        </div>
        {/* <div className="w-[112px] flex flex-row items-start gap-[20px] sm:w-[25%] pt-[10px]">
          <img src={FacebookIcon} alt="facebook" />
          <img src={InstagramIcon} alt="instagram" />
          <img src={YoutubeIcon} alt="youtube" />
        </div> */}
      </div>
      <div className="font-Arial text-Black400 text-[14px] xl:pl-[80px] lg:pl-[30px] pt-[20px]">
        By Colby Gilbert on September 27th, 2023
      </div>
      <div className="font-Arial text-Black100 text-[16px] xl:pl-[80px] lg:pl-[30px] xl:pr-[150px] lg:pr-[100px]">
        <div className="lg:border-r-2 mt-[30px] border-b-2"></div>
        <div className="pt-[20px]">
          Owning and managing real estate can be a lucrative investment, but it
          comes with its fair share of responsibilities and challenges. From
          rent collection to property maintenance and tenant relations, the
          tasks can quickly become overwhelming. This is where a property
          manager steps in, offering expertise and experience to make your real
          estate investment as seamless as possible. In this blog post, we will
          discuss the reasons why you should consider using a property manager.
        </div>
        <div className="pt-[20px]">
          <span className="font-bold">Time-saving</span> <br />
          The primary benefit of working with a property manager is the
          time-saving aspect. A property manager will handle the day-to-day
          tasks of managing a property, freeing up your time to focus on other
          things like acquiring more properties. A good property manager makes
          your investment truly passive.
        </div>
        <div className="pt-[20px]">
          <span className="font-bold">
            Expertise in the Local Rental Market
          </span>
          <br />
          Property managers are intimately familiar with the local rental
          market. They have the knowledge to determine competitive rental rates,
          helping you maximize your property's income while ensuring it remains
          attractive to potential tenants.
        </div>
        <div className="pt-[20px]">
          <span className="font-bold">Tenant Screening</span>
          <br />A critical aspect of property management is tenant screening.
          Property managers have a well-established process for vetting
          potential tenants, which includes conducting background checks,
          reviewing credit histories, and checking references. This rigorous
          process helps secure reliable and responsible tenants.
        </div>
        <div className="pt-[20px]">
          <span className="font-bold">Property Maintenance & Repairs</span>
          <br />
          Property Maintenance and Repairs: Timely property maintenance and
          repairs are crucial to preserving the value of your investment.
          Property managers have a network of reliable contractors and can
          handle maintenance requests promptly, saving you the headache of
          dealing with repairs yourself.
        </div>
        <div className="pt-[20px]">
          <span className="font-bold">
            Efficient Rent Collection & Reporting
          </span>
          <br />
          Property managers have systems in place to streamline rent collection.
          They enforce lease terms and ensure that rent is paid on time. This
          goes hand in hand with quality accounting practices that will make
          your job very easy when it's tax season.
        </div>
        <div className="pt-[20px]">
          In summary, a good property manager will save you time, reduce stress,
          provide expertise, and increase your revenue. If you're a property
          owner looking for a more efficient and stress-free way to manage your
          rental property, consider giving us at Hawaii PM a call.
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
