import { createBrowserRouter } from "react-router-dom";
import EditButterfly from "../pages/EditButterfly";
import CreateButterfly from "../pages/CreateButterfly";
import ButterflyDetail from "../pages/ButterflyDetail";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Contact from "../pages/Contact";

const routerButterfly = createBrowserRouter([{
    path: "/",
    element: <Layout/>,
    children: [ 
        {
            index: true,
            element: <Home/>,
        },
        {
            path: "/newbutterfly",
            element: <CreateButterfly/>

        },
        {
            path: "/editbutterfly/:id",
            element: <EditButterfly/>
        },
        {
            path: "/butterflydetail/:id",
            element: <ButterflyDetail/>
        },
        {
            path: "/contact",
            element: <Contact/>
        }

]
}])
export default routerButterfly;