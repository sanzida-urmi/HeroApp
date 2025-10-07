import { createBrowserRouter } from "react-router";
import Mainlayout from "../Mainlayout/Mainlayout";
import Home from "../Pages/Home";
import App from "../Pages/App";
import Installation from "../Pages/Installation";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Mainlayout,
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