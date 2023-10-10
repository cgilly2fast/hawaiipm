import React from 'react';

const TenantsLoginDetail: React.FC = () => (
  <div className="pb-[50px]">
    <div className="bg-Neutral100 h-[110px] lg:h-[200px] font-Leitura flex">
      <div className="text-[36px] lg:text-[48px] lg:container  2xl:pl-80 xl:pl-60 lg:pl-40 flex flex-row items-center ml-[20px]">
        Tenant Login
      </div>
    </div>
    <div className="2xl:px-80 xl:px-64 lg:px-44 pt-[50px] pl-[20px] pr-[20px]">
      <div className="font-Arial text-Black400 w-autotext-[16px]">
        <div className="pt-[30px]">
          Tenants can access their account online to view a complete history of
          payments, review their lease and other documents such as house rules,
          and make online payments at no charge using the e-check feature.
          Tenants may also pay via debit or credit card with a small convenience
          fee.
        </div>
      </div>
      <div className="pt-[20px] font-Arial">
        <button className="w-[100%] md:w-[180px] lg:w-[250px] h-[44px] bg-Green100 text-Neutral000 rounded-lg outline-none">
          Tenant Login
        </button>
      </div>
    </div>
  </div>
);

export default TenantsLoginDetail;
