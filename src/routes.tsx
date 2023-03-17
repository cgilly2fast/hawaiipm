import { Navigate, Outlet, useLocation, useRoutes } from "react-router-dom";
import Admin from "./Layouts/Admin";
import AboutUs from "./Pages/AboutUs";
import AgentReferral from "./Pages/AgentReferral";
import Application from "./Pages/Application";
import AvailableRentals from "./Pages/AvailableRentals";
import Blog from "./Pages/Blog";
import BlogExpanded from "./Pages/BlogExpanded";
import Contact from "./Pages/Contact";
import GeneralLease from "./Pages/GeneralLease";
import Guarantee from "./Pages/Guarantee";
import Help from "./Pages/Help";
import Landing from "./Pages/Landing";
import Login from "./Pages/Login";
import Maintenance from "./Pages/Maintenance";
import OurServices from "./Pages/OurServices";
import OwnerLogin from "./Pages/OwnerLogin";
import Tenants from "./Pages/Tenants";
import TenantsLogin from "./Pages/TenantsLogin";
import WhyUs from "./Pages/WhyUs";

export default function Router() {
  const location = useLocation();

  const token = window.localStorage.getItem('user');
  console.log("token", token)
  const PrivateWrapper = ({ redirectPath = "/login", children }: any) => {
    if (!token) {
      return (
        <Navigate to={redirectPath} replace state={{ path: location.pathname }} />
      );
    }

    return children ? children : <Outlet />;
  }

  return useRoutes([
    {
      path: "/",
      element: (<PrivateWrapper><Admin /></PrivateWrapper>),
      children: [
        { path: "/", element: <Landing /> },
        { path: "/guarantee", element: <Guarantee /> },
        { path: "/aboutus", element: <AboutUs /> },
        { path: "/available", element: <AvailableRentals /> },
        { path: "/owner", element: <OwnerLogin /> },
        { path: "/whyus", element: <WhyUs /> },
        { path: "/ourservices", element: <OurServices /> },
        { path: "/tenants", element: <Tenants /> },
        { path: "/tenantslogin", element: <TenantsLogin /> },
        { path: "/maintenance", element: <Maintenance /> },
        { path: "/agentReferral", element: <AgentReferral /> },
        { path: "/contact", element: <Contact /> },
        { path: "/help", element: <Help /> },
        { path: "/application", element: <Application /> },
        { path: "/generallease", element: <GeneralLease /> },
        { path: "/blog", element: <Blog /> },
        { path: "/blogexpanded", element: <BlogExpanded /> },
      ],
    },

    {
      path: "/login",
      element: token ? (
        <Navigate to="/" replace />
      ) : (
        <Login />
      ),
    },

  ]);
}
