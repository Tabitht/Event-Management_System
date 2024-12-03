import { Suspense, lazy } from "react";
import { useRoutes } from "react-router-dom";
import Layout from "../Layouts/Layout";
import Home from "../pages/Home";

const Loadable = (Component)  => {
    return function WrappedComponent(props) {
        return (
            <Suspense fallback={<p>Loading...</p>}>
                <Component {...props} />
            </Suspense>
    );
}
};

const Router = () => {
    return useRoutes([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    element: <LandingPage />,
                    index: true,
                },
                {
                    path: "/Home",
                    element: <Home />,
                },
            ]
        },
        {
            path: "/Login",
            element: <Login />
        },
        {
            path: "/SignUp",
            element: <SignUp />
        },
        {
            path: "/SuccessfulSignUp",
            element: <SuccessfulSignUp />
        },
        {
            path: "/DraftEmail",
            element: <DraftEmail />
        },
        {
            path: "/SuccessfulEventCreation",
            element: <SuccessfulEventCreation />
        },
        {
            path: "/MyEvents",
            element: <MyEvents />
        },
        {
            path: "/ManageEvent",
            element: <ManageEvent />
        },
        {
            path: "/CreateEvent",
            element: <CreateEvent />
        },
        {
            path: "/EmailConfirmation",
            element: <EmailConfirmation />
        },
        {
            path: "/FeedBack",
            element: <FeedBack />
        },
        {
            path: "/RsvpList",
            element: <RsvpList />
        },

    ]);
};

export default Router;
const LandingPage = Loadable(lazy(() => import("../pages/LandingPage")));
const Login = Loadable(lazy(() => import("../pages/Login")));
const SignUp = Loadable(lazy(() => import("../pages/SignUp")));
const SuccessfulSignUp = Loadable(lazy(() => import("../pages/SuccessfulSignUp")));
const DraftEmail = Loadable(lazy(() => import("../pages/DraftEmail")));
const SuccessfulEventCreation = Loadable(lazy(() => import("../pages/SuccessfulEventCreation")));
const MyEvents = Loadable(lazy(() => import("../pages/MyEvents")));
const ManageEvent = Loadable(lazy(() => import("../pages/ManageEvent")));
const CreateEvent = Loadable(lazy(() => import("../pages/CreateEvent")));
const EmailConfirmation = Loadable(lazy(() => import("../pages/EmailConfirmation")));
const FeedBack = Loadable(lazy(() => import("../pages/FeedBack")));
const RsvpList = Loadable(lazy(() => import("../pages/RsvpList")));