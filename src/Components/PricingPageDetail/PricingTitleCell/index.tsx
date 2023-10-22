import React, { useState } from 'react';
import InfoIcon from '../../../Assets/Images/info.png';

interface TooltipProps {
  title: string;
  content: string;
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
        'max-w-[300px] flex justify-between p-[20px] border-x-[1px] border-t-[1px] ' +
        className
      }
    >
      {title}
      <div
        className="my-auto"
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
      >
        <img src={InfoIcon} className="max-w-[16px] ml-[20px]" />
        {children}
        {isVisible && <div className="">{content}</div>}
      </div>
    </td>
  );
};

export default PricingTitleCell;
