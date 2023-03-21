import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';
import Hader from '../Components/Hader';

const Admin: React.FC = () => (
  <div>
    <Hader />
    <Outlet />
    <Footer />
  </div>
);

export default Admin;
