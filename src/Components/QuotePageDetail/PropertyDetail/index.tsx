import React from 'react';
import SliderPrevIcon from '../../../Assets/Images/SliderPrevIcon.svg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Recent1 from '../../../Assets/Images/Recent1.png';
import Recent2 from '../../../Assets/Images/Recent2.png';
import Recent3 from '../../../Assets/Images/Recent3.png';
import Recent4 from '../../../Assets/Images/Recent4.png';
import DividerIcon from '../../../Assets/Images/DividerIcon.svg';
import LocationIcon from '../../../Assets/Images/LocationIcon.svg';

const NextArrow = ({ className, onClick }: any) => (
  <div
    role="button"
    className={className}
    style={{ display: 'flex', alignItems: 'center', marginRight: '10px' }}
    onClick={onClick}
    onKeyDown={() => {}}
    tabIndex={0}
  >
    <img src={SliderPrevIcon} alt="prev-icon" />
  </div>
);

const PrevArrow = ({ className, onClick }: any) => (
  <div
    role="button"
    className={className}
    style={{ display: 'flex', alignItems: 'center' }}
    onClick={onClick}
    onKeyDown={() => {}}
    tabIndex={-1}
  >
    <img src={SliderPrevIcon} alt="prev-icon" />
  </div>
);

const settings = {
  slidesToShow: 4,
  slidesToScroll: 1,
  infinite: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1801,
      settings: {
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 1400,
      settings: {
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 992,
      settings: {
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 2.5,
      },
    },
    {
      breakpoint: 480,
      settings: {
        centerMode: true,
        centerPadding: '50px',
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 425,
      settings: {
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1,
      },
    },
  ],
};

const Recent = [
  { id: 1, pictures: Recent1 },
  { id: 2, pictures: Recent2 },
  { id: 3, pictures: Recent3 },
  { id: 4, pictures: Recent4 },
  { id: 5, pictures: Recent1 },
  { id: 6, pictures: Recent2 },
  { id: 7, pictures: Recent3 },
  { id: 8, pictures: Recent4 },
];

const PropertyDetail: React.FC = () => (
  <div className="md:pt-[50px]">
    <div className="2xl:px-80 xl:px-60 pl-[20px] pr-[20px]">
      <Slider {...settings}>
        {Recent?.map(res => (
          <div className="container-wrapper">
            <div
              key={res.id}
              className="2xl:max-w-[260px] xl:max-w-[230px] relative"
            >
              <img src={res?.pictures} alt={`${res?.id}`} />
              <div className="border-x-2 border-b-2 text-Black100 py-[20px] rounded-b-lg font-Arial">
                <div className="text-center">
                  <div className="text-[16px] font-bold">$20,000 / mo</div>
                  <div className="text-[16px] pt-[10px]">$3.17 per sq ft</div>
                </div>
                <div className="lg:border-r-2 mt-[10px] border-b-2"></div>
                <div className="text-center pt-[10px]">
                  <div className="text-Green100">260 Portlock RD</div>
                  <div className="pt-[5px]">1.3 miles away</div>
                  <div className="flex items-center justify-center">
                    <div className="flex items-center justify-center">
                      <div className="w-[8px] h-[8px] bg-Green100 rounded-full"></div>
                    </div>
                    <div className="pt-[5px] pl-[10px]">Active 12 days</div>
                  </div>
                </div>
                <div className="lg:border-r-2 mt-[10px] border-b-2"></div>
                <div className="text-center pt-[10px]">
                  <div>4 Beds</div>
                  <div className="pt-[5px]">5 Baths</div>
                  <div className="pt-[5px]">6,313 sq ft sq ft</div>
                </div>
                <div className="lg:border-r-2 mt-[10px] border-b-2"></div>
                <div className="text-center pt-[10px]">
                  <div>In-Unit laundry</div>
                  <div className="pt-[5px]">Has A/C</div>
                  <div className="pt-[5px]">Dogs Only</div>
                  <div className="pt-[5px]">No parking</div>
                  <div className="pt-[5px]">No Heating</div>
                </div>
              </div>
            </div>
            <div className="middle">
              <div className="2xl:max-w-[260px] xl:max-w-[230px] border-2 border-Green100 border-t-2 rounded-lg bg-Neutral100 h-[662px]">
                <div className="h-[40px] bg-Green100 rounded-t text-Neutral000 flex items-center justify-center font-Arial font-[700]">
                  My Property
                </div>
                <div className=" text-center font-Arial">
                  <div className="text-center flex justify-center pt-[33px]">
                    <img src={LocationIcon} />
                  </div>
                  <div className="pt-[33px]">
                    <p className="font-bold">$20k / mo</p>
                    <p>$$5.26 per sq ft</p>
                    <p className="pt-[20px]">960 Kanakou PI</p>
                  </div>
                  <div className="pt-[30px]">
                    <button className="w-[100%] lg:w-[230px] h-[44px] bg-Green100 text-Neutral000 rounded-lg">
                      Adjust price
                    </button>
                  </div>
                  <div className="pt-[30px] font-bold">
                    <p>5 Beds</p>
                    <p className="mt-[10px]">5 Baths</p>
                    <p className="mt-[10px]">3800 sq ft</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <div className="pt-[50px] flex justify-center">
        <img src={DividerIcon} alt="Divider" />
      </div>
    </div>
  </div>
);

export default PropertyDetail;
