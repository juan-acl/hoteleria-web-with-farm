import "./itemsDashboardHotels.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WifiIcon from "@mui/icons-material/Wifi";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import PoolIcon from "@mui/icons-material/Pool";
import { useNavigate } from "react-router-dom";
import { navigateTo } from "~routes/navigation";
import { ROUTES_NAME } from "~constants/nameRoutes";
import { v4 } from "uuid";

export const ItemsDashboardHotels = () => {
    const navigate = useNavigate();
    function navigateDetailHotel() {
        const id = v4();
        navigateTo(ROUTES_NAME.BOOKING + `/${id}`, navigate, {
            replace: false,
        });
    }

    return (
        <article className="container__item__card__hotel">
            <div className="image__card__hotel__item"></div>
            <div className="description__hotel__card">
                <h2 className="title__hotel">Hotel name</h2>
                <p className="description__hotel">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quam repellendus, quidem, cumque, voluptate quod quibusdam
                    voluptatum dolorum quae quia nemo doloremque.
                </p>
                <div className="location__container">
                    <LocationOnIcon />
                    <small className="location__text">Location</small>
                </div>
                <div>
                    <button
                        onClick={navigateDetailHotel}
                        className="button__select__hotel"
                    >
                        Select
                    </button>
                </div>
            </div>
            <div className="container__details__hotel">
                <div className="amenities">
                    <div className="container__icons__amenities">
                        <WifiIcon sx={{ color: "#F2994A" }} />
                        <FastfoodIcon sx={{ color: "#F2994A" }} />
                        <PoolIcon sx={{ color: "#F2994A" }} />
                    </div>
                </div>
                <div className="pricing">
                    <h4 className="text__night">1 room 1 nigth</h4>
                    <h3 className="price__for__night">$2,024</h3>
                    <small className="taxes">Taxes incl</small>
                </div>
            </div>
        </article>
    );
};
