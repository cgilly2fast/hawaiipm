import React from 'react';
import Agent from "../../../Assets/Images/Agent.png";

const AgentReferralDetail: React.FC = () => (
  <div className='pb-[50px]'>
    <div className='bg-Neutral100 h-[200px] font-Leitura flex'>
      <div className='text-[48px] lg:container  2xl:pl-80 xl:pl-60 lg:pl-40 flex flex-row items-center ml-[20px]'>
        Agent Referral Program
      </div>
    </div>
    <div className='lg:container 2xl:pl-80 xl:pr-0 xl:pl-40 pt-[50px] pl-[20px] pr-[20px]'>
      <img src={Agent} alt='Agent' className='w-[100%]' />
      <div className='font-Leitura text-[24px] font-bold pt-[50px]'>
        Agents-We Are Your Property Management Partner
      </div>
      <div className='font-Arial text-Black400 pt-[20px]'>
        <div>
          Lorem ipsum dolor sit amet consectetur. Aliquet elementum malesuada ipsum quis nunc suspendisse molestie quis. Gravida ullamcorper facilisis praesent proin nisl aliquet eget sed sed. Tellus euismod vitae morbi urna nisi consectetur. At odio amet convallis volutpat viverra orci maecenas. Est metus nunc tortor magna. Gravida ut magna quam sagittis mauris adipiscing. Adipiscing vulputate sollicitudin neque sollicitudin sagittis at.
        </div>
        <div className='pt-[20px]'>
          Fringilla diam quisque id gravida ante donec blandit. Sed accumsan leo at egestas nunc. Pharetra aliquam sed turpis id mauris accumsan quis mauris. Elit ultricies sagittis elementum varius volutpat maecenas elit.
        </div>
        <div className='pt-[20px]'>
          <li>Melius consequat eam id, ei duo oratio essent inimicus.</li>
          <li>Pri noster aperiam nominavi ne, eos ei adipisci democritum, cum eius veri facer at.</li>
          <li>Ea esse saperet vim, per nulla nihil id.</li>
          <li>Eu illud dictas fastidii qui, id primis semper splendide sit.</li>
          <li>Omnium doctus impedit vim ad, an qui fabellas disputando.</li>
          <li>Stet mediocrem consectetuer pri ea, quo eu suas etiam vulputate, ea elaboraret quaerendum usu.</li>
          <li>Sanctus eligendi interpretaris per ei, essent animal ei usu.</li>
        </div>
        <div className='pt-[70px] text-Black100 text-[20px]'>
          Please contact <span className='text-Green100'>colbygbemail@email.com</span> or <span className='text-Green100'>000-000-0000</span> to learn more about our agent referral program.
        </div>
      </div>
    </div>
  </div>
);

export default AgentReferralDetail;