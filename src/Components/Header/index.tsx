import React, { Fragment } from 'react';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';

const Header: React.FC = () => (
  <div>
    <div className="mx-auto max-w-[1920px] relative">
      <DesktopMenu />
      <MobileMenu />
    </div>
  </div>
);

export default Header;
