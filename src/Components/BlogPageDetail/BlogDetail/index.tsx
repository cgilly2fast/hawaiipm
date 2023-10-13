import React from 'react';
import DividerIcon from '../../../Assets/Images/DividerIcon.svg';
import Blog from '../../../Assets/Images/Blog.png';
import Recent1 from '../../../Assets/Images/Recent1.png';
import Recent2 from '../../../Assets/Images/Recent2.png';
import Recent3 from '../../../Assets/Images/Recent3.png';
import Recent4 from '../../../Assets/Images/Recent4.png';
import Popular1 from '../../../Assets/Images/Popular1.png';
import Popular2 from '../../../Assets/Images/Popular2.png';
import Popular3 from '../../../Assets/Images/Popular3.png';
import Popular4 from '../../../Assets/Images/Popular4.png';
import SliderPrevIcon from '../../../Assets/Images/SliderPrevIcon.svg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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

const Popular = [
  { id: 1, pictures: Popular1 },
  { id: 2, pictures: Popular2 },
  { id: 3, pictures: Popular3 },
  { id: 4, pictures: Popular4 },
  { id: 5, pictures: Popular1 },
  { id: 6, pictures: Popular2 },
  { id: 7, pictures: Popular3 },
  { id: 8, pictures: Popular4 },
];

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
    style={{ display: 'flex', alignItems: 'center', marginLeft: '5px' }}
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
        slidesToShow: 3,
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

const BlogDetail: React.FC = () => (
  <div className="pb-[50px]">
    <div className="2xl:px-96 xl:px-[17rem] lg:px-48 pl-[20px] pr-[20px]">
      <div className="lg:pt-[50px] xl:pt-[70px] pt-[20px] lg:flex flex-row">
        <img src={Blog} alt="Blog" className="w-[100%] lg:w-[50%] h-[400px]" />
        <div className="text-Black400 font-Arial w-auto xl:pl-[50px] lg:pl-[50px] pt-[20px] xl:pt-[30px]">
          <div className="font-Leitura text-Black100 text-[24px]">
            Screening tenants is an important step in property management.
          </div>
          <div className="pt-[30px]">
            Unlocking the Secrets of Mastering Time Management: A Beginner's
            Guide" is an in-depth look at the strategies and techniques that can
            help you make the most of your time, whether you're working from
            home, running a...
          </div>
          <div className="pt-[20px] font-Arial">
            <button className="w-[100%]  md:w-[180px] lg:w-[250px] h-[44px] bg-Green100 text-Neutral000 rounded-lg outline-none">
              Read More
            </button>
          </div>
        </div>
      </div>
      <div className="pt-[50px] flex justify-center">
        <img src={DividerIcon} alt="Divider" />
      </div>
      <div className="font-Arial pt-[50px]">
        <div className="text-[24px] font-bold">Recent Posts</div>
        <div className="md:hidden">
          <div className="xl:flex justify-between font-Arial">
            {Recent?.map(res => (
              <div key={res.id} className="pt-[20px] mr-4">
                <img
                  src={res?.pictures}
                  alt={`${res?.id}`}
                  className="w-[100%]"
                />
                <div className="xl:w-[270px] border-x-2 border-b-2 py-[20px] rounded-b-lg text-center font-Arial pl-[10px]">
                  <div className="text-[14px] font-bold">
                    Unlocking the Secrets of Mastering Time Management
                  </div>
                  <div className="pt-[10px] text-[14px] text-Black400">
                    Unlocking the Secrets of Mastering Time Management: A
                    Beginner's Guide" is an in-depth look at the...
                  </div>
                  <button className="pt-[10px] text-[14px] text-Green100 outline-none">
                    Read more
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="pt-[50px] font-Arial text-center">
            <button className="w-[300px] md:w-[250px] h-[44px] text-Green100 border-2 border-Green100 rounded-lg md:hidden outline-none">
              Load More
            </button>
          </div>
        </div>
      </div>
      <div className="pt-[20px] hidden md:block">
        <div>
          <Slider {...settings}>
            {Recent?.map(res => (
              <div
                key={res.id}
                className="2xl:max-w-[250px] xl:max-w-[200px] lg:max-w-[200px] md:max-w-[230px]"
              >
                <img src={res?.pictures} alt={`${res?.id}`} />
                <div className="border-x-[1px] border-b-[1px] py-[20px] rounded-b-lg text-center font-Arial pl-[10px]">
                  <div className="text-[14px] font-bold">
                    Unlocking the Secrets of Mastering Time Management
                  </div>
                  <div className="pt-[10px] text-[14px] text-Black400">
                    Unlocking the Secrets of Mastering Time Management: A
                    Beginner's Guide" is an in-depth look at the...
                  </div>
                  <button className="pt-[10px] text-[14px] text-Green100 outline-none">
                    Read more
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="pt-[50px] flex justify-center">
        <img src={DividerIcon} alt="Divider" />
      </div>
      <div className="font-Arial pt-[50px]">
        <div className="text-[24px] font-bold">Popular Posts</div>
        <div className="pt-[20px] hidden md:block">
          <div>
            <Slider {...settings}>
              {Popular?.map(res => (
                <div
                  key={res.id}
                  className="2xl:max-w-[250px] xl:max-w-[200px] lg:max-w-[200px] md:max-w-[230px]"
                >
                  <img src={res?.pictures} alt={`${res?.id}`} />
                  <div className="border-x-[1px] border-b-[1px] py-[20px] rounded-b-lg text-center font-Arial pl-[10px]">
                    <div className="text-[14px] font-bold">
                      Unlocking the Secrets of Mastering Time Management
                    </div>
                    <div className="pt-[10px] text-[14px] text-Black400">
                      Unlocking the Secrets of Mastering Time Management: A
                      Beginner's Guide" is an in-depth look at the...
                    </div>
                    <button className="pt-[10px] text-[14px] text-Green100 outline-none">
                      Read more
                    </button>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className="md:hidden">
          <div className="xl:flex justify-between font-Arial">
            {Popular?.map(res => (
              <div key={res.id} className="pt-[20px]">
                <img
                  src={res?.pictures}
                  alt={`${res?.id}`}
                  className="w-[100%]"
                />
                <div className="xl:w-[270px] border-x-2 border-b-2 py-[20px] rounded-b-lg text-center font-Arial pl-[10px]">
                  <div className="text-[14px] font-bold">
                    Unlocking the Secrets of Mastering Time Management
                  </div>
                  <div className="pt-[10px] text-[14px] text-Black400">
                    Unlocking the Secrets of Mastering Time Management: A
                    Beginner's Guide" is an in-depth look at the...
                  </div>
                  <button className="pt-[10px] text-[14px] text-Green100 outline-none">
                    Read more
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="pt-[50px] font-Arial text-center">
            <button className="w-[300px] md:w-[250px] h-[44px] text-Green100 border-2 border-Green100 rounded-lg md:hidden outline-none">
              Load More
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default BlogDetail;
