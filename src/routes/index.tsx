import { Outlet } from "react-router-dom";
import { Auth } from "~components/Auth";
import { DashboardHotels } from "~components/DashboardHotels";
import { Layout } from "~components/Layout";
import { HomePage } from "~pages/Home";

export const rootRouter = [
    {
        path: "/",
        element: (
            <Layout>
                <Outlet />
            </Layout>
        ),
        children: [
            {
                path: "/signIn",
                element: <Auth />,
            },
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/booking",
                element: <DashboardHotels />,
            },
            ,
        ],
    },
];
