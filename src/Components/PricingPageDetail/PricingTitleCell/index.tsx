import React, { useState } from 'react';
import InfoIcon from '../../../Assets/Images/info.png';

interface TooltipProps {
  title: string;
  content?: string;
  className?: string;
  children?: React.ReactElement;
}

const PricingTitleCell: React.FC<TooltipProps> = ({
  title,
  content,
  className,
  children,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const showTooltip = () => {
    setIsVisible(true);
  };

  const hideTooltip = () => {
    setIsVisible(false);
  };

  return (
    <td
      className={
        'max-w-[350px] flex justify-between p-[20px] border-x-[1px] border-b-[1px] ' +
        className
      }
    >
      {title}
      {content && (
        <div
          className="my-auto relative"
          onMouseEnter={showTooltip}
          onMouseLeave={hideTooltip}
        >
          {children}
          {isVisible && (
            <div className="z-100 bg-Black400 max-h-[150px] left-12 top-[-15px] w-[250px] text-Neutral100 absolute p-[10px] rounded-lg text-[12px] before:content-[''] before:absolute before:top-[23px]  before:right-[100%] before:-translate-y-1/2 before:border-8 before:border-y-transparent before:border-l-transparent before:border-r-Black400">
              {content}
            </div>
          )}
          <img src={InfoIcon} className="max-w-[16px] ml-[20px]" />
        </div>
      )}
    </td>
  );
};

export default PricingTitleCell;
