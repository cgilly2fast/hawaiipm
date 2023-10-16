import React from 'react';
import FooterLogoIcon from '../../Assets/Images/FooterLogoIcon.svg';
import InstagramIcon from '../../Assets/Images/InstagramIcon.svg';
import YoutubeIcon from '../../Assets/Images/YoutubeIcon.svg';
import FacebookIcon from '../../Assets/Images/FacebookIcon.svg';
import VectorIcon from '../../Assets/Images/VectorIcon.svg';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => (
  <>
    <div className="min-h-[280px] bg-Neutral200">
      <div className="mx-auto max-w-[1920px] block sm:flex pt-[50px] pl-[20px]">
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
              <div className="text-Black100 font-bold tracking-[4px]">
                Company
              </div>
              <div className="text-Black400 pt-[20px]">
                <div>
                  <Link to="/aboutus">Our Story</Link>
                </div>
                {/* <div>Careers</div> */}
                <div>
                  <Link to="/blog">Blog</Link>
                </div>
                <div>
                  <Link to="/contact">Contact</Link>
                </div>
                <div>
                  <Link to="/maintenance">Help</Link>
                </div>
              </div>
            </div>
            <div className="text-[14px] w-[50%] sm:w-[25%] pt-[20px] sm:pt-[0px]">
              <div className="text-Black100 font-bold tracking-[4px]">
                Homeowner
              </div>
              <div className="text-Black400 pt-[20px]">
                <div>
                  <Link to="/blog/why-use-a-property-manager">
                    Why Use a Manager
                  </Link>
                </div>
                <div>
                  <Link to="/guarantee">Revenue Guarantee</Link>
                </div>
                {/* <div>
                  <Link to="/">Landlord FAQ</Link>
                </div> */}
                <div>
                  <Link to="owners">Owner Login</Link>
                </div>
              </div>
            </div>
            <div className="text-[14px] w-[50%] sm:w-[25%] pt-[20px] sm:pt-[0px]">
              <div className="text-Black100 font-bold tracking-[4px]">
                Tenants
              </div>
              <div className="text-Black400 pt-[20px]">
                <div>
                  <Link to="/apply">Apply for Rental</Link>
                </div>
                <div>
                  <Link to="/maintenance">Maintenance</Link>
                </div>
                <div>
                  <Link to="/tenants">Tenant Login</Link>
                </div>
              </div>
            </div>
            {/* <div className="w-[112px] flex flex-row items-start gap-[20px] sm:w-[25%] pt-[80px] sm:pt-[0px]">
              <img src={InstagramIcon} alt="instagram" />
              <img src={YoutubeIcon} alt="youtube" />
              <img src={FacebookIcon} alt="facebook" />
            </div> */}
          </div>
        </div>
      </div>
      <div className="pt-[30px]">
        <div className="border-t-2">
          <div className="mx-auto max-w-[1920px] font-Arial justify-around pt-[30px] block sm:flex pl-[20px] sm:pl-[0px]">
            <div className="flex text-[14px] items-start">
              <img src={VectorIcon} alt="vector" />
              <div className="text-Black400 pl-[5px]">
                2023 Hawaii PM LLC. All rights reserved.
              </div>
            </div>
            <div className="flex text-Black400 text-[14px] gap-[20px] pt-[10px] sm:pt-[0px]">
              <div>
                <Link to="/service">Terms of Service</Link>
              </div>
              <div>
                <Link to="/disclaimers">Legal Disclaimers</Link>
              </div>
              {/* <div>
                <Link to="/privacy">Privacy Policy</Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Footer;
