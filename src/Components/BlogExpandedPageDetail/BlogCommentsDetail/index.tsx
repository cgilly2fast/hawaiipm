import React from 'react';
import User from '../../../Assets/Images/User.png';
import HeartIcon from '../../../Assets/Images/HeartIcon.svg';
import CommentIcon from '../../../Assets/Images/CommentIcon.svg';
import UplodIcon from '../../../Assets/Images/UplodIcon.svg';

const BlogCommentsDetail: React.FC = () => (
  <div className="pb-[50px]">
    <div className="lg:container 2xl:pl-80 xl:pr-0 xl:pl-40 pl-[20px] pr-[20px]">
      <div className="font-Arial text-[24px] font-bold">Comments</div>
      <div className="pt-[50px] font-Arial">
        <ul className="divide-y divide-slate-200">
          <li className="flex first:pt-0 last:pb-0">
            <img className="h-10 w-10 rounded-full" src={User} alt="" />
            <div className="ml-3 overflow-hidden text-Black100 font-[16px]">
              <p className="font-bold">Colby Gilbert</p>
              <p className="truncate">13 weeks ago</p>
              <p className="pt-[10px]">
                Lorem ipsum dolor sit amet consectetur. Convallis sapien a
                faucibus quis eget ac risus aliquet. Ultricies faucibus
                pellentesque interdum maecenas enim urna integer. Amet viverra
                tincidunt ut ipsum. Cursus integer est sit rutrum maecenas. Sit
                nec nec cursus feugiat placerat sapien tortor facilisi sed.
                Morbi in leo turpis purus orci.
              </p>
              <div className="flex pt-[10px]">
                <div className="flex text-center">
                  <img src={HeartIcon} alt="HeartIcon" />
                  <div className="pl-[5px]">3</div>
                </div>
                <div className="flex text-center pl-[20px]">
                  <img src={CommentIcon} alt="HeartIcon" />
                  <div className="pl-[5px]">0</div>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <ul className="divide-y divide-slate-200 pt-[30px]">
          <li className="flex first:pt-0 last:pb-0">
            <img className="h-10 w-10 rounded-full" src={User} alt="" />
            <div className="ml-3 overflow-hidden text-Black100 font-[16px]">
              <p className="font-bold">Colby Gilbert</p>
              <p className="truncate">13 weeks ago</p>
              <p className="pt-[10px]">Hello! Very nice place!</p>
              <div className="flex pt-[10px]">
                <div className="flex text-center">
                  <img src={HeartIcon} alt="HeartIcon" />
                  <div className="pl-[5px]">3</div>
                </div>
                <div className="flex text-center pl-[20px]">
                  <img src={CommentIcon} alt="HeartIcon" />
                  <div className="pl-[5px]">0</div>
                </div>
              </div>
              <ul className="divide-y divide-slate-200 pt-[30px]">
                <li className="flex first:pt-0 last:pb-0">
                  <img className="h-10 w-10 rounded-full" src={User} alt="" />
                  <div className="ml-3 overflow-hidden text-Black100 font-[16px]">
                    <p className="font-bold">Jane Coper</p>
                    <p className="truncate">13 weeks ago</p>
                    <p className="pt-[10px]">Hello! Very nice place!</p>
                    <div className="flex pt-[10px]">
                      <div className="flex text-center">
                        <img src={HeartIcon} alt="HeartIcon" />
                        <div className="pl-[5px]">3</div>
                      </div>
                      <div className="flex text-center pl-[20px]">
                        <img src={CommentIcon} alt="HeartIcon" />
                        <div className="pl-[5px]">0</div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <ul className="divide-y divide-slate-200 pt-[30px]">
          <li className="flex first:pt-0 last:pb-0">
            <img className="h-10 w-10 rounded-full" src={User} alt="" />
            <div className="ml-3 overflow-hidden text-Black100 font-[16px]">
              <p className="font-bold">Jane Coper</p>
              <p className="truncate">13 weeks ago</p>
              <p className="pt-[10px]">
                Lorem ipsum dolor sit amet consectetur. Convallis sapien a
                faucibus quis eget ac risus aliquet.
              </p>
              <div className="flex pt-[10px]">
                <div className="flex text-center">
                  <img src={HeartIcon} alt="HeartIcon" />
                  <div className="pl-[5px]">3</div>
                </div>
                <div className="flex text-center pl-[20px]">
                  <img src={CommentIcon} alt="HeartIcon" />
                  <div className="pl-[5px]">0</div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="lg:border-r-2 mt-[30px] border-b-2"></div>
      <div className="font-Arial md:flex items-center justify-center">
        <div>
          <div className="md:flex">
            <div className="pt-[20px]">
              <div className="w-[100%] lg:w-[260px] h-[44px] border-2 bg-Neutral200 rounded-lg flex items-center justify-evenly">
                <div className="flex bg-Neutral000 rounded p-1">
                  <img src={UplodIcon} alt="UplodIcon" />
                  <button className="pl-[10px]">Upload Image</button>
                </div>
                <div className="text-[12px] pl-[10px]">Max 300kb</div>
              </div>
            </div>
            <div className="h-[44px] p-[10px] ml-[10px] mt-[20px] border-2 rounded-lg">
              <input
                placeholder="Name"
                className="w-[100%] md:w-[260px] focus-visible:outline-none focus:outline"
              />
            </div>
            <div className="h-[44px] p-[10px] ml-[10px] mt-[20px] border-2 rounded-lg">
              <input
                placeholder="Email"
                className="w-[100%] md:w-[260px] focus-visible:outline-none focus:outline"
              />
            </div>
          </div>
          <div className="mt-[20px] p-[10px] font-Arial border-2 rounded-lg">
            <textarea
              placeholder="Message"
              className="w-[100%] lg:w-[520px] h-[160px] focus-visible:outline-none focus:outline"
            />
          </div>
          <div className="pt-[20px]">
            <button className="w-[100%]  md:w-[230px] lg:w-[250px] h-[44px] bg-Green100 text-Neutral000 rounded-lg">
              Post Comment
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default BlogCommentsDetail;
