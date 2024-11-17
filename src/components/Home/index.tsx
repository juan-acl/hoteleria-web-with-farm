import { Hotel } from "~components/Hotels";
import "./home.css";

export const Home = () => {
    return (
        <div>
            <div className="container__home">
                <div className="img__home">
                    <div className="resume">
                        <h4>Chase elegant. Reserve your dream staty now.</h4>
                        <span>
                            Discover the finest hotels from all over the world.{" "}
                        </span>
                    </div>
                </div>
            </div>
            <div className="container__resumn__hotels">
                <h3 className="text__top__rated">Top Rated</h3>
                <div className="top__rated__line"></div>
                <div className="hotel__container__home">
                    <Hotel />
                </div>
            </div>
            <div className="container__resumn__hotels">
                <h3 className="text__top__rated">Category</h3>
                <div className="top__rated__line"></div>
                <div className="hotel__container__home">
                    <Hotel />
                </div>
            </div>
        </div>
    );
};