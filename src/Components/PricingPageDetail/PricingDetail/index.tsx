import React from 'react';
import Checkmark from '../../../Assets/Images/checkmark.png';
import PricingTitleCell from '../PricingTitleCell';
import CheckmarkCell from '../PricingCheckCell';
import BlankCell from '../PricingBlankCell';

const PricingDetail: React.FC = () => (
  <div className="pb-[50px]">
    <div className="bg-Neutral100 h-[110px] lg:h-[200px] font-Leitura flex">
      <div className="text-[36px] md:text-[48px] lg:container  2xl:pl-80 xl:pl-60 lg:pl-40 flex flex-row items-center ml-[20px]">
        Pricing
      </div>
    </div>
    <div className="2xl:px-80 xl:px-60 lg:px-44 lg:pt-[50px] pt-[20px] pl-[20px] pr-[20px]">
      <div className="font-Leitura text-[24px] md:text-[36px] md:w-auto w-[300px]">
        Full Service Property Management
      </div>
      <div className="font-Arial lg:pt-[50px] pt-[20px] w-auto text-Black400 text-[16px]">
        {/* <div>
          Hawaii PM is a locally owned full-service property management and real
          estate company based in Honolulu. A company with combined 50 years of
          experience.
        </div> */}
        <div className="overflow-x-auto">
          <table className="table-auto mx-auto font-[16px]">
            <thead>
              <tr className="text-black text-[16px]">
                <th className=""></th>
                <th className="bg-Green300 rounded-t-[15px] p-[5px]">
                  Long Term
                </th>
                <th className="bg-Green200 rounded-t-[15px] p-[5px]">
                  Long Term
                </th>
                <th className="bg-Green100 rounded-t-[15px] p-[5px]">
                  Short Term
                </th>
              </tr>
            </thead>
            <tr className="text-black text-[24px] font-Leitura">
              <th className=""></th>
              <th
                className="bg-Neutral200
             p-[20px] "
              >
                Full Service
                <br />
                <span className="text-[14px] font-Arial font-normal">
                  9% + Leasing (1/2 month rent)
                </span>
                <br />
                <span className="text-[14px] font-Arial font-normal"></span>
              </th>
              <th className="bg-Neutral200  p-[20px] ">
                Leasing Only <br />
                <span className="text-[14px] font-Arial font-normal">
                  1-month rent
                </span>
              </th>
              <th className="bg-Neutral200  p-[20px] `">
                Full Service <br />
                <span className="text-[14px] font-Arial font-normal">18%</span>
              </th>
            </tr>
            {/* <tr className="text-[14px]">
            <td className="font-bold p-[20px]">Monthly Management Fee</td>
            <td className="p-[20px]">9% only charged when rent is paid.</td>
            <td className="p-[20px]"></td>
            <td className="p-[20px]">
              18% of revenue (excludes state taxes and platform fees)
            </td>
          </tr>
          <tr className="text-[14px]">
            <td>
              <span className=" p-[20px] font-bold">Leasing Fee</span>
            </td>
            <td className="p-[20px]">
              50% of one month's rent, charged at move in.
            </td>
            <td className="p-[20px]">1-months rent, charged at move in.</td>
            <td className="p-[20px]"></td>
          </tr> */}

            <tr className="bg-Green100 text-Neutral100">
              <td className=" p-[20px]">Guarantees</td>
              <td className="p-[0px]"></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <PricingTitleCell
                title="Revenue Guarantee"
                content="Long-term rentals in 30 days or less, or cover the rent until we do. Vacation rentals earn at least $5,000 in the first year with us or we'll make up the difference."
              />

              <CheckmarkCell />
              <BlankCell />
              <CheckmarkCell />
            </tr>
            <tr>
              <PricingTitleCell
                title="Pet Damage Guarantee"
                content="Long-term: We collect a $500 refundable pet deposit per pet. (Does not apply to service animals). Short-term rental: any documented damages will be charged to the guest"
              />

              <CheckmarkCell />
              <BlankCell />
              <CheckmarkCell />
            </tr>
            <tr>
              <PricingTitleCell
                title="Management Fee Guarantee"
                content="We believe that if we aren't making you money we shouldn't be making money! You only pay us a management fee if we successfully collect rents."
              />

              <CheckmarkCell />
              <BlankCell />
              <CheckmarkCell />
            </tr>
            <tr>
              <PricingTitleCell
                title="Tenant Placement Guarantee"
                content="If we place a tenant and they break their lease during the first 12 months - we will re-lease it for free"
              />

              <CheckmarkCell />
              <BlankCell />
              <BlankCell content="Not Applicable" />
            </tr>

            <tr>
              <PricingTitleCell
                title="Leasing Fee Guarantee"
                content="You don't pay us a leasing fee until we have a signed lease AND money paid from the tenant"
              />

              <CheckmarkCell />
              <CheckmarkCell />
              <BlankCell content="Not Applicable" />
            </tr>
            <tr>
              <PricingTitleCell
                title="Satisfaction Guarantee"
                content="In the event Hawaii PM fails to meet our obligations under the management agreement, clients may cancel at any time without penalty for failure to perform, with 30 day written notice."
              />

              <CheckmarkCell />
              <CheckmarkCell />
              <CheckmarkCell />
            </tr>
            <tr>
              <PricingTitleCell
                title="Legal Compliance Guarantee"
                content="Our lease agreement is reviewed and approved by an attorney in the state of Hawaii. We operate in compliance all Federal, State, and Local fair housing laws."
              />

              <CheckmarkCell />
              <CheckmarkCell />
              <CheckmarkCell />
            </tr>
            <tr className="bg-Green100 text-Neutral100">
              <td className="p-[20px]">Property Marketing</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <PricingTitleCell title="Custom Rental Analysis" />
              <CheckmarkCell />
              <CheckmarkCell />
              <CheckmarkCell />
            </tr>
            <tr>
              <PricingTitleCell
                title="Make-Ready Project Management"
                content="We oversee the entire make-ready for your property from rehab to final cleaning and ensure the property meets all legal habitability requirements."
              />
              <CheckmarkCell />
              <CheckmarkCell />
              <CheckmarkCell />
            </tr>
            <tr>
              <PricingTitleCell title="High Quality Photos" />

              <CheckmarkCell />
              <CheckmarkCell />
              <CheckmarkCell />
            </tr>
            <tr>
              <PricingTitleCell
                title="Video Walkthrough"
                content="Serves as documentation of the property condition and allows properties to be pre-advertised and easily viewed from any device."
              />

              <CheckmarkCell />
              <CheckmarkCell />
              <CheckmarkCell />
            </tr>
            <tr>
              <PricingTitleCell
                title="3D Virtual Tour"
                content="Serves as documentation of the property condition and allows properties to be pre-advertised and easily viewed from any device."
              />

              <CheckmarkCell />
              <CheckmarkCell />
              <CheckmarkCell />
            </tr>
            <tr>
              <PricingTitleCell
                title="Live Agent Phone Service"
                content="Our local team of leasing experts work to answer questions, pre-qualify prospects, and setup showings for your property."
              />
              <CheckmarkCell />
              <CheckmarkCell />
              <CheckmarkCell />
            </tr>
            <tr>
              <PricingTitleCell
                title="Customized Property Website"
                content="Income, Employment, Credit Check, Pre-Qualifications, Eviction Check, Landlord Verification, Sex Offender Check, Public Records, Criminal Check, Bankruptcy Check, Pet Verification, Credit History"
              />
              <CheckmarkCell />
              <CheckmarkCell />
              <CheckmarkCell />
            </tr>
            <tr>
              <PricingTitleCell
                title="Paid Advertising on Rental Platforms"
                content="Google, MLS, Airbnb, VRBO, Expedia, Zillow, Trulia, Apartments.com,Zumper, Realtor.com, and more."
              />
              <CheckmarkCell />
              <CheckmarkCell />
              <CheckmarkCell />
            </tr>
            <tr>
              <PricingTitleCell
                title="Customized Property Website"
                content="Your property will receive a customized URL complete with all marketing materials, and options to schedule a showing or submit an application."
              />
              <CheckmarkCell />
              <CheckmarkCell />
              <CheckmarkCell />
            </tr>
            <tr className="bg-Green100 text-Neutral100">
              <td className=" p-[20px]">Property Management</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <PricingTitleCell
                title="24/7 Resident Maintenance Service"
                content="When emergencies happen we take care of it 24/7."
              />
              <CheckmarkCell />
              <BlankCell />
              <CheckmarkCell />
            </tr>
            <tr>
              <PricingTitleCell
                title="Maintenance Coordination"
                content="We only work with pre-approved vendors and ensure they meet our expectations for speed, price, and quality of work."
              />

              <CheckmarkCell />
              <BlankCell />
              <CheckmarkCell />
            </tr>
            <tr>
              <PricingTitleCell
                title="Lease Enforcement"
                content="If something goes wrong we are experienced in enforcing lease/reservation compliance."
              />
              <CheckmarkCell />
              <BlankCell />
              <CheckmarkCell />
            </tr>
            <tr>
              <PricingTitleCell
                title="Property Inspection on Lease Renewal"
                content="We look for lease violation issues and outstanding or preventative maintenance items. A report is provided to you including pictures. For short term rentals we do this weekly."
              />
              <CheckmarkCell />
              <BlankCell />
              <CheckmarkCell />
            </tr>
            {/* <tr>
              <PricingTitleCell
                title="Optional Detailed Semi-annual Property Inspection"
                content="CONTENT"
              />

              <CheckmarkCell />
              <CheckmarkCell />
              <BlankCell />
            </tr> */}
            <tr>
              <PricingTitleCell
                title=" Eviction Services"
                content="Although an eviction is rare, when necessary we are able to oversee this legal process."
              />

              <CheckmarkCell />
              <BlankCell />
              <CheckmarkCell />
            </tr>
            <tr>
              <PricingTitleCell
                title="Lease Renewal Process"
                content="We prepare a market analysis and negotiate a lease renewal with the current resident. We take into account things like current market rate, the quality of the current resident, length of tenancy, and more. For short-term rentals we monitor the prices near daily."
              />

              <CheckmarkCell />
              <BlankCell />
              <CheckmarkCell />
            </tr>
            <tr>
              <PricingTitleCell
                title="HOA Coordination"
                content="We handle all HOA contact and communication."
              />

              <CheckmarkCell />
              <BlankCell />
              <CheckmarkCell />
            </tr>
            <tr>
              <PricingTitleCell
                title="Security Deposit at Move Out"
                content="We handle the security deposit return including withholding any necessary funds. We ensure compliance with the detailed Hawaii laws that govern this legal process."
              />
              <CheckmarkCell />
              <BlankCell />
              <CheckmarkCell />
            </tr>
            <tr>
              <PricingTitleCell
                title="Lease Preparation & Signing"
                content="Generally not applicable to short term rentals, but if its decided doing a long 1-2 month stay is prudent then we will handle all the paperwork."
              />
              <CheckmarkCell />
              <BlankCell />
              <CheckmarkCell />
            </tr>
            {/* <tr>
              <PricingTitleCell
                title=" Move-in Condition Documentation"
                content="CONTENT"
              />

              <CheckmarkCell />
              <CheckmarkCell />
              <BlankCell />
            </tr> */}
            <tr>
              <PricingTitleCell
                title="Move-in Coordination"
                content="When the resident vacates, we handle the security deposit return including withholding any necessary funds. We ensure compliance with the detailed Hawaii laws that govern this legal process."
              />
              <CheckmarkCell />
              <BlankCell />
              <CheckmarkCell />
            </tr>
            <tr>
              <PricingTitleCell
                className="border-b-[1px]"
                title="Utility Transfer"
                content="We transfer all utilities into the residents name through the corresponding utility companies"
              />

              <CheckmarkCell />
              <BlankCell />
              <BlankCell content="Not Applicable" />
            </tr>
            <tr className="bg-Green100 text-Neutral100">
              <td className=" p-[20px]">Financial Reporting</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <PricingTitleCell
                title="Rent Collection"
                content="Residents have multiple payment options including AHC, bank draft, check, even credit card."
              />
              <CheckmarkCell />
              <BlankCell />
              <CheckmarkCell />
            </tr>
            <tr>
              <PricingTitleCell
                title="Monthly Reporting"
                content="You receive a detailed income & expense statement from us each month reflecting all financial activity including copies of all receipts and paid invoices."
              />
              <CheckmarkCell />
              <BlankCell />
              <CheckmarkCell />
            </tr>
            <tr>
              <PricingTitleCell
                title="ACH Owner Payments"
                content="You receive a detailed income & expense statement from us each month reflecting all financial activity including copies of all receipts and paid invoices."
              />
              <CheckmarkCell />
              <CheckmarkCell />
              <CheckmarkCell />
            </tr>
            <tr>
              <PricingTitleCell
                title="Year-End Tax Statement"
                content="We provide you with a year end 1099 and all the necessary legal paperwork you need to file your taxes."
              />

              <CheckmarkCell />
              <CheckmarkCell />
              <CheckmarkCell />
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
);

export default PricingDetail;
