import React from 'react';
import DividerIcon from '../../../Assets/Images/DividerIcon.svg';
import Blog from '../../../Assets/Images/Blog.png';
import Kathleen from '../../../Assets/Images/MaskGroup.png';
import Lisa from '../../../Assets/Images/LisaL.jpeg';
import WhyManager from '../../../Assets/Images/Blog2.png';
import ScreenTenants from '../../../Assets/Images/ScreenTenants.webp';
import Steve from '../../../Assets/Images/Recent2.png';
import Popular1 from '../../../Assets/Images/Popular1.png';
import Popular2 from '../../../Assets/Images/Popular2.png';
import Popular3 from '../../../Assets/Images/Popular3.png';
import Popular4 from '../../../Assets/Images/Popular4.png';
import SliderPrevIcon from '../../../Assets/Images/SliderPrevIcon.svg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

const rows = [
  [
    {
      id: 3,
      picture: Kathleen,
      title: 'Home Owner Story: Kathleen Hurley',
      preview:
        'Welcome to another inspiring homeowner story, where we shine a spotlight on Kathleen Hurley and her journey...',
      route: '/blog/home-owner-story-kathleen',
    },
    {
      id: 0,
      picture: Lisa,
      title: 'Home Owner Story: Lisa Levin',
      preview:
        'Meet Lisa Levin, a homeowner who, like many others, was initially hesitant about entrusting her rental property...',
      route: '/blog/home-owner-story-lisa',
    },
    {
      id: 1,
      picture: Steve,
      title: "Home Owner Story: Steve O'Neal",
      preview:
        "We're back with another captivating homeowner story, and this time, we dive into the real estate world of...",
      route: '/blog/home-owner-story-steve',
    },
    {
      id: 2,
      picture: ScreenTenants,
      title: 'Finding the Perfect Tenant for Your Property',
      preview:
        "Screening tenants is an important step in property management. When screening tenants in Hawaii, it's important to...",
      route: '/blog/how-to-screen-tenants',
    },
  ],
  [
    {
      id: 4,
      picture: WhyManager,
      title:
        'The Benefits of Hiring a Property Manager: Elevate Your Real Estate Investment',
      preview:
        'Owning and managing real estate can be a lucrative investment, but it comes with its fair share of responsibilities and challenges...',
      route: '/blog/why-use-a-property-manager',
    },
  ],
];

const NextArrow = ({ className, onClick }: any) => (
  <div
    role="button"
    className={className}
    style={{ display: 'flex', alignItems: 'center' }}
    onClick={onClick}
    onKeyDown={() => {}}
    tabIndex={1}
  >
    <img src={SliderPrevIcon} alt="prev-icon" />
  </div>
);

const PrevArrow = ({ className, onClick }: any) => (
  <div
    role="button"
    className={className}
    style={{
      display: 'flex',
      alignItems: 'center',
    }}
    onClick={onClick}
    onKeyDown={() => {}}
    tabIndex={2}
  >
    <img src={SliderPrevIcon} alt="prev-icon" />
  </div>
);

const BlogDetail: React.FC = () => (
  <div className="pb-[50px]">
    <div className="2xl:px-96 xl:px-[17rem] lg:px-48 pl-[20px] pr-[20px]">
      <div className="lg:pt-[50px] xl:pt-[70px] pt-[20px] lg:flex flex-row">
        <img
          src={ScreenTenants}
          alt="Blog"
          className="w-[100%] lg:w-[50%] h-[400px]"
        />
        <div className="text-Black400 font-Arial w-auto xl:pl-[50px] lg:pl-[50px] pt-[20px] xl:pt-[30px]">
          <div className="font-Leitura text-Black100 text-[24px]">
            Finding the Perfect Tenant for Your Property
          </div>
          <div className="pt-[30px]">
            Screening tenants is an important step in property management. When
            screening tenants in Hawaii, it's important to not only consider
            their financial and rental history, but also their personality and
            character.
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
          {rows?.map(posts => (
            <div className="xl:flex justify-between font-Arial">
              {posts.map(post => (
                <Link key={post.id} to={post.route}>
                  <div className="pt-[20px] mr-4">
                    <img
                      src={post?.picture}
                      alt={`${post?.id}`}
                      className="w-[100%]"
                    />
                    <div className="xl:w-[270px] border-x-2 border-b-2 py-[20px] rounded-b-lg text-center font-Arial pl-[10px]">
                      <div className="text-[14px] font-bold">{post.title}</div>
                      <div className="pt-[10px] text-[14px] text-Black400">
                        {post.preview}
                      </div>
                      <button className="pt-[10px] text-[14px] text-Green100 outline-none">
                        Read more
                      </button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ))}
          <div className="pt-[50px] font-Arial text-center">
            <button className="w-[300px] md:w-[250px] h-[44px] text-Green100 border-2 border-Green100 rounded-lg md:hidden outline-none">
              Load More
            </button>
          </div>
        </div>
      </div>
      <div className="pt-[20px] hidden md:block">
        {rows?.map(posts => (
          <div className="flex mb-[30px]">
            {posts?.map(post => (
              <Link key={post.id} to={post.route}>
                <div className="2xl:max-w-[250px] xl:max-w-[200px] lg:max-w-[200px] md:max-w-[230px] mx-[5px]">
                  <div className="h-[200px] overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src={post?.picture}
                      alt={`${post?.id}`}
                    />
                  </div>
                  <div className="border-x-[1px] border-b-[1px] py-[20px] rounded-b-lg text-center font-Arial px-[10px]">
                    <div className="text-[14px] font-bold">{post.title}</div>
                    <div className="pt-[10px] text-[14px] text-Black400">
                      {post.preview}
                    </div>
                    <button className="pt-[10px] text-[14px] text-Green100 outline-none">
                      Read more
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default BlogDetail;
