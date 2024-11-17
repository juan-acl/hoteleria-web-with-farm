import "./itemHotel.css";

export const ItemHotel = () => {
    return (
        <article>
            <div className="card">
                <div className="img"></div>
                <div className="text">
                    <p className="h3"> The Spectator Hotel</p>
                    <p className="price">
                        $20204 <small> / Nigth</small>{" "}
                    </p>
                    <p className="p"> 124 Stret, City, Country </p>
                </div>
            </div>
        </article>
    );
};
