import { createBrowserRouter } from "react-router";
import Mainlayout from "../Mainlayout/Mainlayout";
import Home from "../Pages/Home";
import App from "../Pages/App";
import Installation from "../Pages/Installation";
import Errorpage from "../Pages/Errorpage";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Mainlayout,
        errorElement: <Errorpage/>,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/app',
                Component: App
            },
            {
                path: '/installation',
                Component: Installation
            }
        ]
    }
])