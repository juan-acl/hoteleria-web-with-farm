import { useEffect } from "react";
import { SubMenu } from "~components/SubMenu";
import "./dashboardHotels.css";
import { ListDashboardHotels } from "./ListDashboardHotels/listDashboardHotels";
import { Filtering } from "./Filtering/filtering";

export const DashboardHotels = () => {
    useEffect(() => {
        const element = document.getElementById("nav__bar__");
        element?.setAttribute("style", "height: 120px");
        return () => {
            element?.setAttribute("style", "height: 70px");
        };
    }, []);

    return (
        <>
            <div style={{ display: "flex" }}>
                <SubMenu />
            </div>
            <div className="conteiner__dashboard__hotels">
                <Filtering />
                <ListDashboardHotels />
            </div>
        </>
    );
};
