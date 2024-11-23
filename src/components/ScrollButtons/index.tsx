import "./scrollButtons.css";

export const ScrollButtons = () => {
    return (
        <>
            <div className="contianer__scroll_buttons">
                <div className="item__scroll__button">
                    <button>Overview</button>
                </div>
                <div className="item__scroll__button">
                    <button>Amenities</button>
                </div>
                <div className="item__scroll__button">
                    <button>Rooms</button>
                </div>
                <div className="item__scroll__button">
                    <button>Location</button>
                </div>
            </div>
            <div className="line__active_section"></div>
        </>
    );
};
