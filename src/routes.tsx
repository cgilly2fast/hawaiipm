import { Navigate, Outlet, useLocation, useRoutes } from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop';
import Admin from './Layouts/Admin';
import AboutUs from './Pages/AboutUs';
import AgentReferral from './Pages/AgentReferral';
import Application from './Pages/Application';
import AvailableRentals from './Pages/AvailableRentals';
import Blog from './Pages/Blog';
import HowToScreenTenants from './Components/BlogPosts/HowToScreenTenants';
import BenefitsOfAPropertyManager from './Components/BlogPosts/BenefitsOfAPropertyManager';
import LisaLevin from './Components/BlogPosts/LisaLevin';
import SteveONeal from './Components/BlogPosts/SteveONeal';
import KathleenHurley from './Components/BlogPosts/KathleenHurley';
import Contact from './Pages/Contact';
import GeneralLease from './Pages/GeneralLease';
import Guarantee from './Pages/Guarantee';
import Quote from './Pages/Quote';
import Help from './Pages/Help';
import Landing from './Pages/Landing';
import Login from './Pages/Login';
import Maintenance from './Pages/Maintenance';
import OurServices from './Pages/OurServices';
import OwnerLogin from './Pages/OwnerLogin';
import Apply from './Pages/Apply';
import TenantsLogin from './Pages/TenantsLogin';
import Testimonials from './Pages/Testimonials';
import WhyUs from './Pages/WhyUs';

export default function Router() {
  const location = useLocation();

  const token = window.localStorage.getItem('user');

  const PrivateWrapper = ({ redirectPath = '/login', children }: any) => {
    // if (!token) {
    // return (
    //   <Navigate to={redirectPath} replace state={{ path: location.pathname }} />
    // );
    // }

    return children ? children : <Outlet />;
  };

  return (
    <div>
      <ScrollToTop />
      {useRoutes([
        {
          path: '/',
          element: (
            <PrivateWrapper>
              <Admin />
            </PrivateWrapper>
          ),
          children: [
            { path: '/', element: <Landing /> },
            { path: '/guarantee', element: <Guarantee /> },
            { path: '/quote', element: <Quote /> },
            { path: '/aboutus', element: <AboutUs /> },
            { path: '/available', element: <AvailableRentals /> },
            { path: '/owners', element: <OwnerLogin /> },
            { path: '/whyus', element: <WhyUs /> },
            { path: '/services', element: <OurServices /> },
            { path: '/apply', element: <Apply /> },
            { path: '/tenants', element: <TenantsLogin /> },
            { path: '/maintenance', element: <Maintenance /> },
            { path: '/login', element: <Login /> },
            // { path: '/agentReferral', element: <AgentReferral /> },
            { path: '/contact', element: <Contact /> },
            { path: '/help', element: <Help /> },
            // { path: '/application', element: <Application /> },
            // { path: '/generallease', element: <GeneralLease /> },
            { path: '/blog', element: <Blog /> },
            {
              path: '/blog/how-to-screen-tenants',
              element: <HowToScreenTenants />,
            },
            {
              path: '/blog/home-owner-story-kathleen',
              element: <KathleenHurley />,
            },
            {
              path: '/blog/home-owner-story-lisa',
              element: <LisaLevin />,
            },
            {
              path: '/blog/home-owner-story-steve',
              element: <SteveONeal />,
            },
            {
              path: '/blog/why-use-a-property-manager',
              element: <BenefitsOfAPropertyManager />,
            },
            // { path: '/testimonials', element: <Testimonials /> },
          ],
        },

        // {
        //   path: "/login",
        //   element: token ? (
        //     <Navigate to="/" replace />
        //   ) : (
        //     <Login />
        //   ),
        // },
      ])}
    </div>
  );
}
