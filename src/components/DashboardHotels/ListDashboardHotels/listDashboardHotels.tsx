import { ItemsDashboardHotels } from "../ItemsDashboardHotels/itemsDashboardHotels";
import "./listDashboardHotels.css";

export const ListDashboardHotels = () => {
    return (
        <div className="container__list__dashboard__hotels">
            <div className="result__filtering__list">
                <h3>Singapore: 1,234 results found</h3>
            </div>
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
