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
      <img src={Blog2} alt="Blog2" className="w-[100%] h-[400px]" />
      <div className="rext-center md:flex justify-between pt-[20px] xl:pl-[80px] lg:px-[30px]">
        <div className="lg:w-[600px] font-Leitura text-[24px] xl:text-[36px]">
          Home Owner Story: Kathleen Hurley
        </div>
        {/* <div className="w-[112px] flex flex-row items-start gap-[20px] sm:w-[25%] pt-[10px]">
          <img src={FacebookIcon} alt="facebook" />
          <img src={InstagramIcon} alt="instagram" />
          <img src={YoutubeIcon} alt="youtube" />
        </div> */}
      </div>
      <div className="font-Arial text-Black400 text-[14px] xl:pl-[80px] lg:pl-[30px] pt-[20px]">
        By Colby Gilbert on September 10th, 2023
      </div>
      <div className="font-Arial text-Black100 text-[16px] xl:pl-[80px] lg:pl-[30px] xl:pr-[150px] lg:pr-[100px]">
        <div className="lg:border-r-2 mt-[30px] border-b-2"></div>
        <div className="pt-[20px]">
          Welcome to another inspiring homeowner story, where we shine a
          spotlight on Kathleen Hurley and her journey with Stinson Beach
          Property Management (now Hawaii PM). Kathleen's experience is a
          testament to the transformation and financial success that can come
          from partnering with a dedicated property management company.
        </div>
        <div className="pt-[20px]">Here is her story:</div>
        <div className="pt-[40px] ml-6">"Dear Reader,</div>
        <div className="pt-[20px] ml-6">
          I’ve owned my property on Calle Del Occidente for 13 years consisting
          of a double lot with yard and two small cottages known locally as the
          Mouse Hole and Casita Azul. My management company for a dozen years
          was the local realtor from whom I purchased it.
        </div>
        <div className="pt-[20px] ml-6">
          While I will always be grateful for their care of my property, in
          recent years I realized a marked decline in bookings and income. This
          seemed related to dropping VRBO ads and bookings. Colby was
          recommended to me through a mutual friend who knew of his successful
          property management work. After a short transition he took charge from
          the original managers in a cooperative, mutually agreeable manner. In
          transitioning, Colby showed me his analysis including comparable
          rentals where he evidenced excellent success at marketing on both VRBO
          and Airbnb. His other properties had nearly 100% bookings.
        </div>
        <div className="pt-[20px] ml-6">
          While I have only worked with Colby a few months, I immediately
          experienced a very welcome jump in bookings and income. Colby and I
          worked closely together to purchase needed set up items, new bedding
          and towels, etc. We set up special lockboxes. Through the changeover
          Colby managed to pull in as much or more income in three winter months
          last year than was credited through the first nine months of the year
          including the summer high season. We soon achieved nearly full
          bookings until the Shelter-in-Place orders required blocking our
          calendar.
        </div>
        <div className="pt-[20px] ml-6">
          Aside from financial benefits, Colby and his team keep my cottages and
          grounds in clean and appealing condition as evidenced by positive
          online guest comments. Colby created detailed checklists for every
          turnover to make sure the cottages are made appropriately ready for
          guests. Colby was also helpful in pointing out areas for improvement
          and maintenance to increase satisfaction of the guest renter
          experience.
        </div>
        <div className="pt-[20px] ml-6">
          When we had a glitch or trouble here or there Colby was quick to step
          up with solutions and to improve/rectify the issue. I am grateful to
          Colby and commend him for his effective management of my cottages.
        </div>
        <div className="pt-[20px] ml-6">
          Sincerely,
          <br />
          <br />
          Kathleen Hurley"
        </div>
        <div className="pt-[40px] font-bold">The Hawaii PM Impact:</div>
        <div className="pt-[20px]">
          Kathleen's story is a testament to the profitability of a property
          when proper care and dedication is given to a property.
        </div>
        <div className="pt-[20px]">
          In the first 3 months of working with Kathleen’s units generated
          revenue that equaled her previous 9 months. Make sure you are with a
          property manager that is committed to the success of your property.
        </div>
        <div className="pt-[20px]">
          This is the level of care I drive to instill in my team so we can
          deliver amazing results for our clients.
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
