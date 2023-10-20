import React from 'react';
import DividerIcon from '../../../Assets/Images/DividerIcon.svg';
import Lisa from '../../../Assets/Images/LIsa.png';

const RevenueGuaranteeDetail: React.FC = () => (
  <div className="pb-[50px]">
    <div className="2xl:px-80 xl:px-60 lg:px-48 pl-[20px] pr-[20px]">
      <div className="xl:flex">
        <div className="font-Arial text-[16px] text-Black400 pt-[50px]">
          <div>
            Our <span className="font-bold">Revenue Guarantee*</span> is
            straightforward and simple: we are only successful when you are.
          </div>
          <div className="pt-[20px]">
            {/* <span className="font-bold">Switching property managers?</span>
            <br /> */}
            <span>
              For long term rentals we find qualified tenants for long-term
              rentals in 30 days or less, or cover the rent until we do.
              Vacation rentals earn at least $5,000 in the first year with us or
              we'll make up the difference.
            </span>
          </div>
          <div className="pt-[20px]">
            We know that choosing the right property manager can be difficult
            and stressful. You want to know you’re making the smartest decision
            for you, your family, and your vacation home.
          </div>
          <div className="pt-[20px]">
            That’s why we’ve created the{' '}
            <span className="font-bold">Hawaii PM Revenue Guarantee</span> to
            help you discover the smarter way to manage your property.
          </div>
          <div className="pt-[20px]">
            <span>
              By every measure, Hawaii PM has proven we know what it takes to
              make your vacation rental successful.
            </span>
          </div>
          <div className="pt-[20px]">
            We manage every aspect of your vacation rental, helping you earn
            more revenue with effective marketing, listing optimization, and a
            dedicated reservations team.
          </div>
          <div className="lg:border-r-2 mt-[30px] border-b-2"></div>
          <div className="pt-[30px] font-Arial text-Black400 text-[14px]">
            <div>*Hawaii PM Guarantee terms and conditions:</div>
            <div className="pt-[20px]">
              Short Term
              <br />
              We guarantee up to our management commission earned and the Hawaii
              PM Guarantee is not intended to solicit the breach of an existing
              vacation rental management agreement.
            </div>
            <div className="pt-[20px]">
              In order to initially qualify, you must have rented your vacation
              rental for at least one year (12 consecutive months) and be able
              to provide the proper documentation demonstrating your net rental
              revenue during that period.
            </div>
            <div className="pt-[20px]">
              The $5,000 guarantee is based on net revenue. The guarantee for
              owners managing their own property is also based on net rental
              revenue.
            </div>
            <div className="pt-[20px]">
              Long Term
              <br />
              We reimburse per day of rent over 30 days once unit is leased. Per
              day rate = (1 month rent / 30). 30 days starts once unit is
              advertised.
            </div>
          </div>
        </div>
        <div className="xl:pl-[70px] pt-[50px]">
          <div className="xl:w-[470px] bg-Neutral200 rounded-lg">
            <div className="pl-[20px] pr-[20px]">
              <div className="font-Arial font-bold pt-[20px] text-center text-[20px]">
                Testimonial
              </div>
              <div className="lg:border-r-2 mt-[20px] border-b-2"></div>
              {/* <div className="w-auto font-Arial pt-[20px] text-[16px] text-center text-Black400">
                I was managing my rental myself because I felt like no one would
                take as good care of my house as I would, but Colby has changed
                my view on that.{' '}
              </div> */}
              <div className="w-auto font-Arial pt-[20px] text-[16px] text-center text-Black400">
                He completely freed up my time, takes care of my home like his
                own, and has been able to increase my revenue in 2019 by 20%.
              </div>
              <div className="font-Arial pt-[20px] text-center text-Black400">
                <span className="font-bold text-[16px]">
                  I trust him to keep my beach house in sparkling condition
                </span>{' '}
                and highly recommend him to all property owners.
              </div>
              <div className="pt-[30px] flex justify-center">
                <img src={DividerIcon} alt="Divider" />
              </div>
              <div className="flex items-center justify-center pt-[20px]">
                <div className="w-[100px] h-[100px] bg-Neutral300 rounded-full ">
                  <img src={Lisa} />
                </div>
              </div>
              <div className="font-Arial text-[16px] text-center text-Black400 font-bold pt-[20px]">
                Lisa Levin
              </div>
              <div className="font-Arial text-[12px] text-center pb-[20px] text-Black400 pt-[20px]">
                Owner
                <br />
                Stinson Beach, CA
              </div>
              <div className=" flex pt-[5px] pb-[25px] font-Arial">
                <button className="mx-auto w-[100%] text-[16px] md:w-[200px] lg:w-[250px] h-[44px] text-Green100 border-2 border-Green100 rounded-lg outline-none">
                  Learn their story
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default RevenueGuaranteeDetail;
