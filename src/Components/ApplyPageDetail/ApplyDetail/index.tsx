import React from 'react';
import Key from '../../../Assets/Images/Key.png';
import DividerIcon from '../../../Assets/Images/DividerIcon.svg';
import { Link } from 'react-router-dom';

const ApplyDetail: React.FC = () => (
  <div className="pb-[50px]">
    <div className="bg-Neutral100 h-[110px] lg:h-[200px] font-Leitura flex">
      <div className="text-[36px] lg:text-[48px] lg:container  2xl:pl-80 xl:pl-60 lg:pl-40 flex flex-row items-center ml-[20px]">
        Applying for Rental
      </div>
    </div>
    <div className="max-w-[1920px] mx-auto 2xl:px-80 xl:px-64 lg:px-44 pt-[50px] pl-[20px] pr-[20px]">
      <div className="xl:flex flex-row">
        <img src={Key} alt="key" className="w-auto max-h-[400px] " />
        <div className="text-Black400 font-Arial w-auto xl:pl-[50px] xl:pt-[0px] lg:pt-[20px] pt-[30px]">
          <div className="font-Leitura text-Black100 text-[24px]">
            Thank you for considering Hawaii PM
          </div>
          <div className="pt-[30px] text-[16px]">
            Finding that perfect property which fits your lifestyle and budget
            can be a difficult task.
          </div>

          <div className="pt-[20px] text-[16px]">
            <ul>
              <li className="pb-[5px]">
                <span className="font-Leitura">Step 1:</span> View our available
                rentals pages.
              </li>

              <li className="py-[5px]">
                <span className="font-Leitura">Step 2:</span> Schedule an in
                person viewing of the property.
              </li>

              <li className="py-[5px]">
                <span className="font-Leitura">Step 3:</span> Click "Submit an
                Application" on any listing to get started.
              </li>
            </ul>
          </div>

          {/* <div className="pt-[30px] text-[16px]">
            For immediate answers to any questions you might have regarding the
            management of your property please contact{' '}
            <Link to="" className="text-Green100 font-bold outline-none">
              colby@hawaiipm.com
            </Link>{' '}
            or{' '}
            <Link to="" className="text-Green100 font-bold outline-none">
              (808) 777-7777.
            </Link>
          </div> */}
        </div>
      </div>
      <div className="pt-[50px] flex justify-center">
        <img src={DividerIcon} alt="Divider" />
      </div>

      <div className="font-Leitura text-[24px] pt-[20px]">
        Application Forms
      </div>
      <div className="font-Arial text-Black400 pt-[20px] text-[16px ]">
        <div>
          Please thoroughly read and follow{' '}
          <span className="font-bold text-Black100">
            "Important Requirements and Instructions"
          </span>{' '}
          section on the application form. If you have any questions please
          contact us.
        </div>
      </div>
      <div className="md:flex font-Arial pt-[10px]">
        <div className="pt-[20px] text-[16px]">
          <button className="w-[100%] md:w-[200px] lg:w-[250px] h-[44px] bg-Green100 text-Neutral000 rounded-lg outline-none">
            Apply Online
          </button>
        </div>
        <div className="md:pl-[50px] pt-[20px]">
          <button className="w-[100%] md:w-[230px] lg:w-[250px] h-[44px] bg-Green100 text-Neutral000 rounded-lg">
            Download Printable Form
          </button>
        </div>
      </div>

      <div className="font-Leitura text-[24px] pt-[50px]">
        Summary of Process
      </div>
      <div className="font-Arial text-Black400 pt-[20px] text-[16px]">
        <div>
          <span className="font-bold text-Black100">Required Documents</span>
          <br />
          Government issued ID, 1 recent LES or 2 most recent pay stubs (2 years
          tax returns if self-employed), picture of pet (if applicable).
          Landlord contact information for last 3 years. All adults aged 18+
          must apply & pay application fee of $35 per adult (plus tax).
        </div>

        <div>
          <br />
          <span className="font-bold text-Black100">Lease Terms</span>
          <br />
          Standard lease is 1 year, but 6 to 9 month leases may be available
          upon request; rent price subject to increase for lease terms that are
          shorter than 1 year. Personal and business guarantors are accepted.
          HOA maintenance fee paid for by owner. No Smoking. Tenant Liability /
          Renters Insurance is required.
        </div>

        <div>
          <br />
          <span className="font-bold text-Black100">Security Deposit</span>
          <br />1 month worth of rent.
        </div>

        <div>
          <br />
          <span className="font-bold text-Black100">Processing Time</span>
          <br /> 2 - 3 business days.
        </div>

        <div>
          <br />
          <span className="font-bold text-Black100">
            Common Reasons to be Declined
          </span>
          <br />
          Incomplete application, evictions, collections from landlords, poor
          credit, insufficient income, high debt to income ratio, unsatisfactory
          references, non-discharged bankruptcies, unqualified occupants, pets
          if not allowed, vehicles and/or move in dates too far in future. Any
          felonies of illegal manufacture or distribution of a controlled
          substance, felonies resulting in bodily harm or intentional damage or
          destruction of property for example, “arson”. Any sexual related
          offenses for any time period.
        </div>
      </div>
    </div>
  </div>
);

export default ApplyDetail;
