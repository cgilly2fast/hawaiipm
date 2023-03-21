import React from 'react';
import FooterLogoIcon from '../../Assets/Images/FooterLogoIcon.svg';
import InstagramIcon from '../../Assets/Images/InstagramIcon.svg';
import YoutubeIcon from '../../Assets/Images/YoutubeIcon.svg';
import FacebookIcon from '../../Assets/Images/FacebookIcon.svg';
import VectorIcon from '../../Assets/Images/VectorIcon.svg';

const Footer: React.FC = () => (
  <>
    <div className="min-h-[280px] bg-Neutral200">
      <div className="block sm:flex pt-[50px] pt-[30px] pl-[20px]">
        <div className="block sm:flex flex-row w-full xl:justify-evenly md:justify-between">
          <div>
            <img
              src={FooterLogoIcon}
              alt="logo"
              className="w-[150px] sm:w-[100%]"
            />
          </div>
          <div className="sm:max-w-[700px] w-full flex font-Arial flex-wrap xl:justify-start md:justify-end">
            <div className="text-[14px] w-[50%] sm:w-[25%] pt-[20px] sm:pt-[0px] md:w-[20%]">
              <div className="text-Black100 font-bold">Company</div>
              <div className="text-Black400 pt-[20px]">
                <div>Our Story</div>
                <div>Carreers</div>
                <div>Blog</div>
                <div>Help</div>
              </div>
            </div>
            <div className="text-[14px] w-[50%] sm:w-[25%] pt-[20px] sm:pt-[0px]">
              <div className="text-Black100 font-bold">Homeowner</div>
              <div className="text-Black400 pt-[20px]">
                <div>Why Use a Manager</div>
                <div>Refer Homeowners</div>
                <div>Revenue Guarantee</div>
                <div>Hospitality Standards</div>
              </div>
            </div>
            <div className="text-[14px] w-[50%] sm:w-[25%] pt-[20px] sm:pt-[0px]">
              <div className="text-Black100 font-bold">Guest</div>
              <div className="text-Black400 pt-[20px]">
                <div>Invite Friends</div>
                <div>Trust & Safety</div>
              </div>
            </div>
            <div className="w-[112px] flex flex-row items-start gap-[20px] w-[50%] sm:w-[25%] pt-[80px] sm:pt-[0px]">
              <img src={InstagramIcon} alt="instagram" />
              <img src={YoutubeIcon} alt="youtube" />
              <img src={FacebookIcon} alt="facebook" />
            </div>
          </div>
        </div>
      </div>
      <div className="pt-[30px]">
        <div className="border-t-2">
          <div className="font-Arial justify-around pt-[30px] block sm:flex pl-[20px] sm:pl-[0px]">
            <div className="flex text-[14px] items-start">
              <img src={VectorIcon} alt="vector" />
              <div className="text-Black400 pl-[5px]">
                2019 Hawaii Property Management LLC. All rights reserved.
              </div>
            </div>
            <div className="flex text-Black400 text-[14px] gap-[20px] pt-[10px] sm:pt-[0px]">
              <div>Terms</div>
              <div>Privacy</div>
              <div>Site map</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Footer;
