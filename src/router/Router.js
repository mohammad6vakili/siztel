// ** Router imports
import { lazy, useEffect } from "react";

// ** Router imports
import { useRoutes, Navigate } from "react-router-dom";

// ** Layouts
import BlankLayout from "@layouts/BlankLayout";

// ** Utils
import { getUserData, getHomeRouteForLoggedInUser } from "../utility/Utils";
import { useNavigate } from "react-router-dom";

// ** Components
const Error = lazy(() => import("../views/pages/misc/Error"));
const Login = lazy(() => import("../views/pages/authentication/Login"));
const Register = lazy(() => import("../views/pages/authentication/Register"));
const VerifyEmailBasic = lazy(() =>
  import("../views/pages/authentication/VerifyEmailBasic")
);
const NotAuthorized = lazy(() => import("../views/pages/misc/NotAuthorized"));

const Router = ({ allRoutes }) => {
  const navigate = useNavigate();
  const getHomeRoute = () => {
    return getHomeRouteForLoggedInUser("admin");
  };

  useEffect(() => {
    navigate("/");
  }, []);

  const routes = useRoutes([
    {
      path: "/",
      index: true,
      element: <Navigate replace to={getHomeRoute()} />,
    },
    // {
    //   path: "/login",
    //   element: <BlankLayout />,
    //   children: [{ path: "/login", element: <Login /> }],
    // },
    // {
    //   path: "/register",
    //   element: <BlankLayout />,
    //   children: [{ path: "/register", element: <Register /> }],
    // },
    // {
    //   path: "/register/verify",
    //   element: <BlankLayout />,
    //   children: [{ path: "/register/verify", element: <VerifyEmailBasic /> }],
    // },
    // {
    //   path: "/auth/not-auth",
    //   element: <BlankLayout />,
    //   children: [{ path: "/auth/not-auth", element: <NotAuthorized /> }],
    // },
    {
      path: "*",
      element: <BlankLayout />,
      children: [{ path: "*", element: <Error /> }],
    },
    ...allRoutes,
  ]);

  return routes;
};

export default Router;
