import React from 'react';
import DividerIcon from "../../../Assets/Images/DividerIcon.svg";

const RevenueGuaranteeDetail: React.FC = () => (
  <div className='pb-[50px]'>
    <div className='lg:container 2xl:pl-80 2xl:pr-0 xl:pl-60 pl-[20px] pr-[20px]'>
      <div className='lg:flex'>
        <div className='font-Arial text-Black400 pt-[50px]'>
          <div>
            Our <span className='font-bold'>Revenue Guarantee*</span> is straightforward and simple: we are only successful when you are.
          </div>
          <div className='pt-[20px]'>
            <span className='font-bold'>Switching property managers?</span><br />
            <span>We guarantee you’ll make at least $5,000 more in your first year with us.</span>
          </div>
          <div className='pt-[20px]'>
            We know that choosing the right property manager can be difficult and stressful. You want to know you’re making the smartest decision for you, your family, and your vacation home.
          </div>
          <div className='pt-[20px]'>
            That’s why we’ve created the <span className='font-bold'>Hawaii PM Revenue Guarantee</span> to help you discover the smarter way to vacation rental.
          </div>
          <div className='pt-[20px]'>
            <span>By every measure, Hawaii PM has proven we know what it takes to make your vacation rental successful:</span><br />
            <li>Winning Travel Weekly’s Magellan Award for Vacation Rental Hospitality (twice!)</li>
            <li>Managing thousands of homes and hundreds of thousands of bookings</li>
            <li>More than 90% guest ratings of 4 or 5</li>
            <li>And more!</li>
          </div>
          <div className='pt-[20px]'>
            We manage every aspect of your vacation rental, helping you earn more revenue with effective marketing, listing optimization, and a dedicated reservations team.
          </div>
          <div className='lg:border-r-2 mt-[30px] border-b-2'></div>
          <div className='pt-[30px] font-Arial text-Black400'>
            <div>
              *Hawaii PM Guarantee terms and conditions:
            </div>
            <div className='pt-[20px]'>
              We guarantee up to our management commission earned and the Hawaii PM Guarantee is not intended to solicit the breach of an existing vacation rental management agreement.
            </div>
            <div className='pt-[20px]'>
              In order to initially qualify, you must have rented your vacation rental for at least one year (12 consecutive months) and be able to provide the proper documentation demonstrating your net rental revenue during that period.
            </div>
            <div className='pt-[20px]'>
              The $5,000 guarantee is based on net revenue. The guarantee for owners managing their own property is also based on net rental revenue.
            </div>
          </div>
        </div>
        <div className='lg:pl-[70px] pt-[50px]'>
          <div className='lg:w-[470px] h-[610px] md:h-[500px] lg:h-[570px] bg-Neutral200 rounded-lg'>
            <div className='pl-[20px] pr-[20px]'>
              <div className='font-Arial font-bold pt-[20px] text-center'>
                Testimonial
              </div>
              <div className='lg:border-r-2 mt-[20px] border-b-2'></div>
              <div className='w-auto font-Arial pt-[20px] text-center text-Black400'>
                Having made the switch to TurnKey, I feel I’m finally working with a manager who ‘gets it.’ They maximize my bookings while screening guests to take care of my property. TurnKey is the only property manager who can do both well. And their technology and housekeeping processes blow the doors off other property managers.
              </div>
              <div className='font-Arial pt-[20px] text-center text-Black400'>
                <span className='font-bold'>Hawaii PM is the gold standard</span> in vacation rental property management."
              </div>
              <div className='pt-[30px] flex justify-center'>
                <img src={DividerIcon} alt='Divider' />
              </div>
              <div className='flex items-center justify-center pt-[20px]'>
                <div className='w-[100px] h-[100px] bg-Neutral300 rounded-full '></div>
              </div>
              <div className='font-Arial text-center text-Black400 font-bold pt-[20px]'>Matt Golis</div>
              <div className='font-Arial text-center text-Black400 pt-[20px]'>
                Former Board Member of the
                Vacation Rental Management Association (VRMA)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default RevenueGuaranteeDetail;