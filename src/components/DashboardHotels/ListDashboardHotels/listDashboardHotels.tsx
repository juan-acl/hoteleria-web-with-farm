import { ItemsDashboardHotels } from "../ItemsDashboardHotels/itemsDashboardHotels";
import "./listDashboardHotels.css";

export const ListDashboardHotels = () => {
    return (
        <div className="container__list__dashboard__hotels">
            <h3 className="result__filtering">Singapore: 1,234 results</h3>
            <ItemsDashboardHotels />
            <ItemsDashboardHotels />
            <ItemsDashboardHotels />
            <ItemsDashboardHotels />
            <ItemsDashboardHotels />
            <ItemsDashboardHotels />
            <ItemsDashboardHotels />
            <ItemsDashboardHotels />
            <ItemsDashboardHotels />
        </div>
    );
};
