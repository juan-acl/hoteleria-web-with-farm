import "./itemHotel.css";

export const ItemHotel = () => {
    return (
        <article>
            <div className="card">
                <div className="img"></div>
                <div className="text">
                    <h3>The Spectator Hotel</h3>
                    <p className="price">
                        $20204 <small> / Night</small>
                    </p>
                    <p>124 Street, City, Country</p>
                </div>
            </div>
        </article>
    );
};
