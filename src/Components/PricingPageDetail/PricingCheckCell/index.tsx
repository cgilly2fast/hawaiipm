import React from 'react';
import Checkmark from '../../../Assets/Images/checkmark.png';

const CheckmarkCell: React.FC = () => (
  <td className="border-b-[1px] border-r-[1px] p-[0px]">
    <img src={Checkmark} className="mx-auto max-w-[24px] " />
  </td>
);

export default CheckmarkCell;
