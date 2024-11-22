import { Suspense, lazy } from "react";
import { useRoutes } from "react-router-dom";
import Layout from "../Layouts/Layout";
//import LandingPage from "../pages/Home"

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
            ]
        }

    ]);
};

export default Router;
const LandingPage = Loadable(lazy(() => import("../pages/LandingPage")));
