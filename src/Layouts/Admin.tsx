import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

const Admin: React.FC = () => (
  <div>
    <Header />
    <Outlet />
    <Footer />
  </div>
);

export default Admin;
