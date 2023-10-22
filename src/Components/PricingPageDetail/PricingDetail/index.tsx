import React from 'react';
import Checkmark from '../../../Assets/Images/checkmark.png';
import PricingTitleCell from '../PricingTitleCell';
import CheckmarkCell from '../PricingCheckCell';
import BlankCell from '../PricingBlankCell';

const PricingDetail: React.FC = () => (
  <div className="pb-[50px]">
    <div className="bg-Neutral100 h-[110px] lg:h-[200px] font-Leitura flex">
      <div className="text-[36px] md:text-[48px] lg:container  2xl:pl-80 xl:pl-60 lg:pl-40 flex flex-row items-center ml-[20px]">
        About Us
      </div>
    </div>
    <div className="2xl:px-80 xl:px-60 lg:px-44 lg:pt-[50px] pt-[20px] pl-[20px] pr-[20px]">
      <div className="font-Leitura text-[24px] md:text-[36px] md:w-auto w-[300px]">
        Quality-Integrity-Experience
      </div>
      <div className="font-Arial lg:pt-[50px] pt-[20px] w-auto text-Black400 text-[16px]">
        <div>
          Hawaii PM is a locally owned full-service property management and real
          estate company based in Honolulu. A company with combined 50 years of
          experience.
        </div>
        <table className="mx-auto font-[16px]">
          <thead>
            <tr className="text-black text-[16px]">
              <th className="max-w-[300px]"></th>
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
            <th className="max-w-[260px]"></th>
            <th
              className="bg-Neutral200
             p-[20px] "
            >
              Full Service
              <br />
              <span className="text-[14px] font-Arial font-normal">9%</span>
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
            <td className="max-w-[300px] p-[20px]">Guarantees</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <PricingTitleCell title="Revenue Guarantee" content="CONTENT" />

            <CheckmarkCell />
            <CheckmarkCell />
            <BlankCell />
          </tr>
          <tr>
            <PricingTitleCell title="Pet Damage Guarantee" content="CONTENT" />

            <CheckmarkCell />
            <CheckmarkCell />
            <BlankCell />
          </tr>
          <tr>
            <PricingTitleCell
              title="Tenant Placement Guarantee"
              content="CONTENT"
            />

            <CheckmarkCell />
            <CheckmarkCell />
            <BlankCell />
          </tr>
          <tr>
            <PricingTitleCell
              title="Management Fee Guarantee"
              content="CONTENT"
            />

            <CheckmarkCell />
            <CheckmarkCell />
            <BlankCell />
          </tr>
          <tr>
            <PricingTitleCell title="Leasing Fee Guarantee" content="CONTENT" />

            <CheckmarkCell />
            <CheckmarkCell />
            <BlankCell />
          </tr>
          <tr>
            <PricingTitleCell
              title="Satisfaction Guarantee"
              content="CONTENT"
            />

            <CheckmarkCell />
            <CheckmarkCell />
            <BlankCell />
          </tr>
          <tr>
            <PricingTitleCell
              title="Legal Compliance Guarantee"
              content="CONTENT"
            />

            <CheckmarkCell />
            <CheckmarkCell />
            <BlankCell />
          </tr>
          <tr className="bg-Green100 text-Neutral100">
            <td className="max-w-[260px] p-[20px]">Property Marketing</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <PricingTitleCell
              title="Custom Rental Analysis"
              content="CONTENT"
            />
            <CheckmarkCell />
            <CheckmarkCell />
            <BlankCell />
          </tr>
          <tr>
            <PricingTitleCell
              title="Listing-Ready Project Management"
              content="CONTENT"
            />
            <CheckmarkCell />
            <CheckmarkCell />
            <BlankCell />
          </tr>
          <tr>
            <PricingTitleCell title="High Quality Photos" content="CONTENT" />

            <CheckmarkCell />
            <CheckmarkCell />
            <BlankCell />
          </tr>
          <tr>
            <PricingTitleCell title="Video Walkthrough" content="CONTENT" />

            <CheckmarkCell />
            <CheckmarkCell />
            <BlankCell />
          </tr>
          <tr>
            <PricingTitleCell title="3D Virtual Tour" content="CONTENT" />

            <CheckmarkCell />
            <CheckmarkCell />
            <BlankCell />
          </tr>
          <tr>
            <PricingTitleCell
              title="Live Agent Phone Service"
              content="CONTENT"
            />
            <CheckmarkCell />
            <CheckmarkCell />
            <BlankCell />
          </tr>

          <tr>
            <PricingTitleCell
              title="Customized Property Website"
              content="CONTENT"
            />
            <CheckmarkCell />
            <CheckmarkCell />
            <BlankCell />
          </tr>
          <tr>
            <PricingTitleCell
              title="Paid Advertising on Syndicated Rental Platforms"
              content="CONTENT"
            />
            <CheckmarkCell />
            <CheckmarkCell />
            <BlankCell />
          </tr>
          <tr className="bg-Green100 text-Neutral100">
            <td className="max-w-[260px] p-[20px]">
              Property Management
              <i className="tooltipicon"></i>
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <PricingTitleCell
              title="24/7 Resident Maintenance Service"
              content="CONTENT"
            />
            <CheckmarkCell />
            <CheckmarkCell />
            <BlankCell />
          </tr>
          <tr>
            <PricingTitleCell
              title="Maintenance Coordination"
              content="CONTENT"
            />

            <CheckmarkCell />
            <CheckmarkCell />
            <BlankCell />
          </tr>
          <tr>
            <PricingTitleCell title="Lease Enforcement" content="CONTENT" />
            <CheckmarkCell />
            <CheckmarkCell />
            <BlankCell />
          </tr>
          <tr>
            <PricingTitleCell
              title="Property Inspection on Lease Renewal"
              content="CONTENT"
            />
            <CheckmarkCell />
            <CheckmarkCell />
            <BlankCell />
          </tr>
          <tr>
            <PricingTitleCell
              title="Optional Detailed Semi-annual Property Inspection"
              content="CONTENT"
            />

            <CheckmarkCell />
            <CheckmarkCell />
            <BlankCell />
          </tr>
          <tr>
            <PricingTitleCell title=" Eviction Services" content="CONTENT" />

            <CheckmarkCell />
            <CheckmarkCell />
            <BlankCell />
          </tr>
          <tr>
            <PricingTitleCell title="Lease Renewal Process" content="CONTENT" />

            <CheckmarkCell />
            <CheckmarkCell />
            <BlankCell />
          </tr>
          <tr>
            <PricingTitleCell title="HOA Coordination" content="CONTENT" />

            <CheckmarkCell />
            <CheckmarkCell />
            <BlankCell />
          </tr>
          <tr>
            <PricingTitleCell
              title="Security Deposit Disposition at Move Out"
              content="CONTENT"
            />
            <CheckmarkCell />
            <CheckmarkCell />
            <BlankCell />
          </tr>
          <tr>
            <PricingTitleCell
              title="Lease Preparation & Signing"
              content="CONTENT"
            />
            <CheckmarkCell />
            <CheckmarkCell />
            <BlankCell />
          </tr>
          <tr>
            <PricingTitleCell
              title=" Move-in Condition Documentation"
              content="CONTENT"
            />

            <CheckmarkCell />
            <CheckmarkCell />
            <BlankCell />
          </tr>
          <tr>
            <PricingTitleCell title="Move-in Coordination" content="CONTENT" />
            <CheckmarkCell />
            <CheckmarkCell />
            <BlankCell />
          </tr>
          <tr>
            <PricingTitleCell
              className="border-b-[1px]"
              title="Utility Transfer"
              content="CONTENT"
            />

            <CheckmarkCell />
            <CheckmarkCell />
            <BlankCell />
          </tr>
        </table>
      </div>
    </div>
  </div>
);

export default PricingDetail;
