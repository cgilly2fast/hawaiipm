import React from 'react';
import Blog2 from '../../../../Assets/Images/ScreenTenants.webp';
import InstagramIcon from '../../../Assets/Images/InstagramIcon.svg';
import YoutubeIcon from '../../../../Assets/Images/YoutubeIcon.svg';
import FacebookIcon from '../../../../Assets/Images/FacebookIcon.svg';
import DividerIcon from '../../../../Assets/Images/DividerIcon.svg';
import Recent1 from '../../../../Assets/Images/Recent1.png';
import Recent2 from '../../../../Assets/Images/Recent2.png';
import Recent3 from '../../../../Assets/Images/Recent3.png';
import Recent4 from '../../../../Assets/Images/Recent4.png';

const Button = [
  { id: 1, text: 'Tenant Screening Hawaii' },
  { id: 2, text: 'Income Verification' },
  { id: 3, text: 'Tenant Screening Techniques' },
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
          Comprehensive Tenant Screening in Hawaii: Finding the Perfect Fit for
          Your Property
        </div>
        {/* <div className="w-[112px] flex flex-row items-start gap-[20px] sm:w-[25%] pt-[10px]">
          <img src={FacebookIcon} alt="facebook" />
          <img src={InstagramIcon} alt="instagram" />
          <img src={YoutubeIcon} alt="youtube" />
        </div> */}
      </div>
      <div className="font-Arial text-Black400 text-[14px] xl:pl-[80px] lg:pl-[30px] pt-[20px]">
        By Colby Gilbert on October 3rd, 2023
      </div>
      <div className="font-Arial text-Black100 text-[16px] xl:pl-[80px] lg:pl-[30px] xl:pr-[150px] lg:pr-[100px]">
        <div className="lg:border-r-2 mt-[30px] border-b-2"></div>
        <div className="pt-[20px]">
          Screening tenants is an important step in property management. When
          screening tenants in Hawaii, it's important to not only consider their
          financial and rental history, but also their personality and
          character.
        </div>
        <div className="pt-[20px]">
          {/* <span className="font-bold">Time-saving</span> <br /> */}
          The goal is to identify kind laid-back tenants for your property and
          to minimize the risk of financial loss and property damage. In this
          blog post, we will discuss some effective techniques for screening
          tenants in Hawaii.
        </div>
        <div className="pt-[20px]">
          {/* <span className="font-bold">
            Expertise in the Local Rental Market
          </span>
          <br /> */}
          When it comes to evaluating potential tenants, a credit check is
          crucial. It gives you an idea of their financial responsibility and
          whether they have a history of late payments or outstanding debts.
          This information can help you determine if they are likely to pay
          their rent on time.
        </div>
        <div className="pt-[20px]">
          {/* <span className="font-bold">Tenant Screening</span>
          <br /> */}
          Another important aspect of tenant screening is verifying a potential
          tenant's income. This will help you determine if they can afford the
          rent and if they have a stable source of income. You can ask for pay
          stubs, bank statements, or a letter from an employer to verify their
          income.
        </div>
        <div className="pt-[20px]">
          {/* <span className="font-bold">Property Maintenance & Repairs</span>
          <br /> */}
          It's also important to check a potential tenant's rental history to
          see where they have lived before and how long they stayed. Contact
          their previous landlords to ask about their rental history, including
          whether they paid their rent on time and took care of the property.
        </div>
        <div className="pt-[20px]">
          {/* <span className="font-bold">
            Efficient Rent Collection & Reporting
          </span>
          <br /> */}
          Conducting a background check can reveal any criminal history or
          outstanding warrants. This can help you ensure the safety of other
          tenants and the property. It's important to verify a potential
          tenant's identity to ensure that they are who they say they are. Ask
          for a government-issued ID such as a driver's license or passport to
          confirm their identity.
        </div>
        <div className="pt-[20px]">
          If a potential tenant is employed, ask for a letter from their
          employer or a recent pay stub to verify their employment status.
        </div>

        <div className="pt-[20px]">
          Finally, ask the potential tenant for references, such as previous
          landlords or colleagues. Contact these references to learn more about
          the tenant's character and behavior.
        </div>
        <div className="pt-[20px]">
          Kind, laid-back tenants are more likely to have a positive
          relationship with their neighbors and be considerate of the community,
          more likely to take good care of your property, and less likely to
          cause conflicts or disturbances and are more likely to be easy-going
          and flexible.
        </div>

        <div className="pt-[20px]">
          By looking for these characteristics in addition to the traditional
          screening techniques, you can make informed decisions when it comes to
          renting out your property in Hawaii and increase the chances of
          finding tenants who will not only take care of your rental property,
          but also contribute positively to the community.
        </div>

        <div className="pt-[20px]">
          Here is an exact checklist to follow:
          <br />
          <br />
          <ul>
            <li>- Credit check</li>
            <li>- Income Verification</li>
            <li>- Rental history</li>
            <li>- Background check</li>
            <li>- Identity verifcation</li>
            <li>
              <span className="font-bold">- Kind and laid back</span>
            </li>
          </ul>
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
