import React from 'react';

interface BlankCellProps {
  content?: String;
}

const BlankCell: React.FC<BlankCellProps> = ({ content }) => (
  <td className="border-b-[1px] border-r-[1px] p-[20px] text-center">
    {content}
  </td>
);

export default BlankCell;
