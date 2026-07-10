import { createBrowserRouter } from "react-router-dom";
import Home from "./assets/pages/Home";

import App from "./App";
import Projets from "./assets/pages/Projets";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,

        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/projets",
                element: <Projets />,
            },
        ],
    },
]);

export default routes;
