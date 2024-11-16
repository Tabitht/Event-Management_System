import { Suspense, lazy } from "react";
import { useRoutes } from "react-router-dom";
import Layout from "../Layouts/Layout";
//import LandingPage from "../pages/LandingPage"

//const Home = lazy(() => import("../pages/Home"));

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
                    element: <Home />,
                    index: true,
                },
            ]
        }

    ]);
};

export default Router;
const Home = Loadable(lazy(() => import("../pages/Home")));
